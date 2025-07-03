import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimelineItem from "./TimelineItem";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    year: "2021",
    company: "Tech Corp",
    title: "Frontend Developer",
    description:
      "Desarrollé interfaces de usuario interactivas con React y TailwindCSS, trabajando con un equipo ágil.",
    side: "left",
    explanation:
      "Interfaz y experiencia de usuario usando React y TailwindCSS.",
  },
  {
    year: "2022",
    company: "Design Studio",
    title: "UI/UX Designer",
    description:
      "Encargado del diseño visual de productos digitales, mejorando la experiencia del usuario.",
    side: "right",
    explanation: "Diseño visual enfocado en mejorar la experiencia final.",
  },
  {
    year: "2023",
    company: "Creative Minds",
    title: "Visual & Digital Designer",
    description:
      "Campañas creativas para redes sociales y medios digitales con enfoque en resultados medibles.",
    side: "left",
    explanation:
      "Creatividad y diseño para marketing digital con impacto real.",
  },
];

const TimeLine = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".timeline-item");

    gsap.to(sections, {
      yPercent: -100 * (sections.length - 1),
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
      {/* Línea central vertical fija */}
      <div className="bg-theme-green absolute top-12 bottom-12 left-1/2 z-0 w-1 -translate-x-1/2 rounded" />

      <div className="flex h-full flex-col">
        {experiences.map((exp, i) => (
          <TimelineItem key={i} exp={exp} />
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
