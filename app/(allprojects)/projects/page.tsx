"use client";
import React from "react";
import Image from "next/image";
import { projects_data } from "@/utils/data";
import TransitionLink from "@/components/TransitionLink";

const ProjectList = () => {
  return (
    <section className="bg-project-img w-full h-screen overflow-hidden">
      <div className="pt-32 pb-8 w-full h-screen overflow-y-auto [mask-image:linear-gradient(to_bottom,transparent_10%,black,transparent_90%)]">
        <div className="container flex flex-col items-center justify-center space-y-12 ">
          {projects_data.map((project) => (
            <TransitionLink key={project.num} href={`/projects/${project.num}`}>
              <div className="group relative flex flex-col items-center justify-center">
                <div className="absolute z-10 text-white">
                  <h1 className="text-sm uppercase tracking-widest">
                    {project.projectInfo.projectCategory}
                  </h1>
                  <h1 className="font-black text-5xl mt-4">
                    {project.projectInfo.projectName}
                  </h1>
                </div>
                <div className="w-full md:w-[888px] h-[504px]  opacity-60 ease-in-out duration-300 ">
                  <Image
                    src={project.media.imageSrc}
                    alt={project.media.altname}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </TransitionLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
