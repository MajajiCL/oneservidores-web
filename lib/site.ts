export const site = {
  name: "OneServidores",
  domain: "oneservidores.cl",
  tagline: "Infraestructura cloud que no descansa.",
  description:
    "Datacenter Tier III en Chile y Argentina. VPS KVM y LXC, servidores dedicados, web hosting cPanel, dominios y colocation con red de 1 Gbps a 10 Gbps.",
  // Spline 3D scene URL — to change scene, browse community.spline.design,
  // copy any "scene.splinecode" URL and paste here.
  splineSceneUrl: "https://prod.spline.design/bPyo53wTrYqJgajV/scene.splinecode",
  contact: {
    phones: ["+56 2 2840 2574", "+56 9 7155 0409"],
    email: "contacto@oneservidores.cl",
    address: "Ahumada 370, Oficina 516, Santiago — Chile",
    portal: "https://portal.oneservidores.com",
    support247: true
  },
  social: {
    facebook: "https://facebook.com/oneservidores",
    twitter:  "https://twitter.com/oneservidores",
    linkedin: "https://www.linkedin.com/company/oneservidores"
  }
};

export const nav = [
  { label: "Nosotros", href: "/nosotros" },
  {
    label: "Hosting",
    href: "/hosting",
    children: [
      { label: "Web Hosting cPanel",     href: "/hosting/cpanel",            desc: "Sitios y correo con LiteSpeed + LSCache" },
      { label: "Hosting High Performance", href: "/hosting/high-performance",desc: "NVMe afinado para picos de tráfico" },
      { label: "Hosting Windows",        href: "/hosting/windows",           desc: "Plesk con ASP.NET y MSSQL" },
      { label: "WordPress Optimizado",   href: "/hosting/wordpress",         desc: "CyberPanel + OpenLiteSpeed para WP" },
      { label: "Reseller Hosting",       href: "/hosting/reseller",          desc: "Revende con WHM y marca blanca" },
      { label: "Dominios",               href: "/dominios",                  desc: ".cl .com .net .com.ar y más" }
    ]
  },
  {
    label: "Servidores",
    href: "/servidores",
    children: [
      { label: "VPS KVM Linux",        href: "/vps/kvm",    desc: "Virtualización completa, root real" },
      { label: "VPS LXC Linux",        href: "/vps/lxc",    desc: "Contenedores rápidos y livianos" },
      { label: "Servidores Dedicados", href: "/dedicados",  desc: "Hardware exclusivo en Chile" },
      { label: "Colocation / Housing", href: "/colocation", desc: "Alojamiento de tu propio hardware" }
    ]
  },
  {
    label: "Streaming",
    href: "/streaming",
    children: [
      { label: "Audio Streaming",      href: "/streaming/audio", desc: "Radio online: SHOUTcast, Icecast, autoDJ" },
      { label: "Video Streaming",      href: "/streaming/video", desc: "Live, VOD y RTMP con ancho de banda real" }
    ]
  },
  {
    label: "Servicios",
    href: "/servicios",
    children: [
      { label: "Asesorías",            href: "/servicios/asesorias",  desc: "Consultoría tecnológica y arquitectura" },
      { label: "Ingeniería",           href: "/servicios/ingenieria", desc: "Implementación, migración y hardening" },
      { label: "Seguridad",            href: "/servicios/seguridad",  desc: "WAF, anti-DDoS, monitoreo gestionado" }
    ]
  },
  { label: "Datacenter", href: "/datacenter" },
  { label: "Contacto",   href: "/contacto" }
];

