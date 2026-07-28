import React, { useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const data = {
  es: {
    title: "Proyectos",
    btn: "Lanzar proyecto",
    projects: [
      {
        name: "Rifa Virtual",
        image: "/rifa-preview.png",
        video: "/rifaVideo.mp4",
        desc: "Sistema web de rifas desarrollado en React, Laravel y MySQL. Se integrará con este sitio para ejecutar sorteos en línea.",
        tech: "React • Laravel • MySQL",
      },
    ],
  },
  en: {
    title: "Projects",
    btn: "Launch Project",
    projects: [
      {
        name: "Virtual Raffle",
        image: "/rifa-preview.png",
        video: "/rifaVideo.mp4",
        desc: "Web raffle platform built with React, Laravel and MySQL. It will be integrated into this website to run live raffles.",
        tech: "React • Laravel • MySQL",
      },
    ],
  },
};

function Card(props) {
  const p = props.p;
  const btn = props.btn;
  const v = useRef();
  const t = useRef();
  const [s, setS] = useState(false);

  return (
    <div className="rounded-2xl border overflow-hidden bg-slate-900/20">
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

      <div className="p-4 md:p-5">
        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{p.name}</h3>

        <p className="text-sm md:text-base">{p.desc}</p>

        <p className="font-semibold mt-2 mb-4 md:mb-5 text-sm md:text-base">{p.tech}</p>

        {React.createElement(
          "a",
          {
            href: "/proyectos/rifa",
            className: "block w-full text-center px-5 py-3 bg-blue-600 text-white rounded-lg",
          },
          btn
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const { language } = useLanguage();
  const t = data[language];

  return (
    <section id="projects" className="py-12 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-10">{t.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {t.projects.map((x, i) => (
            <Card key={i} p={x} btn={t.btn} />
          ))}
        </div>
      </div>
    </section>
  );
}