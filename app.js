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


// ===== FORMATOS =====
// timed: usa el reloj de la sesión. auto: avanza solo al acertar (los formatos con
// voz esperan un toque en "Siguiente", porque algunos navegadores solo dejan
// reproducir audio después de un gesto de la persona).
const FORMATS = {
  palabras:  { label: 'Palabras',  icon: '🔤', timed: true,  auto: true  },
  completar: { label: 'Completar', icon: '📝', timed: true,  auto: true  },
  ordenar:   { label: 'Ordenar',   icon: '🧩', timed: false, auto: false },
  escuchar:  { label: 'Escuchar',  icon: '🔊', timed: true,  auto: false },
  hablar:    { label: 'Hablar',    icon: '🎤', timed: false, auto: false },
};
const SPEAK_PASS = 0.75; // proporción de palabras que tienen que salir para dar por buena la frase

// ===== ESTADO (solo de la sesión: no se guarda nada) =====
let currentMode = 'general';
let currentFormat = 'palabras';
let score = 0;
let level = 1;
let current = null;          // palabra actual { es, en, opts, tip }
let phrase = null;           // frase de ejemplo de esa palabra { ex, exEs }
let activeFormat = 'palabras'; // formato real de la pregunta (puede caer a "palabras" si falta algo)
let listenVariant = 'palabra'; // en Escuchar: 'palabra' o 'frase'
let correctText = '';        // texto de la opción correcta en los formatos de elegir
let audioText = '';          // lo que dicen los botones de audio
let answered = false;
let timerId = null;
let advanceId = null;
let timeLeft = 30;
let questionCount = 0;
let sessionCorrect = 0;
let sessionTotal = 0;
let recognition = null;
let listening = false;
let micFailed = false;
let order = null;            // estado del formato Ordenar

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

const escapeRegex = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function phraseFor(word) {
  const entry = typeof GLOSSARY !== 'undefined' ? GLOSSARY[word.en.toLowerCase()] : null;
  return entry && entry.ex ? { ex: entry.ex, exEs: entry.exEs || '' } : null;
}

function blankOut(sentence, word) {
  return sentence.replace(new RegExp(`\\b${escapeRegex(word)}\\b`, 'i'), '_____');
}

// Pregunta con hasta tres líneas: consigna, enunciado y traducción.
function setQuestion(label, main, sub = '') {
  const q = $('question');
  q.replaceChildren();
  [['q-label', label], ['q-main', main], ['q-sub', sub]].forEach(([cls, text]) => {
    if (!text) return;
    const line = document.createElement('span');
    line.className = cls;
    line.textContent = text;
    q.appendChild(line);
  });
}

function updateScoreboard() {
  $('score').textContent = `Pts: ${score}`;
  $('session-stats').textContent = `${sessionCorrect}/${sessionTotal} ✓`;
}

// ===== SELECTORES =====
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

function renderFormatSelector() {
  const container = $('format-selector');
  container.replaceChildren();
  Object.entries(FORMATS).forEach(([key, format]) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'format-btn' + (key === currentFormat ? ' active' : '');
    btn.dataset.format = key;
    btn.setAttribute('aria-pressed', String(key === currentFormat));
    const icon = document.createElement('span');
    icon.className = 'format-icon';
    icon.textContent = format.icon;
    icon.setAttribute('aria-hidden', 'true');
    const label = document.createElement('span');
    label.textContent = format.label;
    btn.append(icon, label);
    btn.addEventListener('click', () => switchFormat(key));
    container.appendChild(btn);
  });
}

function resetSession() {
  clearTimeout(advanceId);
  advanceId = null;
  questionCount = 0;
  sessionCorrect = 0;
  sessionTotal = 0;
}

function switchMode(key) {
  resetSession();
  currentMode = key;
  renderModeSelector();
  newQuestion();
  toast(`Modo: ${MODES[key].name}`);
}

function switchFormat(key) {
  if (key === currentFormat) return;
  if (key === 'escuchar' && !Voz.canSpeak()) {
    toast('Este navegador no puede reproducir voz');
    return;
  }
  resetSession();
  currentFormat = key;
  renderFormatSelector();
  newQuestion();
  toast(`Formato: ${FORMATS[key].label}`);
}

