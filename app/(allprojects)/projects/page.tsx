"use client";
import React from "react";
import Image from "next/image";
import proIMG1 from "@/assets/projectBackground/proIMG1.jpg";
import { projects_data } from "@/utils/data";

const ProjectList = () => {
  return (
    <section className="bg-about-img h-full">
      <div className="pt-32 pb-8 w-full h-full ">
        <div className="container flex flex-col items-center justify-center space-y-12 borde">
          {projects_data.map((project) => (
            
            <div key={project.num} className="w-[888px] h-[554px] ">
              <Image
                src={project.imageSrc}
                alt={project.altname}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
