import { projects_data } from "@/utils/data";
import Image from "next/image";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const ProjectCard = () => {
  return (
    <>
      {projects_data.map((project) => (
        <div key={project.num} className="w-full pt-16 md:px-48">
          <div className="px-5 bg-[#2C2C2C] w-full h-full md:h-[625px] border border-[#393939] rounded-xl overflow-y-hidden">
            <div className="py-8 md:px-12 md:py-10 md:flex items-center">
              <div className="mb-4">
                <h4 className="text-xl mb-1 font-semibold">
                  {project.projectInfo.projectName}
                </h4>
                <p className="text-[#adadad] text-sm">
                  {project.projectInfo.projectRole} - {project.projectInfo.tech}
                </p>
              </div>
              <GoArrowRight className="text-2xl md:ml-16" />
            </div>
            <div className="w-full flex items-center justify-center">
              <div className="md:w-[810px]">
                <Image
                  src={project.media.imageSrc}
                  alt="projCard1"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
