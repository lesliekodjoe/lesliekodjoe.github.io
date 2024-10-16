"use client";
import coneImage from "@/assets/icons/Cone.svg";
import donutImage from "@/assets/icons/Donut.svg";
import watchImage from "@/assets/icons/Apple_watches.svg";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { fadeIn, scrollIn } from "../utils/animate";
import pencilImage from "@/assets/icons/Pencil.svg";
import TransitionLink from "@/components/TransitionLink";
import { motion } from "framer-motion";
import { projects_data } from "@/utils/data";
import Footer from "@/components/Footer";
import Connect from "@/sections/Connect";

export default function Home() {
  const heroTitle = useRef(null);

  useEffect(() => {
    const heroTarget = heroTitle.current;

    fadeIn(heroTarget);
    scrollIn();
  }, []);
  return (
    <section className="">
      <div className="pt-20 pb-36 lg:pb-32 md:pt-28 overflow-x-clip">
        <div className="container">
          <div className="-z-10 relative h-[280px] lg:h-[430px] flex justify-center items-center">
            <div className="w-[309px] md:w-[788px] h-auto flex flex-col items-center justify-center">
              <h1
                ref={heroTitle}
                className="hero-title text-center text-2xl font-bold text-design md:text-6xl md:leading-tight"
              >
                A Frontend Developer who loves designs & creating memorable user
                experiences.
              </h1>
            </div>
            <Image
              src={coneImage}
              alt="Cone Image"
              className="w-[150px] lg:block lg:w-[230px] cone absolute top-0 -right-28"
            />
            <Image
              src={donutImage}
              alt="Donut Image"
              className="w-[150px] -left-10 lg:block lg:w-[230px] donut absolute -bottom-28 lg:left-0"
            />
            <Image
              src={watchImage}
              alt="Watch Image"
              className="watch hidden md:block w-[100px] absolute -top-10 -left-20"
            />
          </div>
          <div className="flex w-full flex-row-reverse">
            <TransitionLink
              href="/about"
              className="about-tag border border-black hover:bg-black hover:text-white"
            >
              About Me
            </TransitionLink>
          </div>
        </div>
      </div>
      {/* Featured Projects Section*/}
      <div className="relative -z-10 bg-[#1D1D1D] text-white">
        <div className="flex items-center justify-center">
          <motion.img
            src={pencilImage.src}
            alt="Pencil Image"
            className="pencil absolute -top-28 opacity-0"
            animate={{
              translateY: [-15, 10],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 2,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="w-full uppercase flex flex-col items-center justify-center py-5 px-36">
          <div className="feature-header w-full py-20 px-10 flex flex-col gap-y-6 items-center justify-center">
            <div className="relative">
              <span className="text-sm tracking-extra-wide md:tracking-super-wide bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF,#DD7DDF,#DD7DDF)] text-transparent bg-clip-text">
                Featured
              </span>
            </div>
            <h1 className="font-extrabold text-4xl md:text-5xl">Projects</h1>
          </div>
        </div>

        <div className="px-10 ">
          <div className="grid grid-cols-1 lg:grid-cols-4">
            {projects_data.map((project) => (
              <div
                key={project.num}
                className="w-full h-[500px] border border-[#333333] project"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={project.media.imageSrc}
                    alt={project.media.altname}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <div className="absolute top-0 px-[20px] py-[47px] text-3xl font-extrabold">
                    {project.num}
                  </div>
                  <div className="absolute top-44 w-[166px] font-semibold text-3xl px-[20px] py-[47px]">
                    {project.projectInfo.projectName}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Connect Section */}
      <Connect />
      {/* Footer */}
      <Footer />
    </section>
  );
}
