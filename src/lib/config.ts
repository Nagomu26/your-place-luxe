// =============================================================================
// CONFIGURACION DEL NEGOCIO (plantilla Your Place)
// Edita aqui para cambiar nombre, telefono, direccion y zona. Se aplica a toda
// la pagina (logo, footer, botones, WhatsApp, titulo y meta descripcion).
// Para cada cliente nuevo: cambia TODAS las lineas marcadas con "<- personalizar".
// =============================================================================

export const CONFIG = {
  // Marca / logo del sitio
  nombre: "Your Place",
  logoNombre: "Your",
  logoAcento: "Place",
  // --- Datos del negocio (<- personalizar por cliente) ---
  telefono: "600 000 000",
  telefonoEnlace: "600000000",
  whatsapp: "34600000000",
  direccion: "C/ Ejemplo, 1",
  ciudad: "Tu ciudad",
  localidad: "Tu codigo postal y ciudad (Toledo)",
  zona: "TU CIUDAD",
  tituloSeo: "El sitio de tu negocio en internet",
  lemaSeo: "Lo que ofreces, tu ubicacion y como contactar.",
  // --- Ficha legal / contacto (RGPD - LSSI). Rellena para un cliente nuevo ---
  email: "",
  nif: "",
  dominio: "https://TU-DOMINIO.com",
  webhookToken: "hbbk-r65j9hj3-bwan4kpy",
} as const;

export type Config = typeof CONFIG;