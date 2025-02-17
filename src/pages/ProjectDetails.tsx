import React, { useEffect, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projects_data } from "../constants/data";
import { projectScroll } from "../utils/animate";
import TransitionLink from "../components/TransitionLink";

type Props = {};

const ProjectDetails = (props: Props) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setIndex(Number(id) - 1);
    }
    window.scrollTo(0, 0);
    projectScroll();
  }, [id]);

  const nextItem = () => {
    if (index < projects_data.length - 1) {
      navigate(`/projects/${index + 2}`);
    }
  };

  const prevItem = () => {
    if (index > 0) {
      navigate(`/projects/${index}`);
    }
  };

  const selectedProject = projects_data[index];
  return (
    <section
      key={selectedProject.num}
      className="pt-6 px-8 md:px-48 bg-project h-full text-white"
    >
      <div className="pt-28 pb-14 w-full h-full ">
        <div className="">
          <Link
            to={"/"}
            className="w-fit group flex text-[14px] items-center bg-[#282828] px-6 py-3 rounded-full hover:scale-105 ease-in-out duration-500"
          >
            <GoArrowLeft className="text-2xl mr-2 group-hover:-translate-x-2 ease-in-out duration-500" />
            Back
          </Link>
        </div>
        <div className="my-10 w-full md:text-center font-black text-4xl">
          {selectedProject.projectInfo.projectName}
        </div>

        <div className="relative ">
          <div className="px-5  w-full h-full md:h-[625px] border-2 border-[#393939] rounded-xl overflow-y-hidden md:px-0">
            <div className="mt-10 w-full flex items-center justify-center">
              <div className="md:w-[1010px]">
                <img
                  src={selectedProject.media.imageSrc}
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
        <div className="anim-start"></div>
        {/* Website Description */}
        <div className="mt-20">
          <div className="desc-anim-start"></div>
          <div className="desc-anim w-full md:flex border-b border-[#828282] pb-16">
            <div className="flex flex-col gap-y-4 md:w-[639px] w-full ">
              <h1 className="uppercase text-[12px] font-semibold tracking-[5px]">
                Description
              </h1>
              <p className="text-xl leading-loose">
                {selectedProject.projectInfo.projectDescription}
              </p>
            </div>
            <div className="md:w-[371px] flex md:items-end md:justify-end">
              <a
                href={selectedProject.projectInfo.projectLink}
                target="_blank"
                className="mt-8 md:mt-0 group flex text-[14px] items-center bg-[#282828] px-6 py-3 rounded-full hover:scale-105 ease-in-out duration-500"
              >
                Visit Website
                <GoArrowLeft className="text-2xl ml-2 group-hover:translate-x-2 ease-in-out duration-500 rotate-180" />
              </a>
            </div>
          </div>
        </div>
        {/* Role & Time */}
        <div className="mt-10 md:flex  md:gap-y-0">
          <div className="w-1/3">
            <h1 className="uppercase text-sm ">Year:</h1>
            <div className="mt-5 w-fit px-6 py-2 text-xs md:text-sm text-center border border-[#828282] rounded-full">
              {selectedProject.projectInfo.projectYear}
            </div>
          </div>
          <div className="w-1/3 mt-10 md:mt-0">
            <h1 className="uppercase text-sm">Role:</h1>
            <div className="flex flex-wrap gap-2">
              {selectedProject.projectInfo.projectRole.map(
                (role: string, index: number) => (
                  <div
                    key={index}
                    className="mt-5 w-fit px-6 text-xs md:text-sm py-2 text-center border border-[#828282] rounded-full"
                  >
                    {role}
                  </div>
                )
              )}
            </div>
          </div>
          <div className="w-1/3 mt-10 md:mt-0">
            <h1 className="uppercase text-sm">Technologies:</h1>
            <div className="flex flex-wrap mt-5 gap-2">
              {selectedProject.projectInfo.tech.map(
                (tech: string, index: number) => (
                  <div
                    key={index}
                    className="px-6 py-2 text-xs md:text-sm text-center border border-[#828282] rounded-full"
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
        <div className="md:">
          <div className="mock-anim flex gap-x-6 justify-between pb-20 border-b border-[#828282]">
            {selectedProject.media.mockups.map((img, index) => (
              <div className="mt-20 w-72">
                <img
                  key={index}
                  src={img}
                  alt={`Mockup ${index + 1}`}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div
          className={` w-full flex  my-10 ${
            index > 0 ? "justify-between" : "justify-end"
          }`}
        >
          {index > 0 && (
            <button
              onClick={prevItem}
              className="w-fit group flex text-[14px] items-center bg-[#282828] px-6 py-3 rounded-full hover:scale-105 ease-in-out duration-500"
            >
              <GoArrowLeft className="text-2xl mr-2 group-hover:-translate-x-2 ease-in-out duration-500" />
              Back
            </button>
          )}
          {index < projects_data.length - 1 && (
            <button
              onClick={nextItem}
              className="w-fit group flex text-[14px] items-center bg-[#282828] px-6 py-3 rounded-full hover:scale-105 ease-in-out duration-500"
            >
              Next
              <GoArrowRight className="text-2xl ml-2 group-hover:-translate-x-2 ease-in-out duration-500" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
