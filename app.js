// ===== DATOS POR MODO =====
const MODES = {
  general: {
    name: "General 🌍",
    vocab: [
      { es: "manzana", en: "apple", opts: ["apple", "pear", "peach", "plum"], tip: "Fruta roja/verde común" },
      { es: "casa", en: "house", opts: ["house", "roof", "door", "room"], tip: "Edificio donde vivís" },
      { es: "trabajo", en: "job", opts: ["job", "salary", "office", "interview"], tip: "Empleo remunerado" },
      { es: "amigo", en: "friend", opts: ["friend", "neighbor", "stranger", "enemy"], tip: "Persona cercana" },
      { es: "agua", en: "water", opts: ["water", "juice", "tea", "coffee"], tip: "Líquido vital, sin sabor" },
      { es: "comer", en: "eat", opts: ["eat", "drink", "cook", "wash"], tip: "Ingerir alimentos" },
      { es: "dormir", en: "sleep", opts: ["sleep", "wake", "walk", "dream"], tip: "Descanso nocturno" },
      { es: "correr", en: "run", opts: ["run", "walk", "jump", "swim"], tip: "Moverse rápido a pie" },
      { es: "leer", en: "read", opts: ["read", "write", "draw", "listen"], tip: "Decodificar texto" },
      { es: "hablar", en: "speak", opts: ["speak", "write", "hear", "read"], tip: "Producir palabras" },
      { es: "tiempo", en: "time", opts: ["time", "calendar", "clock", "watch"], tip: "Lo que mide el reloj" },
      { es: "dinero", en: "money", opts: ["money", "wallet", "price", "shop"], tip: "Medio de cambio" },
      { es: "familia", en: "family", opts: ["family", "neighbors", "friends", "teachers"], tip: "Parientes cercanos" },
      { es: "ciudad", en: "city", opts: ["city", "street", "forest", "bridge"], tip: "Gran población urbana" },
      { es: "problema", en: "problem", opts: ["problem", "promise", "plan", "purpose"], tip: "Dificultad a resolver" },
      { es: "solución", en: "solution", opts: ["solution", "question", "mistake", "cause"], tip: "Respuesta al problema" },
      { es: "puerta", en: "door", opts: ["door", "wall", "floor", "ceiling"], tip: "Se abre para entrar" },
      { es: "ventana", en: "window", opts: ["window", "roof", "stairs", "gate"], tip: "Permite ver hacia afuera" },
      { es: "mesa", en: "table", opts: ["table", "chair", "bed", "shelf"], tip: "Superficie con patas" },
      { es: "silla", en: "chair", opts: ["chair", "desk", "sofa", "cupboard"], tip: "Asiento con respaldo" },
      { es: "libro", en: "book", opts: ["book", "pencil", "ruler", "eraser"], tip: "Tiene páginas para leer" },
      { es: "escuela", en: "school", opts: ["school", "hospital", "factory", "museum"], tip: "Lugar para estudiar" },
      { es: "árbol", en: "tree", opts: ["tree", "flower", "grass", "seed"], tip: "Tiene tronco y ramas" },
      { es: "perro", en: "dog", opts: ["dog", "cat", "horse", "rabbit"], tip: "Animal que ladra" },
      { es: "zapato", en: "shoe", opts: ["shoe", "hat", "shirt", "glove"], tip: "Se lleva en el pie" },
      { es: "feliz", en: "happy", opts: ["happy", "sad", "angry", "tired"], tip: "Sentís alegría" },
    ]
  },
  hoteleria: {
    name: "Hotelería 🏨",
    vocab: [
      { es: "huésped", en: "guest", opts: ["guest", "receptionist", "porter", "chef"], tip: "Quién se aloja en el hotel" },
      { es: "reserva", en: "booking", opts: ["booking", "receipt", "brochure", "complaint"], tip: "Reservar habitación" },
      { es: "recepción", en: "front desk", opts: ["front desk", "kitchen", "parking lot", "laundry room"], tip: "Donde hacés check-in" },
      { es: "tarjeta de acceso", en: "key card", opts: ["key card", "name tag", "remote control", "doorbell"], tip: "Tarjeta magnética de la habitación" },
      { es: "personal de limpieza de habitaciones", en: "housekeeper", opts: ["housekeeper", "receptionist", "waitress", "cashier"], tip: "Limpia la habitación" },
      { es: "registro de salida", en: "checkout", opts: ["checkout", "check-in", "room service", "booking"], tip: "Salida del hotel" },
      { es: "desayuno", en: "breakfast", opts: ["breakfast", "lunch", "dinner", "dessert"], tip: "Primera comida del día" },
      { es: "servicio de habitaciones", en: "room service", opts: ["room service", "luggage storage", "wake-up call", "airport transfer"], tip: "Comida a la habitación" },
      { es: "comodidades del hotel", en: "amenities", opts: ["amenities", "complaints", "penalties", "cancellations"], tip: "Servicios incluidos (pileta, gym, wifi)" },
      { es: "ocupación", en: "occupancy", opts: ["occupancy", "capacity", "revenue", "room rate"], tip: "Porcentaje de habitaciones ocupadas" },
      { es: "tarifa", en: "rate", opts: ["rate", "receipt", "deposit", "discount"], tip: "Precio por noche" },
      { es: "cancelación", en: "cancellation", opts: ["cancellation", "confirmation", "extension", "payment"], tip: "Anular reserva" },
      { es: "registro de entrada anticipado", en: "early check-in", opts: ["early check-in", "late checkout", "room upgrade", "luggage storage"], tip: "Entrar antes de la hora estándar" },
      { es: "salida tardía", en: "late checkout", opts: ["late checkout", "early check-in", "room service", "advance payment"], tip: "Salir después de la hora estándar" },
      { es: "huésped que no se presenta", en: "no-show", opts: ["no-show", "walk-in", "housekeeper", "porter"], tip: "Huésped que no aparece" },
      { es: "huésped sin reserva", en: "walk-in", opts: ["walk-in", "no-show", "travel agent", "receptionist"], tip: "Cliente sin reserva previa" },
      { es: "toalla", en: "towel", opts: ["towel", "blanket", "pillow", "curtain"], tip: "Sirve para secarse" },
      { es: "sábana", en: "sheet", opts: ["sheet", "towel", "carpet", "mattress"], tip: "Cubre el colchón" },
      { es: "almohada", en: "pillow", opts: ["pillow", "blanket", "mirror", "hanger"], tip: "Apoyás la cabeza" },
      { es: "manta", en: "blanket", opts: ["blanket", "sheet", "towel", "curtain"], tip: "Abriga en la cama" },
      { es: "equipaje", en: "luggage", opts: ["luggage", "furniture", "laundry", "supplies"], tip: "Valijas del huésped" },
      { es: "ascensor", en: "elevator", opts: ["elevator", "staircase", "corridor", "balcony"], tip: "Sube y baja entre pisos" },
      { es: "pasillo", en: "corridor", opts: ["corridor", "bedroom", "terrace", "kitchen"], tip: "Conecta las habitaciones" },
      { es: "habitación individual", en: "single room", opts: ["single room", "double room", "meeting room", "dining room"], tip: "Para una persona" },
      { es: "habitación doble", en: "double room", opts: ["double room", "single room", "laundry room", "storage room"], tip: "Para dos personas" },
      { es: "caja fuerte", en: "safe", opts: ["safe", "fridge", "wardrobe", "drawer"], tip: "Guarda objetos de valor" },
      { es: "lavandería", en: "laundry room", opts: ["laundry room", "dining room", "front desk", "parking lot"], tip: "Donde se lava la ropa" },
      { es: "estacionamiento", en: "parking lot", opts: ["parking lot", "swimming pool", "roof terrace", "meeting room"], tip: "Lugar para los autos" },
      { es: "servicio de despertador", en: "wake-up call", opts: ["wake-up call", "room service", "late checkout", "guided tour"], tip: "Llamada para despertarte" },
      { es: "traslado al aeropuerto", en: "airport transfer", opts: ["airport transfer", "city tour", "room upgrade", "luggage storage"], tip: "Transporte hasta el aeropuerto" },
      { es: "habitación disponible", en: "vacant room", opts: ["vacant room", "occupied room", "meeting room", "laundry room"], tip: "Está libre para alojarse" },
    ]
  },
  trabajo: {
    name: "Trabajo/Oficina 💼",
    vocab: [
      { es: "reunión", en: "meeting", opts: ["meeting", "salary", "desk", "printer"], tip: "Junta de trabajo" },
      { es: "correo", en: "email", opts: ["email", "spreadsheet", "keyboard", "envelope"], tip: "Mensaje electrónico" },
      { es: "jefe", en: "boss", opts: ["boss", "intern", "applicant", "client"], tip: "Quién te supervisa" },
      { es: "compañero", en: "coworker", opts: ["coworker", "customer", "supplier", "visitor"], tip: "Par en el trabajo" },
      { es: "proyecto", en: "project", opts: ["project", "payslip", "meeting", "office"], tip: "Trabajo con objetivo y plazo" },
      { es: "plazo", en: "deadline", opts: ["deadline", "start date", "lunch break", "salary"], tip: "Fecha límite de entrega" },
      { es: "informe", en: "report", opts: ["report", "request", "contract", "invoice"], tip: "Documento con resultados" },
      { es: "cliente", en: "client", opts: ["client", "employee", "supplier", "applicant"], tip: "Quién compra el servicio" },
      { es: "factura", en: "invoice", opts: ["invoice", "contract", "catalog", "order form"], tip: "Documento de cobro" },
      { es: "presupuesto", en: "budget", opts: ["budget", "profit", "debt", "receipt"], tip: "Plan financiero" },
      { es: "contrato", en: "contract", opts: ["contract", "invoice", "resume", "calendar"], tip: "Acuerdo legal escrito" },
      { es: "ascenso", en: "promotion", opts: ["promotion", "resignation", "retirement", "dismissal"], tip: "Subida de puesto" },
      { es: "capacitación", en: "training", opts: ["training", "recruitment", "payroll", "overtime"], tip: "Aprendizaje laboral" },
      { es: "home office", en: "remote work", opts: ["remote work", "business trip", "office supplies", "night shift"], tip: "Trabajar desde casa" },
      { es: "feedback", en: "feedback", opts: ["feedback", "deadline", "payroll", "workload"], tip: "Retroalimentación sobre desempeño" },
      { es: "salario", en: "salary", opts: ["salary", "budget", "profit", "debt"], tip: "Pago por el trabajo" },
      { es: "escritorio", en: "desk", opts: ["desk", "chair", "shelf", "cabinet"], tip: "Mesa de oficina" },
      { es: "impresora", en: "printer", opts: ["printer", "scanner", "monitor", "keyboard"], tip: "Imprime documentos" },
      { es: "hoja de cálculo", en: "spreadsheet", opts: ["spreadsheet", "slideshow", "email", "calendar"], tip: "Organiza datos en celdas" },
      { es: "entrevista", en: "interview", opts: ["interview", "invoice", "contract", "deadline"], tip: "Conversación para un empleo" },
      { es: "currículum", en: "resume", opts: ["resume", "payslip", "budget", "agenda"], tip: "Resume tu experiencia laboral" },
      { es: "proveedor", en: "supplier", opts: ["supplier", "client", "applicant", "intern"], tip: "Abastece a la empresa" },
      { es: "horas extra", en: "overtime", opts: ["overtime", "sick leave", "lunch break", "vacation"], tip: "Trabajo fuera del horario habitual" },
      { es: "renuncia", en: "resignation", opts: ["resignation", "promotion", "training", "recruitment"], tip: "Decisión de dejar el empleo" },
      { es: "carga de trabajo", en: "workload", opts: ["workload", "payroll", "revenue", "inventory"], tip: "Cantidad de tareas asignadas" },
    ]
  },
  mineria: {
    name: "Minería ⛏️",
    vocab: [
      { es: "yacimiento", en: "deposit", opts: ["deposit", "crusher", "warehouse", "truck"], tip: "Concentración mineral explotable" },
      { es: "mineral explotable", en: "ore", opts: ["ore", "soil", "timber", "fuel"], tip: "Roca con metal valioso" },
      { es: "extracción", en: "extraction", opts: ["extraction", "storage", "inspection", "maintenance"], tip: "Sacar mineral del suelo" },
      { es: "perforación", en: "drilling", opts: ["drilling", "crushing", "weighing", "loading"], tip: "Hacer huecos en la roca" },
      { es: "voladura", en: "blasting", opts: ["blasting", "drilling", "pumping", "hauling"], tip: "Romper roca con explosivos" },
      { es: "camión de acarreo", en: "haul truck", opts: ["haul truck", "excavator", "conveyor belt", "drill rig"], tip: "Camión minero grande" },
      { es: "pala minera", en: "shovel", opts: ["shovel", "haul truck", "pump", "crusher"], tip: "Máquina que carga camiones" },
      { es: "trituradora", en: "crusher", opts: ["crusher", "pump", "generator", "drill rig"], tip: "Reduce tamaño del mineral" },
      { es: "molino", en: "mill", opts: ["mill", "truck", "pump", "conveyor belt"], tip: "Muele mineral a polvo" },
      { es: "flotación", en: "flotation", opts: ["flotation", "drilling", "blasting", "hauling"], tip: "Separar minerales por burbujas" },
      { es: "relave", en: "tailings", opts: ["tailings", "fuel", "ore", "concentrate"], tip: "Desecho del proceso" },
      { es: "concentrado", en: "concentrate", opts: ["concentrate", "tailings", "fuel", "water"], tip: "Producto final rico en metal" },
      { es: "ley del mineral", en: "grade", opts: ["grade", "depth", "weight", "hardness"], tip: "Porcentaje de metal en la roca" },
      { es: "campamento", en: "camp", opts: ["camp", "warehouse", "workshop", "tunnel"], tip: "Donde vive el personal" },
      { es: "turno", en: "shift", opts: ["shift", "break", "salary", "leave"], tip: "Período de trabajo asignado" },
      { es: "EPP", en: "PPE", opts: ["PPE", "ore", "fuel", "tailings"], tip: "Equipo de protección personal" },
      { es: "casco", en: "helmet", opts: ["helmet", "goggles", "gloves", "boots"], tip: "Protege la cabeza" },
      { es: "guantes", en: "gloves", opts: ["gloves", "boots", "helmet", "earplugs"], tip: "Protegen las manos" },
      { es: "botas de seguridad", en: "safety boots", opts: ["safety boots", "safety glasses", "work gloves", "hard hat"], tip: "Protegen los pies" },
      { es: "gafas de seguridad", en: "safety glasses", opts: ["safety glasses", "earplugs", "gloves", "helmet"], tip: "Protegen los ojos" },
      { es: "cinta transportadora", en: "conveyor belt", opts: ["conveyor belt", "drill rig", "haul truck", "water pump"], tip: "Mueve material sobre una banda" },
      { es: "bomba", en: "pump", opts: ["pump", "crusher", "mill", "generator"], tip: "Impulsa líquidos" },
      { es: "ventilación", en: "ventilation", opts: ["ventilation", "drilling", "blasting", "crushing"], tip: "Renueva el aire" },
      { es: "túnel", en: "tunnel", opts: ["tunnel", "slope", "stockpile", "workshop"], tip: "Paso subterráneo" },
      { es: "muestra", en: "sample", opts: ["sample", "shipment", "stockpile", "toolbox"], tip: "Porción para analizar" },
      { es: "cobre", en: "copper", opts: ["copper", "iron", "gold", "silver"], tip: "Metal de color rojizo" },
      { es: "oro", en: "gold", opts: ["gold", "silver", "copper", "lead"], tip: "Metal precioso amarillo" },
      { es: "hierro", en: "iron", opts: ["iron", "copper", "gold", "silver"], tip: "Metal usado para hacer acero" },
      { es: "polvo", en: "dust", opts: ["dust", "mud", "gravel", "steam"], tip: "Partículas finas en el aire" },
      { es: "mantenimiento", en: "maintenance", opts: ["maintenance", "extraction", "loading", "blasting"], tip: "Cuidado de los equipos" },
      { es: "balanza", en: "scale", opts: ["scale", "drill", "pump", "valve"], tip: "Instrumento para pesar" },
    ]
  },
  tech: {
    name: "Tech/IT 💻",
    vocab: [
      { es: "servidor", en: "server", opts: ["server", "keyboard", "browser", "compiler"], tip: "Computadora que da servicios" },
      { es: "base de datos", en: "database", opts: ["database", "spreadsheet", "password", "processor"], tip: "Donde se guardan los datos" },
      { es: "API", en: "API", opts: ["API", "CPU", "RAM", "SSD"], tip: "Interfaz entre programas" },
      { es: "frontend", en: "frontend", opts: ["frontend", "database", "compiler", "firewall"], tip: "Lo que ve el usuario" },
      { es: "backend", en: "backend", opts: ["backend", "browser", "keyboard", "stylesheet"], tip: "Lógica del servidor" },
      { es: "desplegar", en: "deploy", opts: ["deploy", "delete", "encrypt", "download"], tip: "Poner en producción" },
      { es: "repositorio", en: "repository", opts: ["repository", "compiler", "browser", "password"], tip: "Donde está el código" },
      { es: "rama", en: "branch", opts: ["branch", "commit", "tag", "patch"], tip: "Línea de desarrollo paralela" },
      { es: "fusionar", en: "merge", opts: ["merge", "split", "delete", "rename"], tip: "Unir cambios de ramas" },
      { es: "bug", en: "bug", opts: ["bug", "feature", "backup", "license"], tip: "Error en el código" },
      { es: "debug", en: "debug", opts: ["debug", "compile", "deploy", "encrypt"], tip: "Encontrar y corregir bugs" },
      { es: "latencia", en: "latency", opts: ["latency", "bandwidth", "uptime", "resolution"], tip: "Demora en la red" },
      { es: "ancho de banda", en: "bandwidth", opts: ["bandwidth", "latency", "uptime", "resolution"], tip: "Capacidad de transferencia" },
      { es: "nube", en: "cloud", opts: ["cloud", "desktop", "keyboard", "cable"], tip: "Servidores de otro" },
      { es: "contenedor", en: "container", opts: ["container", "compiler", "router", "browser"], tip: "App empaquetada con dependencias" },
      { es: "contraseña", en: "password", opts: ["password", "username", "filename", "folder"], tip: "Clave para acceder" },
      { es: "teclado", en: "keyboard", opts: ["keyboard", "mouse", "monitor", "speaker"], tip: "Tiene teclas para escribir" },
      { es: "pantalla", en: "screen", opts: ["screen", "keyboard", "printer", "microphone"], tip: "Muestra la imagen" },
      { es: "archivo", en: "file", opts: ["file", "folder", "shortcut", "window"], tip: "Documento guardado" },
      { es: "carpeta", en: "folder", opts: ["folder", "file", "tab", "cursor"], tip: "Agrupa archivos" },
      { es: "navegador", en: "browser", opts: ["browser", "compiler", "database", "firewall"], tip: "Abre páginas web" },
      { es: "copia de seguridad", en: "backup", opts: ["backup", "update", "download", "shortcut"], tip: "Copia para recuperar datos" },
      { es: "cifrar", en: "encrypt", opts: ["encrypt", "delete", "compress", "rename"], tip: "Proteger datos con una clave" },
      { es: "actualización", en: "update", opts: ["update", "backup", "password", "error"], tip: "Incorpora cambios al software" },
      { es: "enlace", en: "link", opts: ["link", "heading", "paragraph", "caption"], tip: "Te lleva a otra página" },
    ]
  },
  diaadia: {
    name: "Día a día 🏠",
    vocab: [
      { es: "supermercado", en: "supermarket", opts: ["supermarket", "bakery", "pharmacy", "library"], tip: "Compras semanales" },
      { es: "farmacia", en: "pharmacy", opts: ["pharmacy", "bakery", "butcher shop", "bookstore"], tip: "Medicamentos y salud" },
      { es: "banco", en: "bank", opts: ["bank", "hospital", "school", "station"], tip: "Dinero y cuentas" },
      { es: "médico", en: "doctor", opts: ["doctor", "nurse", "pharmacist", "dentist"], tip: "Consulta de salud" },
      { es: "receta", en: "prescription", opts: ["prescription", "recipe", "diagnosis", "appointment"], tip: "Orden del médico" },
      { es: "colectivo", en: "bus", opts: ["bus", "train", "taxi", "ferry"], tip: "Transporte público" },
      { es: "subte", en: "subway", opts: ["subway", "tram", "bus", "ferry"], tip: "Tren subterráneo" },
      { es: "bici", en: "bike", opts: ["bike", "scooter", "skateboard", "motorcycle"], tip: "Transporte a pedales" },
      { es: "gimnasio", en: "gym", opts: ["gym", "stadium", "pool", "park"], tip: "Ejercicio físico" },
      { es: "lavar ropa", en: "do the laundry", opts: ["do the laundry", "do the dishes", "sweep the floor", "make the bed"], tip: "Ropa limpia" },
      { es: "cocinar", en: "cook", opts: ["cook", "freeze", "serve", "taste"], tip: "Preparar comida" },
      { es: "pedir delivery", en: "order delivery", opts: ["order delivery", "book a table", "pay the bill", "cook dinner"], tip: "Comida a domicilio" },
      { es: "pagar cuentas", en: "pay bills", opts: ["pay bills", "send emails", "buy groceries", "wash clothes"], tip: "Servicios básicos" },
      { es: "trámite", en: "paperwork", opts: ["paperwork", "appointment", "payment", "delivery"], tip: "Gestión administrativa" },
      { es: "turno", en: "appointment", opts: ["appointment", "walk-in", "waiting room", "prescription"], tip: "Hora reservada" },
      { es: "panadería", en: "bakery", opts: ["bakery", "pharmacy", "library", "butcher shop"], tip: "Vende pan" },
      { es: "parada de colectivo", en: "bus stop", opts: ["bus stop", "train platform", "taxi rank", "parking lot"], tip: "Donde esperás el colectivo" },
      { es: "semáforo", en: "traffic light", opts: ["traffic light", "crosswalk", "roundabout", "sidewalk"], tip: "Señales roja, amarilla y verde" },
      { es: "vereda", en: "sidewalk", opts: ["sidewalk", "road", "crosswalk", "bridge"], tip: "Camino peatonal junto a la calle" },
      { es: "heladera", en: "fridge", opts: ["fridge", "oven", "dishwasher", "washing machine"], tip: "Mantiene los alimentos fríos" },
      { es: "horno", en: "oven", opts: ["oven", "fridge", "sink", "freezer"], tip: "Cocina con calor" },
      { es: "jabón", en: "soap", opts: ["soap", "shampoo", "toothpaste", "towel"], tip: "Sirve para lavarse las manos" },
      { es: "cepillo de dientes", en: "toothbrush", opts: ["toothbrush", "hairbrush", "comb", "razor"], tip: "Para la higiene dental" },
      { es: "paraguas", en: "umbrella", opts: ["umbrella", "raincoat", "boots", "scarf"], tip: "Se abre para cubrirte de la lluvia" },
      { es: "barrer el piso", en: "sweep the floor", opts: ["sweep the floor", "mop the floor", "wash the dishes", "make the bed"], tip: "Usás una escoba" },
    ]
  }
};

