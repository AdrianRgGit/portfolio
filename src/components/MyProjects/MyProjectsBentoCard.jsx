import CustomBadge from "../ui/CustomBadge";
import { useState } from "react";

const MyProjectsBentoCard = ({
  project,
  colSpan,
  highlighted = false,
  onSelect,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className={`relative col-span-${colSpan} ${highlighted ? "border-theme-green" : "border-theme-light-gray"} cursor-pointer overflow-hidden rounded-xl border-4 transition-all duration-300`}
      style={{
        backgroundImage: `url(${project.banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
    >
      {/* Imagen pequeña central que aparece en hover */}
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={project.hoverPreview}
            alt={`${project.title} preview`}
            className="animate-bounce-in w-1/2 rounded-xl object-cover"
            style={{
              animation: "bounceIn 0.3s ease-out",
            }}
          />
        </div>
      )}

      <div
        className={`flex h-full flex-col justify-between transition-opacity duration-300 ${
          isHovered ? "invisible opacity-0" : "visible opacity-100"
        }`}
      >
        <span className="p-4">
          <CustomBadge className="bg-theme-white">
            {project.mainTag}
          </CustomBadge>
        </span>

        <div className="overflow-hidden rounded-b-xl p-4 backdrop-blur-sm">
          <h4 className="text-font-white font-semibold">{project.title}</h4>
          <p className="text-font-white text-sm">{project.briefDescription}</p>
        </div>
      </div>

      {highlighted && (
        <div className="bg-theme-green absolute top-2 right-2 h-2 w-2 rounded-full" />
      )}

      <style jsx>{`
        @keyframes bounceIn {
          0% {
            transform: scale(1.1);
          }
          70% {
            transform: scale(0.98);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </article>
  );
};

export default MyProjectsBentoCard;
