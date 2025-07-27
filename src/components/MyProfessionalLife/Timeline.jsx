import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimelineItem from "./TimelineItem";

import experiences from "../../data/experiences.js";

gsap.registerPlugin(ScrollTrigger);

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
