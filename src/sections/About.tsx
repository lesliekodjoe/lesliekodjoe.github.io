"use client";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  design_data,
  hobbys_data,
  projects_data,
  tech_stack,
} from "../constants/data";
import { GoArrowUpRight } from "react-icons/go";

const About = () => {
  return (
    <section className="bg-white h-full">
      <div className="md:px-48">
        {/* About Bio */}
        <div className="py-16">
          <h1 className="about-header">Me?</h1>
          <p className="about-text">
            Experienced Frontend Developer creating different full-stack
            solutions that are functional and visually pleasing with modern web
            technologies. I am eager to explore innovative approaches and grow
            my tech stack. Feel free to reach out — I’m open for new, exciting
            opportunities.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="py-16">
          <h1 className="about-header tech-header">Technologies.</h1>
          <div className="md:flex mt-14 gap-y-20 md:text-lg">
            <div className="md:w-1/2">
              <div className="about-section-header">My Stack</div>
              <p className="text-black opacity-80 max-w-80 leading-relaxed mt-4">
                Technologies I have used for most of my projects. Both Work and
                Freelance
              </p>
            </div>
            <div className="md:w-1/2 mt-5 md:mt-0">
              {tech_stack.map((tech, index) => (
                <div key={index} className="py-4 border-b border-[#CCCCCC]">
                  {tech}
                </div>
              ))}
              <div className="py-4 font-semibold bg-gradient-to-r from-purple-400 via-yellow-400 to-blue-400 text-transparent bg-clip-text">
                Always ready for a Tech Adventure
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="py-16">
          <h1 className="about-header">Projects.</h1>
          <div className="mt-14 flex flex-col gap-y-10 md:flex-row md:gap-x-12 overflow-x-auto">
            {projects_data.map((project) => (
              <div key={project.num}>
                <Link
                  to={`/projects/${project.num}`}
                  className="w-full flex flex-col items-start group"
                >
                  <div className="w-full md:w-[480px] hover:scale-105 ease-in-out duration-500">
                    <img
                      src={project.media.imageSrc}
                      alt={project.projectInfo.projectName}
                      width={480}
                      height={300}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h4 className="mt-5 flex items-center">
                    {project.projectInfo.projectName}
                    <GoArrowUpRight className="text-xl ml-1 md:text-2xl transform group-hover:translate-x-2 group-hover:-translate-y-2 ease-in-out duration-500" />
                  </h4>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Fun & Hobbies */}
        <div className="py-16">
          <h1 className="about-header">Other.</h1>
          <div className="md:flex gap-x-20 w-full">
            <div className="md:w-1/2">
              <div className="about-section-header">What I&apos;m watching</div>
              <p className="text-black opacity-80 leading-loose">
                Attack on Titan, The Lincoln Lawyer Series, The Blacklist, YOU,
                The Boys, Batman Caped Crusader
              </p>
            </div>
            <div className="mt-10 md:mt-0 md:w-1/2 px-6">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-4">
                {hobbys_data.map((hobby) => (
                  <div
                    key={hobby.num}
                    className="w-[145px] h-[145px] rounded-xl overflow-hidden"
                  >
                    <img
                      src={hobby.imageSrc}
                      alt={hobby.altname}
                      width={145}
                      height={145}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
