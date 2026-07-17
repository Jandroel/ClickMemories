const configuredSiteUrl = (import.meta.env.PUBLIC_SITE_URL || "https://clickmemories.example.com").replace(/\/$/, "");
const configuredEmail = import.meta.env.PUBLIC_CONTACT_EMAIL || "hola@clickmemories.pe";
const configuredPhone = import.meta.env.PUBLIC_CONTACT_PHONE || "+51 999 888 777";
const configuredWhatsapp = (import.meta.env.PUBLIC_CONTACT_WHATSAPP || "51999888777").replace(/\D/g, "");
const developerEmail = import.meta.env.PUBLIC_DEVELOPER_EMAIL || configuredEmail;
const developerWhatsapp = (import.meta.env.PUBLIC_DEVELOPER_WHATSAPP || configuredWhatsapp).replace(/\D/g, "");

export const siteConfig = {
  name: "ClickMemories",
  tagline: "Historias reales, recuerdos que permanecen.",
  description:
    "Fotografía y video con mirada cinematográfica para bodas, eventos, marcas y personas que quieren recordar cada detalle con intención.",
  url: configuredSiteUrl,
  email: configuredEmail,
  phone: configuredPhone,
  whatsapp: configuredWhatsapp,
  defaultSocialImage: "/images/projects/velo-y-memoria.webp",
  analyticsDomain: import.meta.env.PUBLIC_PLAUSIBLE_DOMAIN || "",
  responseTime: "Respondemos en menos de 24 horas hábiles.",
  availability: "Agenda 2026 abierta para bodas, marcas y sesiones editoriales.",
  location: "Lima, Perú"
};

export const developerProfile = {
  name: import.meta.env.PUBLIC_DEVELOPER_NAME || "Jandroel",
  role: "Diseñador y desarrollador web",
  location: import.meta.env.PUBLIC_DEVELOPER_LOCATION || "Lima, Perú",
  email: developerEmail,
  whatsapp: developerWhatsapp,
  githubUrl: "https://github.com/Jandroel",
  sourceUrl: "https://github.com/Jandroel/ClickMemories",
  bio:
    "Diseño y desarrollo sitios web que combinan una identidad visual propia con objetivos comerciales claros. Trabajo desde la estrategia y el contenido hasta el código responsive, las pruebas y la entrega.",
  strengths: [
    "Dirección visual y sistemas de diseño",
    "Desarrollo frontend responsive",
    "SEO técnico, accesibilidad y rendimiento"
  ]
};

export const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/trabajos/", label: "Trabajos" },
  { href: "/servicios/", label: "Servicios" },
  { href: "/sobre-mi/", label: "Sobre mí" },
  { href: "/contacto/", label: "Contacto" }
];

export const imageLibrary = {
  wedding: "/images/library/wedding.webp",
  weddingVeil: "/images/library/wedding-veil.webp",
  portrait: "/images/library/portrait.webp",
  coffeeCup: "/images/library/coffee-cup.webp",
  coffeeBeans: "/images/library/coffee-beans.webp",
  production: "/images/library/production.webp",
  studio: "/images/library/studio.webp"
};

export const stats = [
  { value: "8+", label: "años contando historias" },
  { value: "120+", label: "proyectos entregados" },
  { value: "4K", label: "entrega final disponible" },
  { value: "72 h", label: "primer adelanto curado" }
];

export const showreelFrames = [
  {
    src: imageLibrary.wedding,
    alt: "Novios abrazados con luz cálida.",
    label: "Bodas"
  },
  {
    src: imageLibrary.coffeeCup,
    alt: "Manos sosteniendo una taza de café.",
    label: "Marca"
  },
  {
    src: imageLibrary.portrait,
    alt: "Retrato con luz natural.",
    label: "Retrato"
  },
  {
    src: imageLibrary.production,
    alt: "Cámara profesional grabando contenido.",
    label: "Video"
  },
  {
    src: imageLibrary.weddingVeil,
    alt: "Pareja bajo un velo blanco.",
    label: "Editorial"
  }
];

