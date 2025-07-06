import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function AnimatedCurvedText() {
  const textRef = useRef(null);

  useGSAP(() => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        attr: { startOffset: "40%" },
        duration: 1.5,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
<svg
  width="160"
  height="160"
  viewBox="0 0 200 200"
  className="absolute right-0 top-0 md:right-0 md:top-auto md:bottom-0 w-32 hidden md:block md:w-48 lg:w-52"
>
      <defs>
        {/* NOTE: FILTRO DE COLOR */}
        {/* <filter id="blur-bg" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="30" />
        </filter> */}

        <path
          id="circlePath"
          d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
        />
      </defs>

      {/* NOTE: CIRCULO PARA PONER UN FONDO */}
      {/* <circle
        cx="100"
        cy="100"
        r="70"
        fill="#B0FF6F"
        filter="url(#blur-bg)"
      /> */}

      {/* Texto curvado */}
      <text fill="black" font-size="20" font-weight="bold" letter-spacing="3">
        <textPath
          ref={textRef}
          href="#circlePath"
          startOffset="0%"
          text-anchor="middle"
        >
          DESARROLLADOR FRONTEND
        </textPath>
      </text>
    </svg>
  );
}
