import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * La galería de publicidad vive en `public/publicidad/` como HTML estático,
 * así que `vite build` la copia tal cual dentro de `dist/`.
 *
 * En producción Nginx ya resuelve `/publicidad` solo, porque `try_files
 * $uri $uri/` encuentra el directorio y la directiva `index` sirve su
 * index.html. En desarrollo no pasa lo mismo: el fallback SPA de Vite
 * atiende `/publicidad` antes que el middleware de archivos estáticos y
 * devuelve el index del portafolio.
 *
 * Este plugin solo interviene durante `npm run dev`, para que la URL se
 * comporte igual en local que en el servidor. No toca el build.
 */
function publicidadEnDev() {
  return {
    name: 'publicidad-en-dev',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const [ruta, query] = (req.url || '').split('?')
        const cola = query ? `?${query}` : ''

        // Sin la barra final, las rutas relativas de la galería colgarían de
        // la raíz del sitio. Nginx redirige solo en ese caso; aquí se hace
        // igual para que el comportamiento coincida.
        if (ruta === '/publicidad') {
          res.writeHead(301, { Location: `/publicidad/${cola}` })
          return res.end()
        }

        if (ruta === '/publicidad/') {
          req.url = `/publicidad/index.html${cola}`
        }

        next()
      })
    },
  }
}

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    publicidadEnDev(),
  ],
})
