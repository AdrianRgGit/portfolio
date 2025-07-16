import { ArrowUpRight } from "lucide-react";
import "./CustomButton.css";

const CustomButton = ({
  href,
  target = "_self",
  className = "",
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`btn-hover-fill group flex cursor-pointer items-center gap-2 rounded-full border border-black px-4 py-2 shadow transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(176,255,111,0.6)] ${className}`}
      {...props}
    >
      <ArrowUpRight className="rotate-arrow" />
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className="font-semibold text-black transition-colors duration-300 group-hover:text-black"
      >
        {children}
      </a>
    </button>
  );
};

export default CustomButton;
