import { useRef, useEffect } from "preact/hooks";
import { gsap } from "gsap";

export default function CurvedText({ text, radius = 80, className = "" }) {
  const containerRef = useRef(null);
  const lettersRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current || lettersRef.current.length === 0) return;

    const letters = lettersRef.current;
    const numLetters = letters.length;
    const arcAngle = 180;
    const startAngle = arcAngle / -2 - 50;

    letters.forEach((letter, i) => {
      const angle = startAngle + (i / (numLetters - 1)) * arcAngle;
      const x = radius * Math.cos(angle * (Math.PI / 180));
      const y = radius * Math.sin(angle * (Math.PI / 180));

      const rotation = angle - 90;

      gsap.to(letter, {
        x: x,
        y: y,
        rotation: rotation,
        duration: 0.1,
        ease: "none",
        immediateRender: true,
      });
    });

    gsap.set(containerRef.current, {
      xPercent: 0, 
      yPercent: 0,
    });
  }, [text, radius]);

  const letterSpans = text.split("").map((char, index) => (
    <span
      key={index}
      ref={(el) => (lettersRef.current[index] = el)}
      style={{
        position: "absolute",
        display: "inline-block",
        whiteSpace: "pre",
      }}
    >
      {char === " " ? "\u00A0" : char}{" "}
    </span>
  ));

  return (
    <div
      ref={containerRef}
      className={`relative inline-block ${className}`}
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
      }}
    >
      {letterSpans}
    </div>
  );
}
