/**
 * URLs de los proyectos hermanos (Rifa Virtual, Libreta de Contactos) para
 * los botones "Lanzar proyecto".
 *
 * La URL se deduce del host con el que se abrió la página, así funciona
 * tanto desde el PC como desde el celular en la misma red WiFi, sin tener
 * que editar nada:
 *
 *   http://localhost:5173       -> http://localhost:<puerto dev>
 *   http://192.168.1.103:5173   -> http://192.168.1.103:<puerto dev>
 *
 * En producción se usa la ruta real donde está desplegado cada proyecto.
 *
 * Se puede forzar cada una con VITE_RIFA_URL / VITE_LIBRETA_URL en el .env.
 */

function resolveProjectUrl({ devPort, productionPath, overrideEnvValue }) {
  if (overrideEnvValue) {
    return overrideEnvValue;
  }

  if (typeof window !== "undefined" && window.location) {
    const { protocol, hostname } = window.location;

    const isLocal =
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      /^\d+\.\d+\.\d+\.\d+$/.test(hostname);

    if (isLocal) {
      return `${protocol}//${hostname}:${devPort}`;
    }
  }

  return productionPath;
}

// Puerto por defecto de Create React App, que es lo que usa la rifa.
const RIFA_DEV_PORT = import.meta.env.VITE_RIFA_PORT || 3000;

export const RIFA_URL = resolveProjectUrl({
  devPort: RIFA_DEV_PORT,
  productionPath: "/proyectos/rifa",
  overrideEnvValue: import.meta.env.VITE_RIFA_URL,
});

// La Libreta usa 3001 (no 3000) para poder correr junto a la rifa sin
// chocar puertos — ver vista/.env.example en ese repo.
const LIBRETA_DEV_PORT = import.meta.env.VITE_LIBRETA_PORT || 3001;

export const LIBRETA_URL = resolveProjectUrl({
  devPort: LIBRETA_DEV_PORT,
  productionPath: "/proyectos/libreta",
  overrideEnvValue: import.meta.env.VITE_LIBRETA_URL,
});
