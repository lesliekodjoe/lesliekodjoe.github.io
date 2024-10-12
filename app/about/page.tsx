"use client";
import React from "react";
import { tech_stack } from "@/utils/data";

const About = () => {
  return (
    <section className="bg-white h-full">
      <div className="pt-20 pb-16 w-full">
        <div className="container">
          {/* About Bio */}
          <div className="py-16">
            <h1 className="about-header">Me?</h1>
            <p className="about-text">
              Experienced Frontend Developer creating different full-stack
              solutions that are functional and visually pleasing with modern
              web technologies. I am eager to explore innovative approaches and
              grow my tech stack. Feel free to reach out — I’m open for new,
              exciting opportunities.
            </p>
          </div>
          {/* Tech Stack */}
          <div className="py-16">
            <h1 className="about-header">Things I need.</h1>
            <div className="mt-16 md:flex w-full">
              {/* Left Column */}
              <div className="md:w-1/2">
                <div className="about-section-header">Tech Stack</div>
                <div className="text-black opacity-80 max-w-80 leading-loose">
                  Experienced Frontend Developer creating different full-stack
                  solutions.
                </div>
              </div>
              {/* Right Column */}
              <div className="mt-10 md:mt-0 md:w-1/2">
                {tech_stack.map((tech, index) => (
                  <div
                    key={index}
                    className="py-4 border-b border-[#CCCCCC]"
                  >
                    {tech}
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