// ===== VOZ: control común =====
function stopVoice() {
  Voz.stopSpeaking();
  if (recognition) {
    try { recognition.abort(); } catch { /* ya estaba parado */ }
    recognition = null;
  }
  listening = false;
  setMic(false);
}

function setMic(on) {
  listening = on;
  const mic = $('mic-btn');
  mic.classList.toggle('listening', on);
  mic.textContent = on ? '⏹ Escuchando… tocá para parar' : '🎤 Hablar';
}

// ===== LÓGICA PRINCIPAL =====
function resetQuestionUI() {
  stopVoice();
  $('result').classList.add('hidden');
  $('explanation').classList.add('hidden');
  $('streak-display')?.classList.add('hidden');
  $('next-btn').classList.add('hidden');
  ['audio-controls', 'order-area', 'speak-area', 'speak-text', 'self-eval', 'options']
    .forEach((id) => $(id).classList.add('hidden'));
  $('options').classList.remove('options-wide');
  $('question').classList.remove('question-anim');
  void $('question').offsetWidth; // reinicia la animación de entrada
  $('question').classList.add('question-anim');
}

function startTimer() {
  clearInterval(timerId);
  timerId = null;
  if (!FORMATS[activeFormat].timed) {
    $('timer').textContent = '∞';
    return;
  }
  timeLeft = parseInt($('duration-input').value) || 30;
  $('timer').textContent = formatTime(timeLeft);
  timerId = setInterval(() => {
    timeLeft--;
    $('timer').textContent = formatTime(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(timerId);
      if (!answered) handleAnswer(null);
    }
  }, 1000);
}

function newQuestion() {
  clearTimeout(advanceId);
  advanceId = null;
  answered = false;
  const vocab = MODES[currentMode].vocab;
  let next;
  do { next = vocab[Math.floor(Math.random() * vocab.length)]; } while (vocab.length > 1 && next === current);
  current = next;
  phrase = phraseFor(current);
  questionCount++;
  sessionTotal++;

  // Sin frase de ejemplo, los formatos de frases caen a Palabras para esa pregunta.
  activeFormat = currentFormat !== 'palabras' && !phrase ? 'palabras' : currentFormat;

  resetQuestionUI();
  $('type').textContent = `${MODES[currentMode].name.split(' ')[0].toUpperCase()} · ${FORMATS[currentFormat].label.toUpperCase()} | ${questionCount}`;

  if (activeFormat === 'ordenar') startOrder();
  else if (activeFormat === 'hablar') startSpeak();
  else startChoice();
  startTimer();
}

// ----- Formatos de elegir: Palabras, Completar y Escuchar -----
function setChoices(options, wide = false) {
  const area = $('options');
  area.classList.remove('hidden');
  area.classList.toggle('options-wide', wide);
  area.querySelectorAll('.option').forEach((btn, i) => {
    btn.textContent = options[i];
    btn.className = 'option';
    btn.disabled = false;
  });
}

function startChoice() {
  if (activeFormat === 'completar') {
    correctText = current.en;
    setQuestion('Completá la frase', blankOut(phrase.ex, current.en), phrase.exEs);
    setChoices(shuffle([...current.opts]));
    return;
  }
  if (activeFormat === 'escuchar') {
    $('audio-controls').classList.remove('hidden');
    const distractors = shuffle(MODES[currentMode].vocab.filter((v) => v !== current))
      .map(phraseFor)
      .filter((p) => p && p.exEs && p.exEs !== phrase.exEs)
      .slice(0, 3)
      .map((p) => p.exEs);
    listenVariant = distractors.length === 3 && Math.random() < 0.5 ? 'frase' : 'palabra';
    if (listenVariant === 'frase') {
      correctText = phrase.exEs;
      audioText = phrase.ex;
      setQuestion('Escuchá la frase', '¿Qué significa?');
      setChoices(shuffle([phrase.exEs, ...distractors]), true);
    } else {
      correctText = current.en;
      audioText = current.en;
      setQuestion('Escuchá y elegí', '¿Qué palabra dijo?');
      setChoices(shuffle([...current.opts]));
    }
    Voz.speak(audioText);
    return;
  }
  correctText = current.en;
  setQuestion('', `¿Cómo se dice "${current.es}" en inglés?`);
  setChoices(shuffle([...current.opts]));
}

