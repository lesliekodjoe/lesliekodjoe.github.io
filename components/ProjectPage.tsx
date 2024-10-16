"use client";
import React, { useEffect } from "react";
import { GoArrowLeft } from "react-icons/go";
import TransitionLink from "@/components/TransitionLink";
import Image from "next/image";
import { projectScroll } from "@/utils/animate";
import { ProjectData } from "@/utils/dataType";

type Props = {
    project: ProjectData
};

const ProjectPage = ({project}: Props) => {
    const selectedProject = project
    useEffect(()=> {
        projectScroll()
    },[])

    return (
      <section className="bg-project-img h-full text-white">
        <div className="pt-28 pb-14 w-full h-full ">
          <div className="container">
            <TransitionLink
              href={"/projects"}
              className="group flex text-[14px] items-center bg-[#282828] px-6 py-3 rounded-full hover:scale-105"
            >
              <GoArrowLeft className="text-2xl mr-2 group-hover:-translate-x-2 ease-in-out duration-300" />
              Back
            </TransitionLink>
            <div className="mt-10 w-full md:text-center font-black text-4xl">
              {selectedProject.projectInfo.projectName}
            </div>
          </div>
          {/* Main Image */}
          <div className="single-proj-anim mt-20 w-full h-[584px]">
            <Image
              src={selectedProject.media.imageSrc}
              alt={selectedProject.media.altname}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="anim-start"></div>
          {/* Website Description */}
          <div className="container mt-20">
            <div className="desc-anim-start"></div>
            <div className="desc-anim w-full md:flex border-b border-[#828282] pb-16">
              <div className="flex flex-col gap-y-4 md:w-[739px] w-full">
                <h1 className="uppercase text-[12px] font-semibold tracking-[5px]">
                  Description
                </h1>
                <p className="text-xl leading-relaxed">
                  {selectedProject.projectInfo.projectDescription}
                </p>
              </div>
              <div className="md:w-[371px] flex md:items-end md:justify-end">
                <TransitionLink
                  href={selectedProject.projectInfo.projectLink}
                  className="mt-8 md:mt-0 group flex text-[14px] items-center bg-[#282828] px-6 py-3 rounded-full hover:scale-105"
                >
                  Visit Website
                  <GoArrowLeft className="text-2xl ml-2 group-hover:translate-x-2 ease-in-out duration-300 rotate-180" />
                </TransitionLink>
              </div>
            </div>
          </div>
          {/* Role & Time */}
          <div className="mt-10 container md:flex  md:gap-y-0">
            <div className="w-1/3">
              <h1 className="uppercase text-sm">Year:</h1>
              <div className="mt-5 w-fit px-6 py-2 text-xs text-center border border-[#828282] rounded-full">
                {selectedProject.projectInfo.projectYear}
              </div>
            </div>
            <div className="w-1/3 mt-10 md:mt-0">
              <h1 className="uppercase text-sm">Role:</h1>
              <div className="mt-5 w-fit px-6 text-xs py-2 text-center border border-[#828282] rounded-full">
                {selectedProject.projectInfo.projectRole}
              </div>
            </div>
            <div className="w-1/3 mt-10 md:mt-0">
              <h1 className="uppercase text-sm">Technologies:</h1>
              <div className="flex flex-wrap mt-5 gap-2">
                {selectedProject.projectInfo.tech.map(
                  (tech: string, index: number) => (
                    <div
                      key={index}
                      className="px-6 py-2 text-xs text-center border border-[#828282] rounded-full"
                    >
                      {tech}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="mock-anim-start"></div>
          {/* Mock/Freestyle Images */}
          <div className="container ">
            <div className="mock-anim flex gap-x-6 justify-between pb-20 border-b border-[#828282]">
              {selectedProject.media.mockUps.map(
                (img, index) => (
                  <div className="mt-20 w-32">
                    <Image
                      key={index}
                      src={img}
                      alt={`Mockup ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    );
};

export default ProjectPage;
