import { Calendar } from "lucide-react";
import MyProjectsBentoCard from "./MyProjectsBentoCard";

import projects from "../../data/projects";
import CustomButton from "../ui/CustomButton/CustomButton";
import CustomButtonChevron from "../ui/CustomButtonChevron";
import CustomBadge from "../ui/CustomBadge";

const MyProjectsBento = () => {
  return (
    <section id="my-projects" className="px-12 md:h-screen">
      <div className="grid h-full grid-cols-1 gap-x-6 md:grid-cols-2">
        {/* Texto del proyecto */}
        <article className="flex flex-col justify-evenly">
          <h2 className="mb-12 text-6xl font-bold">Mis proyectos</h2>
          <div className="flex items-center gap-x-4">
            <CustomBadge>Branding</CustomBadge>
            <div class="text-font-gray flex items-center gap-x-1">
              <Calendar size={16} />
              <p>2025</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-4xl font-semibold">{projects[0]?.title}</h3>
            <p className="font-semibold text-font-gray">
              {projects[0]?.briefDescription}
            </p>
          </div>

          <p className="text-font-gray">{projects[0]?.description}</p>

          <div className="mt-6 grid grid-cols-1 gap-x-6 md:grid-cols-2">
            <div>
              <p className="font-medium">Cliente</p>
              <p>{projects[0]?.customer}</p>
            </div>

            <div>
              <p className="font-medium">Duración</p>
              <p>
                {projects[0]?.createdAt} - {projects[0]?.endedAt}
              </p>
            </div>
          </div>

          <CustomButton href="#" target="_blank" className="w-40">
            Ver proyecto
          </CustomButton>
        </article>

        {/* Bento Grid */}
        <article className="max-h-full py-10">
          <div className="flex items-center justify-between">
            <p>Explorar proyectos</p>
            <div className="flex items-center gap-x-4">
              <CustomButtonChevron direction="left" />
              <CustomButtonChevron />
            </div>
          </div>

          <div className="grid h-full grid-cols-2 grid-rows-2 gap-4 py-4">
            {projects.slice(0, 4).map((project, index) => (
              <MyProjectsBentoCard
                key={project.id}
                title={project.title}
                subtitle={project.briefDescription}
                badge={project.mainTag}
                colSpan={index === 0 ? 2 : 1}
              />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default MyProjectsBento;
