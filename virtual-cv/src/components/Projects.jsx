import { useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../translations";
import { cue, CUES } from "../lib/sound";
import { RIFA_URL, LIBRETA_URL, CABRA_URL } from "../config/links";

const data = {
  es: {
    btn: "Lanzar proyecto",
    projects: [
      {
        name: "Sistema de gestión de restaurante",
        image: "/cabra-preview.png",
        video: "/cabraVideo.mp4",
        url: CABRA_URL,
        desc: "Sistema de gestión para un restaurante real: página pública con menú en vivo y reservas, más un panel interno con cinco roles (administración, caja, mesero, cocina y domiciliario). Incluye tablero de pedidos, inventario con alertas, reportes de ventas y domicilios con repartidores propios o plataformas.",
        tech: "React • Vite • Node.js • Express • MySQL • JWT • Karate DSL • Playwright",
      },
      {
        name: "Rifa Virtual",
        image: "/rifa-preview.png",
        video: "/rifaVideo.mp4",
        url: RIFA_URL,
        desc: "Aplicación de sorteos para Redes Tevesat SAS, con una ruleta interactiva y sonido animado hechos en React. El backend en Laravel expone una API REST sobre MySQL para gestionar clientes, premios y validar cada participación.",
        tech: "React 18 • SCSS • Swiper • Laravel 9 • MySQL • API REST",
      },
      {
        name: "Libreta de Contactos",
        image: "/libreta-preview.png",
        video: "/libretaVideo.mp4",
        url: LIBRETA_URL,
        desc: "CRUD de contactos con autenticación JWT, pensado como muestra de automation testing de punta a punta: Karate DSL prueba toda la API REST y Playwright automatiza la interfaz con el patrón Page Object Model.",
        tech: "React • Node.js • Express • Sequelize • MySQL • JWT • Karate DSL • Playwright • POM",
      },
    ],
  },
  en: {
    btn: "Launch Project",
    projects: [
      {
        name: "Restaurant management system",
        image: "/cabra-preview.png",
        video: "/cabraVideo.mp4",
        url: CABRA_URL,
        desc: "Management system for a real restaurant: a public site with a live menu and table booking, plus an internal panel with five roles (admin, cashier, waiter, kitchen and courier). Includes an order board, inventory alerts, sales reports and deliveries handled by in-house couriers or platforms.",
        tech: "React • Vite • Node.js • Express • MySQL • JWT • Karate DSL • Playwright",
      },
      {
        name: "Virtual Raffle",
        image: "/rifa-preview.png",
        video: "/rifaVideo.mp4",
        url: RIFA_URL,
        desc: "Raffle app for Redes Tevesat SAS, with an interactive prize wheel and animated sound built in React. The Laravel backend exposes a REST API over MySQL to manage customers, prizes, and entry validation.",
        tech: "React 18 • SCSS • Swiper • Laravel 9 • MySQL • REST API",
      },
      {
        name: "Contact Book",
        image: "/libreta-preview.png",
        video: "/libretaVideo.mp4",
        url: LIBRETA_URL,
        desc: "Contacts CRUD with JWT authentication, built as an end-to-end automation testing showcase: Karate DSL tests the full REST API and Playwright automates the UI using the Page Object Model pattern.",
        tech: "React • Node.js • Express • Sequelize • MySQL • JWT • Karate DSL • Playwright • POM",
      },
      
    ],
  },
};

function Card({ p, btn, darkMode }) {
  const v = useRef();
  const t = useRef();
  const [s, setS] = useState(false);

  return (
    <div
      className={`flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-lg ${
        darkMode
          ? "bg-slate-800 border-slate-700"
          : "bg-white border-slate-200 shadow-sm"
      }`}
    >
      <div
        className="relative aspect-video"
        onMouseEnter={() => {
          t.current = setTimeout(() => {
            if (v.current) {
              setS(true);
              v.current.currentTime = 0;
              v.current.play().catch(() => {});
            }
          }, 200);
        }}
        onMouseLeave={() => {
          clearTimeout(t.current);
          setS(false);
          if (v.current) {
            v.current.pause();
            v.current.currentTime = 0;
          }
        }}
      >
        <img
          src={p.image}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity ${
            s ? "opacity-0" : "opacity-100"
          }`}
          alt={p.name}
        />

        <video
          ref={v}
          src={p.video}
          preload="metadata"
          muted
          loop
          autoPlay={false}
          playsInline
          disablePictureInPicture
          controls={false}
          controlsList="nodownload nofullscreen noremoteplayback"
          tabIndex={-1}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity ${
            s ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div className="flex flex-1 flex-col p-4 md:p-6">
        <h3
          className={`text-lg md:text-xl font-semibold mb-2 md:mb-3 ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          {p.name}
        </h3>

        <p
          className={`text-sm md:text-base leading-relaxed ${
            darkMode ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {p.desc}
        </p>

        <p
          className={`text-sm font-medium mt-3 mb-4 md:mb-6 ${
            darkMode ? "text-blue-400" : "text-blue-600"
          }`}
        >
          {p.tech}
        </p>

        <a href={p.url} data-cuelume-press data-cuelume-release onClick={() => cue(CUES.openProject)} className="mt-auto inline-flex h-11 w-full items-center justify-center rounded-lg bg-blue-600 px-5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700">
          {btn}
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const { language } = useLanguage();
  const { darkMode } = useTheme();

  const d = data[language];
  const t = translations[language];

  return (
    <section
      id="projects"
      className={`py-8 md:py-16 border-t ${
        darkMode ? "border-slate-700" : "border-slate-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2
          className={`section-title ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          {t.projects}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {d.projects.map((x, i) => (
            <Card key={i} p={x} btn={d.btn} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
}