// ===== ESTADO =====
let currentMode = 'general';
let score = 0;
let level = 1;
let current = null;
let answered = false;
let timerId = null;
let advanceId = null;
let timeLeft = 30;
let questionCount = 0;
let sessionCorrect = 0;
let sessionTotal = 0;

const $ = (id) => document.getElementById(id);

// ===== UTILIDADES =====
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, '0');
  const s = (sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function confetti() {
  const emojis = ['✨','🎉','🔥','⚡','💯','🚀','🎯','🌟'];
  for (let i = 0; i < 12; i++) {
    const el = document.createElement('div');
    el.className = 'confetti';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.animationDuration = (0.8 + Math.random() * 0.7) + 's';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1500);
  }
}

function vibrate(pattern = [50]) {
  if (navigator.vibrate && $('sound-toggle')?.checked) navigator.vibrate(pattern);
}

function toast(msg, type = '') {
  const t = $('toast');
  t.textContent = msg;
  t.className = 'toast show ' + type;
  setTimeout(() => t.classList.remove('show'), 1800);
}

// ===== RENDER MODE SELECTOR =====
function renderModeSelector() {
  const container = $('mode-selector');
  container.innerHTML = '';
  Object.entries(MODES).forEach(([key, mode]) => {
    const btn = document.createElement('button');
    btn.className = 'mode-btn' + (key === currentMode ? ' active' : '');
    btn.textContent = mode.name;
    btn.dataset.mode = key;
    btn.addEventListener('click', () => switchMode(key));
    container.appendChild(btn);
  });
}

