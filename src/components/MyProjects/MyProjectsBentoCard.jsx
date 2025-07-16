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
      className={`relative col-span-${colSpan} border-theme-green flex cursor-pointer flex-col justify-between rounded-xl border-4 p-4 transition-all duration-300`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
    >
      <CustomBadge>{project.mainTag}</CustomBadge>

      <div>
        <h4 className="text-font-white font-semibold">{project.title}</h4>
        <p className="text-font-gray text-sm">{project.briefDescription}</p>
      </div>

      {highlighted && (
        <div className="bg-theme-green absolute top-2 right-2 h-2 w-2 rounded-full" />
      )}
    </article>
  );
};

export default MyProjectsBentoCard;
