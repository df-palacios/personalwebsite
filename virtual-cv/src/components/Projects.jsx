import { useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../translations";
import { cue, CUES } from "../lib/sound";
import { RIFA_URL, LIBRETA_URL } from "../config/links";

const data = {
  es: {
    btn: "Lanzar proyecto",
    projects: [
      {
        name: "Rifa Virtual",
        image: "/rifa-preview.png",
        video: "/rifaVideo.mp4",
        url: RIFA_URL,
        desc: "Aplicación de sorteos desarrollada para Redes Tevesat SAS. SPA en React con ruleta interactiva, carrusel de premios y sonido sintetizado con Web Audio API. Backend en Laravel con API REST y Eloquent sobre MySQL: gestiona clientes, premios y validación de participación.",
        tech: "React 18 • SCSS • Swiper • Laravel 9 • MySQL • API REST",
      },
      {
        name: "Libreta de Contactos",
        image: "/libreta-preview.png",
        video: "/libretaVideo.mp4",
        url: LIBRETA_URL,
        desc: "Proyecto de portafolio centrado en automation testing: un CRUD de contactos protegido con autenticación JWT, cubierto por dos capas de pruebas automatizadas. Karate DSL valida la API REST completa (login, CRUD, control de acceso); Playwright automatiza la interfaz con el patrón Page Object Model. Backend en Node.js, Express y Sequelize sobre MySQL; frontend en React con detección automática de entorno, sin URLs fijas ni conflictos de IP entre dispositivos.",
        tech: "React • Node.js • Express • Sequelize • MySQL • JWT • Karate DSL • Playwright • POM",
      },
    ],
  },
  en: {
    btn: "Launch Project",
    projects: [
      {
        name: "Virtual Raffle",
        image: "/rifa-preview.png",
        video: "/rifaVideo.mp4",
        url: RIFA_URL,
        desc: "Raffle application built for Redes Tevesat SAS. React SPA with an interactive prize wheel, prize carousel and synthesized Web Audio feedback. Laravel backend exposing a REST API with Eloquent over MySQL: handles customers, prizes and entry validation.",
        tech: "React 18 • SCSS • Swiper • Laravel 9 • MySQL • REST API",
      },
      {
        name: "Contact Book",
        image: "/libreta-preview.png",
        video: "/libretaVideo.mp4",
        url: LIBRETA_URL,
        desc: "Portfolio project focused on automation testing: a contacts CRUD secured with JWT authentication, covered by two layers of automated tests. Karate DSL validates the full REST API (login, CRUD, access control); Playwright automates the UI with the Page Object Model pattern. Node.js, Express and Sequelize backend over MySQL; React frontend with automatic environment detection — no hardcoded URLs, no IP conflicts across devices.",
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