function switchMode(key) {
  clearTimeout(advanceId);
  advanceId = null;
  currentMode = key;
  questionCount = 0;
  sessionCorrect = 0;
  sessionTotal = 0;
  renderModeSelector();
  newQuestion();
  toast(`Modo: ${MODES[key].name}`);
}

// ===== LÓGICA PRINCIPAL =====
function newQuestion() {
  clearTimeout(advanceId);
  advanceId = null;
  answered = false;
  const vocab = MODES[currentMode].vocab;
  current = vocab[Math.floor(Math.random() * vocab.length)];
  questionCount++;
  sessionTotal++;

  $('question').textContent = `¿Cómo se dice "${current.es}" en inglés?`;
  $('type').textContent = `${MODES[currentMode].name.split(' ')[0].toUpperCase()} | ${questionCount}`;
  $('result').classList.add('hidden');
  $('explanation').classList.add('hidden');
  $('streak-display')?.classList.add('hidden');
  $('next-btn').classList.add('hidden');

  const opts = shuffle([...current.opts]);
  const btns = $('options').querySelectorAll('.option');
  btns.forEach((btn, i) => {
    btn.textContent = opts[i];
    btn.className = 'option';
    btn.disabled = false;
  });

  timeLeft = parseInt($('duration-input').value) || 30;
  $('timer').textContent = formatTime(timeLeft);
  clearInterval(timerId);
  timerId = setInterval(() => {
    timeLeft--;
    $('timer').textContent = formatTime(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(timerId);
      if (!answered) handleAnswer(null);
    }
  }, 1000);
}

