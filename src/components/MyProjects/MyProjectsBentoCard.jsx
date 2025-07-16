import CustomBadge from "../ui/CustomBadge";
import { useState } from "react";

const MyProjectsBentoCard = ({
  project,
  colSpan,
  highlighted = false,
  onSelect,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const backgroundImage = isHovered ? project.bannerGif : project.banner;

  return (
    <article
      className={`relative col-span-${colSpan} border-theme-green cursor-pointer rounded-xl border-4 transition-all duration-300`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
    >
      <div
        className={`flex h-full flex-col justify-between transition-opacity duration-300 ${
          isHovered ? "invisible opacity-0" : "visible opacity-100"
        }`}
      >
        <span className="p-4">
          <CustomBadge>{project.mainTag}</CustomBadge>
        </span>

        <div className="rounded-b-xl overflow-hidden p-4 backdrop-blur-sm">
          <h4 className="text-font-white font-semibold">{project.title}</h4>
          <p className="text-font-white text-sm">{project.briefDescription}</p>
        </div>
      </div>

      {highlighted && (
        <div className="bg-theme-green absolute top-2 right-2 h-2 w-2 rounded-full" />
      )}
    </article>
  );
};

export default MyProjectsBentoCard;
