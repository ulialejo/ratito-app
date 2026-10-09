// Voz de Ratito: pronunciar frases (escuchar) y reconocer lo que decís (hablar).
// No guarda ni envía nada por su cuenta: el audio del micrófono lo procesa el
// servicio de reconocimiento de voz del navegador, solo mientras usás "Hablar".
const Voz = (() => {
  const hasWindow = typeof window !== 'undefined';
  const synth = hasWindow && 'speechSynthesis' in window ? window.speechSynthesis : null;
  const Recognition = hasWindow ? (window.SpeechRecognition || window.webkitSpeechRecognition || null) : null;
  let voice = null;

  // Las voces cargan de forma asíncrona en varios navegadores.
  function pickVoice() {
    if (!synth) return;
    const voices = synth.getVoices();
    voice = voices.find(v => v.lang === 'en-US' && v.localService)
      || voices.find(v => v.lang === 'en-US')
      || voices.find(v => v.lang && v.lang.startsWith('en'))
      || null;
  }
  if (synth) {
    pickVoice();
    if (synth.addEventListener) synth.addEventListener('voiceschanged', pickVoice);
  }

  const canSpeak = () => !!synth;
  const canListen = () => !!Recognition;

  function speak(text, { slow = false } = {}) {
    if (!synth || !text) return;
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    if (voice) utterance.voice = voice;
    utterance.rate = slow ? 0.6 : 0.95;
    synth.speak(utterance);
  }

  function stopSpeaking() {
    if (synth) synth.cancel();
  }

  // Devuelve el reconocedor activo (para poder pararlo) o null si no arrancó.
  function listen({ onStart, onResult, onError, onEnd }) {
    if (!Recognition) return null;
    const recognition = new Recognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.maxAlternatives = 3;
    let heardSomething = false;
    recognition.onstart = () => { if (onStart) onStart(); };
    recognition.onresult = (event) => {
      heardSomething = true;
      const first = event.results && event.results[0];
      const alternatives = first ? Array.from(first).map(item => item.transcript) : [];
      if (onResult) onResult(alternatives);
    };
    recognition.onerror = (event) => { if (onError) onError(event.error || 'error'); };
    recognition.onend = () => { if (onEnd) onEnd(heardSomething); };
    try {
      recognition.start();
    } catch {
      if (onError) onError('start');
      return null;
    }
    return recognition;
  }

  // ----- Comparación de lo dicho contra la frase objetivo -----
  function normalize(text) {
    return String(text)
      .toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/['’‘`]/g, '') // "hotel's" y "hotels" cuentan igual para el reconocedor
      .replace(/[^a-z0-9 ]+/g, ' ')
      .split(/\s+/)
      .filter(Boolean);
  }

  // Coincidencia exacta: "room" no es "roof". El margen de error lo da el umbral de aciertos.
  const similar = (a, b) => a === b;

  // Alinea las palabras dichas con las de la frase (subsecuencia común más larga)
  // y marca cuáles de la frase objetivo se escucharon, respetando el orden.
  function compare(target, heard) {
    const words = normalize(target);
    const spoken = normalize(heard);
    const table = Array.from({ length: words.length + 1 }, () => new Array(spoken.length + 1).fill(0));
    for (let i = 1; i <= words.length; i++) {
      for (let j = 1; j <= spoken.length; j++) {
        table[i][j] = similar(words[i - 1], spoken[j - 1])
          ? table[i - 1][j - 1] + 1
          : Math.max(table[i - 1][j], table[i][j - 1]);
      }
    }
    const hits = new Array(words.length).fill(false);
    let i = words.length;
    let j = spoken.length;
    while (i > 0 && j > 0) {
      if (similar(words[i - 1], spoken[j - 1]) && table[i][j] === table[i - 1][j - 1] + 1) {
        hits[i - 1] = true; i--; j--;
      } else if (table[i - 1][j] >= table[i][j - 1]) i--;
      else j--;
    }
    const matched = hits.filter(Boolean).length;
    return { words, hits, ratio: words.length ? matched / words.length : 0 };
  }

  // De las alternativas del reconocedor, se queda con la que mejor calza.
  function bestMatch(target, alternatives) {
    let best = { words: normalize(target), hits: [], ratio: 0, heard: '' };
    alternatives.forEach(text => {
      const result = compare(target, text);
      if (result.ratio >= best.ratio) best = { ...result, heard: text };
    });
    return best;
  }

  return { canSpeak, canListen, speak, stopSpeaking, listen, normalize, compare, bestMatch };
})();

if (typeof module !== 'undefined') module.exports = Voz;
