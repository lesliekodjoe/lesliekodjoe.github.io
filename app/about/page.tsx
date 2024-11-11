"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { hobbys_data, projects_data, tech_stack } from "@/utils/data";
import TransitionLink from "@/components/TransitionLink";
import Footer from "@/components/Footer";
import Connect from "@/sections/Connect";
import { aboutAnimate } from "@/utils/animate";

const About = () => {
  useEffect(() => {
    aboutAnimate();
  });
  return (
    <section className="bg-white h-full">
      <div className="pt-20 pb-8">
        <div className="container">
          {/* About Bio */}
          <div className="py-16 px-6 md:px-0">
            <h1 className="about-header">Me?</h1>
            <p className="about-text ">
              Experienced Frontend Developer creating different full-stack
              solutions that are functional and visually pleasing with modern
              web technologies. I am eager to explore innovative approaches and
              grow my tech stack. Feel free to reach out — I’m open for new,
              exciting opportunities.
            </p>
          </div>
          {/* Tech Stack */}
          <div className="py-16 px-6 md:px-0">
            <h1 className="about-header tech-header">Things I need.</h1>
            <div className="tech md:flex mt-14 gap-y-20">
              {/* Left Column */}
              <div className="md:w-1/2">
                <div className="about-section-header">Tech Stack</div>
                <div className="text-black opacity-80 max-w-80 leading-loose">
                  Experienced Frontend Developer creating different full-stack
                  solutions.
                </div>
              </div>
              {/* Right Column */}
              <div className="md:w-1/2">
                {tech_stack.map((tech, index) => (
                  <div key={index} className="py-4 border-b border-[#CCCCCC]">
                    {tech}
                  </div>
                ))}
                <div className="py-4 font-semibold bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF,#DD7DDF,#DD7DDF)] text-transparent bg-clip-text">
                  Always ready for a Tech Adventure
                </div>
              </div>
            </div>
          </div>
          {/* Projects */}
          <div className="py-16 px-6 md:px-0 mb-80">
            <div className="project-anim-start "></div>
            <h1 className="about-header">Projects.</h1>
            <div className="mt-14 flex flex-col md:flex-row">
                {
                  projects_data.map((project)=>(
                    <div key={project.num}>
                    </div>
                  ))
                }
            </div>
            {/* <div className="projects mt-14 relative w-full md:flex h-[363px] gap-x-5 items-center justify-center">
              <TransitionLink
                href="/projects"
                className="absolute h-28 w-28 px-4 text-[14px] bg-white rounded-full uppercase hover:scale-110 hover:shadow-2xl ease-in-out duration-300"
              >
                Explore Projects
              </TransitionLink>
              <div className="w-full md:w-1/2 h-full">
                <Image
                  src={"/assets/projectBackground/proIMG1.jpg"}
                  alt="image 1"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full md:w-1/2 h-full">
                <Image
                  src={"/assets/projectBackground/proIMG1.jpg"}
                  alt="image 2"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </div>
            </div> */}
          </div>
          {/* Fun & Hobbies */}
          <div className="py-16 px-6 md:px-0 md:pt-40 hobby-start">
            <h1 className="about-header">Other.</h1>
            <div className="hobbys-anim mt-14 md:flex gap-x-20 w-full ">
              {/* Left Column */}
              <div className="md:w-1/2">
                <div className="about-section-header">
                  What I&apos;m watching
                </div>
                <div className="text-black opacity-80 max-w-80 leading-loose">
                  Experienced Frontend Developer creating different full-stack
                  solutions.
                </div>
              </div>
              {/* Right Column */}
              <div className="mt-10 md:mt-0 md:w-1/2">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-5">
                  {hobbys_data.map((hobby) => (
                    <div
                      key={hobby.num}
                      className="w-[145px] h-[145px] rounded-xl overflow-hidden"
                    >
                      <Image
                        src={hobby.imageSrc}
                        alt={hobby.altname}
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Connect Section */}
        <Connect />
        {/* Footer */}
        <Footer />
      </div>
    </section>
  );
};

export default About;
