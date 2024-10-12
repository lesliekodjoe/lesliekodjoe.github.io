"use client";
import React from "react";
import Image from "next/image";
import { hobbys_data, tech_stack } from "@/utils/data";
import proIMG1 from "@/assets/projectBackground/proIMG1.jpg";
import proIMG2 from "@/assets/projectBackground/proIMG2.jpg";
import TransitionLink from "@/components/TransitionLink";
import Footer from "@/components/Footer";
import Connect from "@/sections/Connect";

const About = () => {
  return (
    <section className="bg-white h-full">
      <div className="pt-20 pb-8 w-full">
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
            <div className="mt-14 md:flex w-full">
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
          <div className="py-16 mb-80 md:mb-0">
            <h1 className="about-header">Projects.</h1>
            <div className="mt-14 relative w-full md:flex h-[363px] gap-x-5 items-center justify-center">
              <TransitionLink
                href="/projects"
                className="absolute h-28 w-28 px-4 text-[14px] bg-white rounded-full uppercase hover:scale-110 hover:shadow-2xl ease-in-out duration-300"
                label="Explore Projects"
              />
              <div className="w-full md:w-1/2 h-full">
                <Image
                  src={proIMG1}
                  alt="image 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w- md:w-1/2 h-full">
                <Image
                  src={proIMG2}
                  alt="image 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* Fun & Hobbies */}
          <div className="py-16">
            <h1 className="about-header">Other.</h1>
            <div className="mt-14 md:flex gap-x-20 w-full ">
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
                        className="w-full h-full object-cover "
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Connect Section */}
          <Connect />
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default About;