// ----- Ordenar -----
function startOrder() {
  const ending = (phrase.ex.match(/[.?!]+$/) || [''])[0];
  const words = phrase.ex.slice(0, phrase.ex.length - ending.length).split(/\s+/).filter(Boolean);
  const bank = words.map((text, id) => ({ id, text }));
  for (let tries = 0; tries < 8; tries++) {
    shuffle(bank);
    if (bank.some((chip, i) => chip.text !== words[i])) break;
  }
  order = { words, ending, bank, placed: [], done: false };
  setQuestion('Armá la frase en inglés', `“${phrase.exEs}”`);
  $('order-area').classList.remove('hidden');
  renderOrder();
}

function makeChip(chip, onClick, state = '') {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = `chip ${state}`.trim();
  btn.textContent = chip.text;
  btn.disabled = order.done;
  btn.addEventListener('click', onClick);
  return btn;
}

function renderOrder() {
  const answerArea = $('order-answer');
  const bankArea = $('order-bank');
  answerArea.replaceChildren();
  bankArea.replaceChildren();
  if (!order.placed.length) {
    const hint = document.createElement('span');
    hint.className = 'order-hint';
    hint.textContent = 'Tocá las palabras en orden';
    answerArea.appendChild(hint);
  }
  order.placed.forEach((id, position) => {
    const chip = order.bank.find((c) => c.id === id);
    let state = 'placed';
    if (order.done) state += chip.text.toLowerCase() === order.words[position].toLowerCase() ? ' ok' : ' bad';
    answerArea.appendChild(makeChip(chip, () => {
      order.placed = order.placed.filter((x) => x !== id);
      renderOrder();
    }, state));
  });
  order.bank.filter((c) => !order.placed.includes(c.id)).forEach((chip) => {
    bankArea.appendChild(makeChip(chip, () => {
      order.placed.push(chip.id);
      renderOrder();
    }));
  });
  $('order-check').disabled = order.done || order.placed.length !== order.words.length;
  $('order-clear').disabled = order.done || !order.placed.length;
}

function checkOrder() {
  if (answered || !order || order.placed.length !== order.words.length) return;
  answered = true;
  order.done = true;
  const attempt = order.placed.map((id) => order.bank.find((c) => c.id === id).text);
  const correct = attempt.join(' ').toLowerCase() === order.words.join(' ').toLowerCase();
  renderOrder();
  const exp = $('explanation');
  if (correct) {
    awardCorrect();
    showPhraseExplanation(exp, '✓ ');
    exp.className = 'explanation success';
  } else {
    $('result').textContent = 'Casi. Así queda la frase:';
    $('result').className = 'error';
    showPhraseExplanation(exp, '');
    exp.className = 'explanation error';
    vibrate([100, 50, 100]);
  }
  finishAnswerUI();
}

// ----- Hablar -----
function startSpeak() {
  audioText = phrase.ex;
  setQuestion('Decilo en inglés', `“${phrase.exEs}”`);
  $('speak-area').classList.remove('hidden');
  $('audio-controls').classList.toggle('hidden', !Voz.canSpeak());
  const text = $('speak-text');
  text.replaceChildren();
  $('reveal-btn').classList.remove('hidden');
  const canListen = Voz.canListen();
  $('mic-btn').classList.toggle('hidden', !canListen);
  $('privacy-note').classList.toggle('hidden', !canListen);
  $('self-eval').classList.toggle('hidden', canListen);
  setStatus(canListen
    ? 'Escuchá el modelo y tocá 🎤 para decirlo.'
    : 'Tu navegador no reconoce voz: escuchá el modelo, decilo en voz alta y marcá cómo te salió.');
}

function setStatus(message) {
  $('speak-status').textContent = message;
}

