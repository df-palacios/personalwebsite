/**
 * URL de la Rifa Virtual para el botón "Lanzar proyecto".
 *
 * La URL se deduce del host con el que se abrió la página, así funciona
 * tanto desde el PC como desde el celular en la misma red WiFi, sin
 * tener que editar nada:
 *
 *   http://localhost:5173       -> http://localhost:3000
 *   http://192.168.1.103:5173   -> http://192.168.1.103:3000
 *
 * En producción se usa la ruta real donde está desplegada la rifa.
 *
 * Se puede forzar con VITE_RIFA_URL en el .env.
 */

// Puerto por defecto de Create React App, que es lo que usa la rifa.
const RIFA_DEV_PORT = import.meta.env.VITE_RIFA_PORT || 3000;

const PRODUCTION_PATH = "/proyectos/rifa";

function resolveRifaUrl() {
  if (import.meta.env.VITE_RIFA_URL) {
    return import.meta.env.VITE_RIFA_URL;
  }

  if (typeof window !== "undefined" && window.location) {
    const { protocol, hostname } = window.location;

    const isLocal =
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      /^\d+\.\d+\.\d+\.\d+$/.test(hostname);

    if (isLocal) {
      return `${protocol}//${hostname}:${RIFA_DEV_PORT}`;
    }
  }

  return PRODUCTION_PATH;
}

export const RIFA_URL = resolveRifaUrl();