export const products = [
  {
    slug: "vps-kvm",
    name: "VPS KVM",
    tag: "Virtualización completa",
    desc: "Recursos dedicados, kernel propio y panel de control en minutos.",
    icon: "server"
  },
  {
    slug: "vps-lxc",
    name: "VPS LXC",
    tag: "Contenedores Linux",
    desc: "Rendimiento bare-metal con la flexibilidad de un contenedor.",
    icon: "boxes"
  },
  {
    slug: "vps-wordpress",
    name: "VPS WordPress",
    tag: "CyberPanel + LiteSpeed",
    desc: "WordPress afinado para Core Web Vitals y picos de tráfico.",
    icon: "wordpress"
  },
  {
    slug: "dedicados",
    name: "Servidores Dedicados",
    tag: "Hardware exclusivo",
    desc: "CPU AMD EPYC e Intel Xeon, NVMe RAID y red 10 Gbps.",
    icon: "cpu"
  },
  {
    slug: "hosting",
    name: "Web Hosting cPanel",
    tag: "LiteSpeed Enterprise",
    desc: "Cuentas con LSCache, antispam, backups y SSL gratis.",
    icon: "globe"
  },
  {
    slug: "colocation",
    name: "Colocation",
    tag: "Aloja tu hardware",
    desc: "Espacio en rack en datacenter Tier III con energía redundante.",
    icon: "cabinet"
  },
  {
    slug: "reseller",
    name: "Reseller",
    tag: "WHM marca blanca",
    desc: "Empieza tu propia operación con respaldo de OneServidores.",
    icon: "users"
  },
  {
    slug: "dominios",
    name: "Dominios",
    tag: ".cl .com .net .ar",
    desc: "Registro, traslado y gestión DNS desde un único panel.",
    icon: "tag"
  }
];

export const metrics = [
  { value: "10 Gbps", label: "Red por servidor",      hint: "Hasta 10 Gbps de uplink dedicado" },
  { value: "Tier III",label: "Estándar de datacenter",hint: "Energía y enfriamiento redundantes" },
  { value: "24 × 7",  label: "Operación NOC",         hint: "Monitoreo y respuesta continua" },
  { value: "99.99%",  label: "SLA de disponibilidad", hint: "Compromiso medido y publicado" },
  { value: "2 países",label: "Chile y Argentina",     hint: "Presencia regional con baja latencia" },
  { value: "15 min",  label: "Provisión VPS",         hint: "Tu VPS listo en minutos, no días" }
];

export const principles = [
  { title: "Infraestructura crítica",
    body: "Cada componente — energía, enfriamiento, red y almacenamiento — está pensado para no fallar." },
  { title: "Operación 24×7",
    body: "Un equipo humano vigila tus servicios todo el año, no sólo en horario de oficina." },
  { title: "Conectividad sin fronteras",
    body: "Acuerdos con carriers Tier 1 y rutas redundantes hacia toda Latinoamérica y el mundo." },
  { title: "Experiencia y confianza",
    body: "Más de una década operando infraestructura para empresas chilenas y argentinas." },
  { title: "Escalable bajo demanda",
    body: "Pasa de un VPS de 2 vCPU a un dedicado AMD EPYC sin migrar de proveedor." },
  { title: "Soporte que entiende",
    body: "Ingenieros que hablan tu idioma, no scripts. Te respondemos rápido y con criterio." }
];

export const sectors = [
  { name: "Misión crítica", desc: "Cargas que no admiten downtime: pagos, salud, control industrial." },
  { name: "Salud",          desc: "Sistemas clínicos, fichas médicas y telemedicina con cumplimiento normativo." },
  { name: "Gobierno",       desc: "Plataformas públicas con trazabilidad, soberanía y SLA estricto." },
  { name: "E-commerce",     desc: "Tiendas con peaks predecibles y latencia mínima para conversión." },
  { name: "Gaming",         desc: "Servidores con baja latencia y mitigación DDoS para comunidades." },
  { name: "Banca y fintech",desc: "Infraestructura auditable, cifrada y con respaldos verificados." },
  { name: "Hotelería",      desc: "PMS, motores de reservas y APIs siempre disponibles." },
  { name: "Streaming",      desc: "Distribución de audio y video con ancho de banda real." }
];

export const partners = [
  "Tier III", "AMD EPYC", "Intel Xeon", "LiteSpeed", "cPanel", "WHM",
  "CyberPanel", "OpenLiteSpeed", "Cloudflare", "Telxius", "Sparkle", "Level 3"
];
