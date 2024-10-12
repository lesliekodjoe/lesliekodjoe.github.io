"use client";
import Footer from "@/components/Footer";
import Connect from "@/sections/Connect";
import { scrollIn } from "@/utils/animate";
import { tech_stack } from "@/utils/data";
import React, { useEffect } from "react";

const About = () => {
    useEffect(() => {

      scrollIn();
    }, []);
  return (
    <section className="bg-white h-full">
      <div className=" px-12 pt-20 pb-16 w-full md:flex md:px-16 ">
        <h1 className="text-[#BDBDBD] md:w-1/3 md:px-12 md:py-12 md:text-3xl">
          About Me
        </h1>
        <p className="text-white mt-4 font-medium leading-loose md:mt-0 md:w-2/3 md:py-12 md:text-4xl md:leading-[3.5rem]">
          Experienced Frontend Developer creating different full-stack solutions
          that are functional and visually pleasing with modern web
          technologies. I am eager to explore innovative approaches and grow my
          tech stack. Feel free to reach out — I’m open for new, exciting
          opportunities.
        </p>
      </div>
      <div className=" px-12 pt-10 pb-20 w-full md:px-16 md:flex">
        <h1 className="text-[#BDBDBD] md:w-1/3 md:px-12 md:py-12 md:text-3xl">
          Tech Stack
        </h1>
        <div className="mt-4 md:w-2/3">
          {tech_stack.map((tech, index) => (
            <div
              key={index}
              className="text-white py-4 border-b border-[#828282] md:text-5xl md:py-8"
            >
              {tech}
            </div>
          ))}
          <div className="py-4 text-base bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF,#DD7DDF,#DD7DDF)] text-transparent bg-clip-text md:text-5xl">
            Always ready for a Tech Adventure
          </div>
        </div>
      </div>
      {/* Connect Section */}
      <Connect />
      {/* Footer */}
      <Footer />
    </section>
  );
};

export default About;