export const services = [
  {
    title: "Film de boda",
    description:
      "Una pieza emocional y cinematográfica que cuida ritmo, luz, sonido y gestos pequeños.",
    details: ["Cobertura desde preparación hasta fiesta", "Trailer breve para compartir", "Film principal editado con narrativa"],
    startingAt: "Desde S/ 2,800"
  },
  {
    title: "Fotografía de eventos",
    description:
      "Cobertura documental para celebraciones, lanzamientos y encuentros donde importa la atmósfera.",
    details: ["Galería digital privada", "Selección editorial", "Entrega optimizada para web y redes"],
    startingAt: "Desde S/ 1,200"
  },
  {
    title: "Video para marcas",
    description:
      "Historias visuales para marcas que necesitan verse humanas, cuidadas y memorables.",
    details: ["Guion visual y dirección", "Piezas horizontales y verticales", "Color y sonido listos para campaña"],
    startingAt: "Desde S/ 2,400"
  },
  {
    title: "Sesión de retrato",
    description:
      "Retratos honestos con luz natural, dirección suave y una estética editorial sin rigidez.",
    details: ["Moodboard previo", "Dirección de pose y expresión", "Galería final retocada"],
    startingAt: "Desde S/ 650"
  },
  {
    title: "Reels para redes sociales",
    description:
      "Contenido vertical con intención: ritmo ágil, planos limpios y edición lista para publicar.",
    details: ["Plan de clips por objetivo", "Subtítulos opcionales", "Versiones para Instagram, TikTok y Shorts"],
    startingAt: "Desde S/ 900"
  },
  {
    title: "Edición y postproducción",
    description:
      "Selección, color, montaje y acabado para transformar material existente en piezas consistentes.",
    details: ["Corrección de color", "Diseño sonoro básico", "Adaptación a formatos finales"],
    startingAt: "Cotización a medida"
  }
];

export const servicePackages = [
  {
    name: "Esencial",
    idealFor: "Sesiones breves, retratos, contenido puntual o cobertura íntima.",
    price: "Desde S/ 650",
    includes: ["Reunión de enfoque", "Cobertura de 2 a 3 horas", "Galería curada", "Entrega digital optimizada"],
    delivery: "Entrega final entre 5 y 7 días hábiles"
  },
  {
    name: "Historia completa",
    idealFor: "Bodas, eventos y marcas que necesitan una narrativa visual sólida.",
    price: "Desde S/ 2,800",
    includes: ["Plan visual previo", "Cobertura extendida", "Fotografía y/o video", "Trailer o selección editorial"],
    delivery: "Primer adelanto en 72 horas"
  },
  {
    name: "Cinemático premium",
    idealFor: "Producciones con dirección, piezas múltiples y acabado de campaña.",
    price: "Cotización a medida",
    includes: ["Moodboard y guion visual", "Dirección en set", "Piezas horizontales y verticales", "Color y postproducción avanzada"],
    delivery: "Calendario de entrega por hitos"
  }
];

export const processSteps = [
  {
    title: "Escuchamos la historia",
    text: "Partimos de una conversación breve para entender personas, intención, tiempos y sensibilidad visual."
  },
  {
    title: "Diseñamos la mirada",
    text: "Creamos una ruta de cobertura con referencias, momentos clave, luz esperada y prioridades reales."
  },
  {
    title: "Capturamos sin invadir",
    text: "Trabajamos con dirección sutil, atención a detalles y presencia discreta para que todo se sienta natural."
  },
  {
    title: "Editamos con memoria",
    text: "La selección, el color y el montaje buscan conservar emoción, no fabricar una versión ajena de la historia."
  }
];

export const testimonials = [
  {
    quote:
      "Sentimos que nos miraron de verdad. El video no solo muestra la boda: se siente como volver a estar ahí.",
    author: "María y Alonso",
    context: "Boda íntima en Pachacámac"
  },
  {
    quote:
      "El material de marca quedó elegante, cálido y muy humano. Pudimos usarlo en campaña sin perder autenticidad.",
    author: "Café Aurora",
    context: "Historias de marca"
  },
  {
    quote:
      "La sesión fue tranquila, cuidada y cero forzada. Por primera vez me reconocí en mis retratos.",
    author: "Lucía R.",
    context: "Retrato editorial"
  }
];

export const faqs = [
  {
    question: "¿Con cuánto tiempo debo reservar?",
    answer:
      "Para bodas recomendamos reservar con 3 a 6 meses de anticipación. Para sesiones y contenido de marca, lo ideal es separar fecha con 2 a 4 semanas."
  },
  {
    question: "¿Trabajan fuera de Lima?",
    answer:
      "Sí. Cotizamos cobertura en otras ciudades incluyendo traslados, tiempos de viaje y logística necesaria para cuidar la entrega."
  },
  {
    question: "¿Entregan fotos y videos listos para redes?",
    answer:
      "Sí. Podemos preparar versiones horizontales, verticales, galerías privadas y clips breves según el uso final del proyecto."
  },
  {
    question: "¿Puedo pedir una estética específica?",
    answer:
      "Sí. Antes de la sesión revisamos referencias, pero siempre las adaptamos a luz real, locación y personalidad de cada historia."
  }
];

export const contactOptions = [
  "Film de boda",
  "Fotografía de eventos",
  "Video para marcas",
  "Sesión de retrato",
  "Reels para redes sociales",
  "Cobertura completa",
  "Edición y postproducción"
];

export const budgetRanges = [
  "Menos de S/ 1,000",
  "S/ 1,000 - S/ 2,500",
  "S/ 2,500 - S/ 5,000",
  "Más de S/ 5,000",
  "Aún estoy definiendo"
];
