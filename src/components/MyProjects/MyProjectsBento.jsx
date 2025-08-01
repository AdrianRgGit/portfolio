import { useState } from "react";
import { Calendar } from "lucide-react";

import MyProjectsBentoCard from "./MyProjectsBentoCard";
import projects from "../../data/projects";
import CustomButton from "../ui/CustomButton/CustomButton";
import CustomButtonChevron from "../ui/CustomButtonChevron";
import CustomBadge from "../ui/CustomBadge";

const MyProjectsBento = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [windowStartIndex, setWindowStartIndex] = useState(0);

  const windowSize = 3;
  const canGoLeft = windowStartIndex > 0;
  const canGoRight = windowStartIndex + windowSize < projects.length;

  const visibleProjects = projects.slice(
    windowStartIndex,
    windowStartIndex + windowSize,
  );

  const handleLeftClick = () => {
    if (canGoLeft) {
      setWindowStartIndex((prev) => prev - windowSize);
    }
  };

  const handleRightClick = () => {
    if (canGoRight) {
      setWindowStartIndex((prev) => prev + windowSize);
    }
  };

  const selectedProject = projects[selectedProjectIndex];

  return (
    <div className="grid h-full grid-cols-1 gap-x-6 md:grid-cols-2">
      {/* Panel de información del proyecto seleccionado */}
      <article className="flex flex-col justify-evenly">
        <h2 className="mb-12 text-6xl font-bold">Mis proyectos</h2>

        <div className="flex items-center gap-x-4">
          <CustomBadge>{selectedProject?.mainTag}</CustomBadge>
          <div className="text-font-gray flex items-center gap-x-1">
            <Calendar size={16} />
            <p>{new Date(selectedProject?.startedAt).getFullYear()}</p>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-4xl font-semibold">{selectedProject?.title}</h3>
          <p className="text-font-gray font-semibold">
            {selectedProject?.briefDescription}
          </p>
        </div>

        <p className="text-font-gray">{selectedProject?.description}</p>

        <div className="mt-6 grid grid-cols-1 gap-x-6 md:grid-cols-2">
          <div>
            <p className="font-medium">Cliente</p>
            <p>{selectedProject?.customer}</p>
          </div>
          <div>
            <p className="font-medium">Duración</p>
            <p>
              {selectedProject?.startedAt} - {selectedProject?.endedAt}
            </p>
          </div>
        </div>

        <CustomButton href="#" target="_blank" className="w-40">
          Ver proyecto
        </CustomButton>
      </article>

      {/* Bento Grid */}
      <div className="max-h-full py-10">
        <div className="flex items-center justify-between">
          <p>Explorar proyectos</p>
          <div className="flex items-center gap-x-4">
            <CustomButtonChevron
              direction="left"
              onClick={handleLeftClick}
              disabled={!canGoLeft}
            />
            <CustomButtonChevron
              direction="right"
              onClick={handleRightClick}
              disabled={!canGoRight}
            />
          </div>
        </div>

        <div className="grid h-full grid-cols-2 grid-rows-2 gap-4 py-4">
          {visibleProjects.map((project, index) => {
            const globalIndex = windowStartIndex + index;
            const isSelected = globalIndex === selectedProjectIndex;

            return (
              <MyProjectsBentoCard
                key={project.id}
                project={project}
                colSpan={index === 0 ? 2 : 1} // Primer proyecto de cada página es grande
                highlighted={isSelected}
                onSelect={() => setSelectedProjectIndex(globalIndex)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyProjectsBento;
