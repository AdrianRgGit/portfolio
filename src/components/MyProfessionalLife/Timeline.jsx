import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    year: "2021",
    company: "Tech Corp",
    title: "Frontend Developer",
    description:
      "Desarrollé interfaces de usuario interactivas con React y TailwindCSS, trabajando con un equipo ágil.",
    side: "left",
  },
  {
    year: "2022",
    company: "Design Studio",
    title: "UI/UX Designer",
    description:
      "Encargado del diseño visual de productos digitales, mejorando la experiencia del usuario.",
    side: "right",
  },
  {
    year: "2023",
    company: "Creative Minds",
    title: "Visual & Digital Designer",
    description:
      "Campañas creativas para redes sociales y medios digitales con enfoque en resultados medibles.",
    side: "left",
  },
];

const TimeLine = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".timeline-item");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: timelineRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => `+=${window.innerWidth * sections.length}`,
      },
    });
  }, []);

  return (
    <div className="relative h-screen overflow-hidden" ref={timelineRef}>
      <div className="flex h-full">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className={`timeline-item flex h-full w-screen flex-none items-center justify-${
              exp.side === "left" ? "start" : "end"
            } px-20`}
          >
            <div
              className={`max-w-md rounded-lg border bg-white p-6 shadow-lg ${
                exp.side === "left" ? "text-left" : "text-right"
              }`}
            >
              <h2 className="text-xl font-bold">{exp.year}</h2>
              <h3 className="text-lg">{exp.company}</h3>
              <p className="text-sm font-medium text-gray-600">{exp.title}</p>
              <p className="mt-2 text-gray-500">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Línea central */}
      <div className="absolute top-0 bottom-0 left-1/2 z-0 p-0.5 -translate-x-1/2 transform bg-theme-green" />
    </div>
  );
};

export default TimeLine;