// Muestra la frase; con "hits" pinta en verde lo que salió y en rojo lo que faltó.
function showSpeakText(hits = null) {
  const text = $('speak-text');
  text.replaceChildren();
  const tokens = phrase.ex.split(/\s+/);
  const usable = hits && hits.length === tokens.length;
  tokens.forEach((token, i) => {
    const word = document.createElement('span');
    word.className = 'speak-word' + (usable ? (hits[i] ? ' hit' : ' miss') : '');
    word.textContent = token;
    text.append(word, ' ');
  });
  text.classList.remove('hidden');
  $('reveal-btn').classList.add('hidden');
}

function toggleMic() {
  if (listening && recognition) {
    recognition.stop();
    return;
  }
  stopVoice();
  micFailed = false;
  setStatus('Preparando el micrófono…');
  recognition = Voz.listen({
    onStart: () => { setMic(true); setStatus('Escuchando… decí la frase completa.'); },
    onResult: handleSpoken,
    onError: handleMicError,
    onEnd: (heard) => {
      setMic(false);
      if (!heard && !micFailed) setStatus('No te escuché. Probá de nuevo, más cerca del micrófono.');
    },
  });
  if (!recognition) {
    setMic(false);
    handleMicError('start');
  }
}

function handleSpoken(alternatives) {
  const result = Voz.bestMatch(phrase.ex, alternatives);
  const total = result.words.length;
  const said = result.hits.filter(Boolean).length;
  showSpeakText(result.hits);
  if (result.ratio >= SPEAK_PASS) {
    setStatus(`Escuché: “${result.heard}” · ${said} de ${total} palabras.`);
    if (!answered) {
      answered = true;
      awardCorrect();
      showPhraseExplanation($('explanation'), '✓ ');
      $('explanation').className = 'explanation success';
      finishAnswerUI();
    }
  } else {
    setStatus(`Escuché: “${result.heard || '…'}” · ${said} de ${total} palabras. Probá de nuevo o seguí.`);
    $('next-btn').classList.remove('hidden');
  }
}

function handleMicError(code) {
  micFailed = true;
  setMic(false);
  const messages = {
    'not-allowed': 'No tengo permiso para usar el micrófono. Activalo en los ajustes del navegador, o marcá vos cómo te salió.',
    'service-not-allowed': 'El navegador no deja usar el reconocimiento de voz. Marcá vos cómo te salió.',
    'network': 'El reconocimiento de voz necesita conexión. Marcá vos cómo te salió.',
    'audio-capture': 'No encuentro un micrófono. Marcá vos cómo te salió.',
    'no-speech': 'No te escuché. Probá de nuevo, más cerca del micrófono.',
    'aborted': '',
  };
  const message = code in messages ? messages[code] : 'No pude reconocer tu voz. Marcá vos cómo te salió.';
  if (message) setStatus(message);
  if (code !== 'no-speech' && code !== 'aborted') $('self-eval').classList.remove('hidden');
}

// ===== RESPUESTAS =====
function awardCorrect() {
  score += 10;
  sessionCorrect++;
  $('result').textContent = '¡Correcto! +10 pts';
  $('result').className = 'success';
  if ($('confetti-toggle').checked) confetti();
  vibrate([30, 20, 30]);
  if (score >= level * 50) { level++; $('level').textContent = `Nivel: ${level}`; }
}

function finishAnswerUI() {
  $('result').classList.remove('hidden');
  $('explanation').classList.remove('hidden');
  updateScoreboard();
  const wasCorrect = $('result').classList.contains('success');
  if (wasCorrect && FORMATS[activeFormat].auto) advanceId = setTimeout(newQuestion, 900);
  else $('next-btn').classList.remove('hidden');
}

