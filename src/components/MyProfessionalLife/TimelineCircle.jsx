import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TimelineCircle = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;

    gsap.to(circle, {
      y: () => window.scrollY,
      ease: "power1.out",
      scrollTrigger: {
        trigger: circle,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <div
      ref={circleRef}
      className="bg-theme-green absolute top-1/2 left-1/2 z-20 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg"
    />
  );
};

export default TimelineCircle;
