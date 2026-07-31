/**
 * Capa delgada sobre `cuelume` (https://github.com/Danilaa1/cuelume).
 *
 * Motivo de envolverla en vez de importarla directo en cada componente:
 * - Si por cualquier razón el paquete no carga, la app NO debe romperse:
 *   aquí todo cae en no-ops silenciosos.
 * - Centraliza qué "cue" corresponde a cada interacción, para mantener
 *   una paleta sonora coherente en todo el sitio.
 *
 * Sonidos disponibles en cuelume (los únicos válidos):
 *   chime, sparkle, droplet, bloom, whisper, tick, press, release,
 *   toggle, success
 */

const noop = () => {};

let api = null;
let pending = null;
let enabled = true;

function load() {
  if (api) return Promise.resolve(api);

  if (!pending) {
    pending = import("cuelume")
      .then((mod) => {
        api = mod;
        return mod;
      })
      .catch(() => {
        // Paquete ausente o bloqueado: seguimos sin sonido, sin errores.
        api = { play: noop, bind: noop, setEnabled: noop };
        return api;
      });
  }

  return pending;
}

/** Conecta los atributos data-cuelume-* del DOM. Llamar una vez al arrancar. */
export function initSound() {
  if (typeof window === "undefined") return;

  load().then((mod) => {
    try {
      mod.bind?.();
    } catch {
      /* silencio */
    }
  });
}

/**
 * Reproduce un cue puntual desde código.
 *
 * Importante: si el módulo ya está cargado se llama a play() de forma
 * SÍNCRONA, dentro del mismo gesto del usuario. Pasar por un `.then()`
 * innecesario hacía que el navegador (política de autoplay) descartara
 * el primer sonido en algunos clics, que era la causa de que a veces
 * los botones no sonaran.
 */
export function cue(name) {
  if (!enabled || typeof window === "undefined") return;

  if (api) {
    try {
      api.play?.(name);
    } catch {
      /* silencio */
    }
    return;
  }

  load().then((mod) => {
    try {
      mod.play?.(name);
    } catch {
      /* silencio */
    }
  });
}

/** Permite silenciar toda la paleta (por si más adelante quieres un switch). */
export function setSoundEnabled(value) {
  enabled = Boolean(value);

  load().then((mod) => {
    try {
      mod.setEnabled?.(enabled);
    } catch {
      /* silencio */
    }
  });
}

/* Semántica de la paleta en este sitio, para no repetir strings sueltos. */
export const CUES = {
  toggleLanguage: "toggle",
  toggleTheme: "toggle",
  menu: "toggle",
  navClick: "tick",
  download: "success",
  openProject: "release",
};