function showAnswerExplanation(exp, chosen, fallbackTip = '') {
  exp.replaceChildren();

  function appendWord(label, text, fallbackMeaning = '') {
    const entry = typeof GLOSSARY !== 'undefined' ? GLOSSARY[text.toLowerCase()] : null;
    const meaning = entry?.es || fallbackMeaning;
    const block = document.createElement('div');
    block.className = 'explanation-word';
    const title = document.createElement('strong');
    title.textContent = `${label}: "${text}"`;
    if (meaning) title.textContent += label === 'Correcto' ? ` = "${meaning}"` : ` = ${meaning}`;
    block.appendChild(title);

    if (entry?.ex) {
      const example = document.createElement('p');
      example.className = 'explanation-example';
      example.lang = 'en';
      example.textContent = entry.ex;
      block.appendChild(example);
    }
    if (entry?.exEs) {
      const translation = document.createElement('p');
      translation.className = 'explanation-translation';
      translation.textContent = entry.exEs;
      block.appendChild(translation);
    }
    exp.appendChild(block);
  }

  if (chosen !== null) appendWord('Elegiste', chosen);
  appendWord('Correcto', current.en, current.es);
  const tip = document.createElement('em');
  tip.textContent = current.tip || fallbackTip;
  exp.appendChild(tip);
}

