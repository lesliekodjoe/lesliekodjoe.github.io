import { projects_data } from "../constants/data";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  return (
    <>
      {projects_data.map((project) => (
        <div key={project.num} className="w-full pt-16 md:px-48">
          <Link to={`/projects/${project.num}`} className="w-full">
            <div className="px-5 bg-[#2C2C2C] w-full h-full md:h-[625px] border border-[#393939] rounded-xl overflow-hidden group hover:bg-[#444444] transition duration-500 md:px-0">
              <div className="py-8 md:px-12 md:py-10 md:flex items-center">
                <div className="mb-4">
                  <h4 className="text-xl text-left mb-1 font-semibold md:text-2xl">
                    {project.projectInfo.projectName}
                  </h4>
                  <p className="text-[#adadad] text-sm md:text-base">
                    {project.projectInfo.projectRole} -{" "}
                    {project.projectInfo.tech}
                  </p>
                </div>
                <GoArrowRight className="text-2xl md:ml-16 md:text-3xl group-hover:translate-x-5 transition duration-500" />
              </div>
              <div className="w-full flex items-center justify-center">
                <div className="md:w-[810px] group-hover:-translate-y-4 transition duration-500">
                  <img
                    src={project.media.imageSrc}
                    alt={project.projectInfo.projectName}
                    
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