function showPhraseExplanation(exp, prefix = '') {
  exp.replaceChildren();
  const block = document.createElement('div');
  block.className = 'explanation-word';
  const title = document.createElement('strong');
  title.lang = 'en';
  title.textContent = `${prefix}${phrase.ex}`;
  block.appendChild(title);
  if (phrase.exEs) {
    const translation = document.createElement('p');
    translation.className = 'explanation-translation';
    translation.textContent = phrase.exEs;
    block.appendChild(translation);
  }
  exp.appendChild(block);
  const tip = document.createElement('em');
  tip.textContent = `${current.en} = ${current.es}${current.tip ? ' · ' + current.tip : ''}`;
  exp.appendChild(tip);
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

// Los formatos donde las opciones son palabras explican con la palabra; los de frase, con la frase.
const explainsWithPhrase = () => activeFormat === 'escuchar' && listenVariant === 'frase';

function handleAnswer(btn) {
  if (answered) return;
  answered = true;
  clearInterval(timerId);
  stopVoice();

  const isCorrect = !!btn && btn.textContent === correctText;
  $('options').querySelectorAll('.option').forEach((b) => {
    b.disabled = true;
    if (b.textContent === correctText) b.classList.add('correct');
    else if (b === btn) b.classList.add('wrong');
  });

  const exp = $('explanation');
  if (isCorrect) {
    awardCorrect();
    if (activeFormat === 'palabras') {
      exp.innerHTML = `<strong>✓ ${current.en}</strong> = "${current.es}"`;
    } else {
      showPhraseExplanation(exp, '✓ ');
    }
    exp.className = 'explanation success';
  } else {
    $('result').textContent = explainsWithPhrase() ? 'Incorrecto. Era esta frase:' : `Incorrecto. Era "${correctText}"`;
    $('result').className = 'error';
    if (explainsWithPhrase()) showPhraseExplanation(exp, '');
    else showAnswerExplanation(exp, btn ? btn.textContent : null, 'Repasá esta palabra.');
    exp.className = 'explanation error';
    vibrate([100, 50, 100]);
  }
  finishAnswerUI();
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
  stopVoice();

  const byPhrase = ['ordenar', 'hablar'].includes(activeFormat) || explainsWithPhrase();
  $('result').textContent = `Saltado. Era "${byPhrase ? phrase.ex : correctText}"`;
  $('result').className = 'error';
  $('result').classList.remove('hidden');
  const exp = $('explanation');
  if (byPhrase) showPhraseExplanation(exp, '');
  else showAnswerExplanation(exp, null);
  exp.className = 'explanation error';
  exp.classList.remove('hidden');
  $('options').querySelectorAll('.option').forEach((b) => {
    b.disabled = true;
    if (b.textContent === correctText) b.classList.add('correct');
  });
  if (activeFormat === 'ordenar' && order) {
    order.done = true;
    order.bank = order.words.map((text, id) => ({ id, text })); // se arma sola la frase correcta para verla
    order.placed = order.bank.map((c) => c.id);
    renderOrder();
  }
  if (activeFormat === 'hablar') showSpeakText();
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

$('play-btn').addEventListener('click', () => Voz.speak(audioText));
$('slow-btn').addEventListener('click', () => Voz.speak(audioText, { slow: true }));
$('reveal-btn').addEventListener('click', () => showSpeakText());
$('mic-btn').addEventListener('click', toggleMic);
$('self-ok').addEventListener('click', () => {
  if (answered) return;
  answered = true;
  showSpeakText();
  awardCorrect();
  showPhraseExplanation($('explanation'), '✓ ');
  $('explanation').className = 'explanation success';
  finishAnswerUI();
});
$('self-retry').addEventListener('click', () => {
  showSpeakText();
  setStatus('Escuchá el modelo otra vez y probá de nuevo.');
  Voz.speak(audioText);
});
$('order-clear').addEventListener('click', () => {
  if (!order || order.done) return;
  order.placed = [];
  renderOrder();
});
$('order-check').addEventListener('click', checkOrder);

document.addEventListener('visibilitychange', () => { if (document.hidden) stopVoice(); });

$('settings-btn').addEventListener('click', () => $('settings-panel').classList.remove('hidden'));
$('close-settings').addEventListener('click', () => $('settings-panel').classList.add('hidden'));

$('duration-input').addEventListener('change', () => {
  const val = parseInt($('duration-input').value);
  if (val >= 15 && val <= 120) timeLeft = val;
});

// ===== INICIO =====
renderModeSelector();
renderFormatSelector();
newQuestion();

// ===== USO SIN CONEXIÓN =====
if ('serviceWorker' in navigator) {
  try {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  } catch {
    // Algunos entornos, como file://, no permiten registrar un service worker.
  }
}