function handleAnswer(btn) {
  if (answered) return;
  answered = true;
  clearInterval(timerId);

  const isCorrect = btn && btn.textContent === current.en;
  const allBtns = $('options').querySelectorAll('.option');

  allBtns.forEach(b => {
    b.disabled = true;
    if (b.textContent === current.en) b.classList.add('correct');
    else if (b === btn) b.classList.add('wrong');
  });

  // Explicación SIEMPRE (acierto o error)
  const exp = $('explanation');
  if (isCorrect) {
    score += 10;
    sessionCorrect++;
    $('result').textContent = `¡Correcto! +10 pts`;
    $('result').className = 'success';
    exp.innerHTML = `<strong>✓ ${current.en}</strong> = "${current.es}"`;
    exp.className = 'explanation success';
    if ($('confetti-toggle').checked) confetti();
    vibrate([30, 20, 30]);
    if (score >= level * 50) { level++; $('level').textContent = `Nivel: ${level}`; }
    // Dar tiempo a leer el resultado antes de avanzar.
    advanceId = setTimeout(newQuestion, 900);
  } else {
    $('result').textContent = `Incorrecto. Era "${current.en}"`;
    $('result').className = 'error';
    showAnswerExplanation(exp, btn ? btn.textContent : null, 'Repasá esta palabra.');
    exp.className = 'explanation error';
    vibrate([100, 50, 100]);
    // Mostrar botón "Siguiente" para que avance cuando quiera
    $('next-btn').classList.remove('hidden');
  }

  $('result').classList.remove('hidden');
  exp.classList.remove('hidden');
  $('score').textContent = `Pts: ${score}`;
  $('session-stats').textContent = `${sessionCorrect}/${sessionTotal} ✓`;
}

