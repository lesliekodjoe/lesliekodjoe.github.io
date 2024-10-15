"use client";
import React from "react";
import Image from "next/image";
import { projects_data } from "@/utils/data";
import TransitionLink from "@/components/TransitionLink";

const ProjectList = () => {
  return (
    <section className="bg-project-img w-full h-full">
      <div className="pt-32 pb-8 w-full h-full ">
        <div className="container flex flex-col items-center justify-center space-y-8">
          {projects_data.map((project) => (
            <TransitionLink key={project.num} href={`/projects/${project.num}`}>
              <div className="w-full md:w-[888px] h-[504px] ">
                <Image
                  src={project.media.imageSrc}
                  alt={project.media.altname}
                  className="w-full h-full object-cover"
                />
              </div>
            </TransitionLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