function nextQuestion() {
  clearTimeout(advanceId);
  advanceId = null;
  newQuestion();
}

function skipQuestion() {
  clearTimeout(advanceId);
  advanceId = null;
  if (answered) { newQuestion(); return; }
  answered = true;
  clearInterval(timerId);
  $('result').textContent = `Saltado. Era "${current.en}"`;
  $('result').className = 'error';
  $('result').classList.remove('hidden');
  const exp = $('explanation');
  showAnswerExplanation(exp, null);
  exp.className = 'explanation error';
  exp.classList.remove('hidden');
  $('options').querySelectorAll('.option').forEach(b => {
    b.disabled = true;
    if (b.textContent === current.en) b.classList.add('correct');
  });
  $('next-btn').classList.remove('hidden');
  vibrate([50]);
}

// ===== EVENTOS =====
$('options').addEventListener('click', (e) => {
  const btn = e.target.closest('.option');
  if (btn && !btn.disabled) handleAnswer(btn);
});

$('skip-btn').addEventListener('click', skipQuestion);
$('next-btn').addEventListener('click', nextQuestion);

$('settings-btn').addEventListener('click', () => $('settings-panel').classList.remove('hidden'));
$('close-settings').addEventListener('click', () => $('settings-panel').classList.add('hidden'));

$('duration-input').addEventListener('change', () => {
  const val = parseInt($('duration-input').value);
  if (val >= 15 && val <= 120) timeLeft = val;
});

// ===== INICIO =====
renderModeSelector();
newQuestion();

// ===== USO SIN CONEXIÓN =====
if ('serviceWorker' in navigator) {
  try {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  } catch {
    // Algunos entornos, como file://, no permiten registrar un service worker.
  }
}
