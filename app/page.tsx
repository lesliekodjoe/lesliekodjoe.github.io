"use client";
import coneImage from "@/assets/icons/Cone.svg";
import donutImage from "@/assets/icons/Donut.svg";
import watchImage from "@/assets/icons/Apple_watches.svg";
import mouseImage from "@/assets/icons/Mouse.svg";
import pencilImage from "@/assets/icons/Pencil.svg";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

import proIMG1 from "@/assets/projectBackground/proIMG1.jpg";
import proIMG2 from "@/assets/projectBackground/proIMG2.jpg";
import proIMG3 from "@/assets/projectBackground/proIMG3.jpg";
import proIMG4 from "@/assets/projectBackground/proIMG4.jpg";
import Connect from "@/sections/Connect";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";

const projects_data = [
  {
    num: "01",
    imageSrc: proIMG1,
    jobTitle: "Freelance Project",
    altname: "project 1",
  },
  {
    num: "02",
    imageSrc: proIMG2,
    jobTitle: "Freelance Project",
    altname: "project 2",
  },
  {
    num: "03",
    imageSrc: proIMG3,
    jobTitle: "Freelance Project",
    altname: "project 3",
  },
  {
    num: "04",
    imageSrc: proIMG4,
    jobTitle: "Freelance Project",
    altname: "project 4",
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [120, -400]);

  return (
    <section ref={heroRef} className="">
      {/* Hero Section */}
      <div className="pt-20 pb-36 lg:pb-32 md:pt-28 overflow-x-clip">
        <div className="container">
          <div className="-z-10 relative flex justify-center items-center">
            <div className="w-[309px] md:w-[788px] h-auto flex flex-col items-center justify-center">
              <h1 className="text-center text-2xl font-bold text-design md:text-6xl md:leading-tight">
                A Frontend Developer who loves designs & creating memorable user
                experiences.
              </h1>
            </div>
            <motion.img
              src={coneImage.src}
              alt="Cone Image"
              className="w-[150px] lg:block lg:w-[230px] absolute top-0 -right-28"
              loading="lazy"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={donutImage.src}
              alt="Donut Image"
              className="w-[150px] -left-10 lg:block lg:w-[230px] absolute -bottom-28 lg:left-0"
              loading="lazy"
              style={{
                translateY: translateY,
              }}
            />
            <Image
              src={watchImage}
              alt="Watch Image"
              className="hidden md:block w-[100px] absolute -top-10 -left-20"
              loading="lazy"
            />
            {/* <Image
              src={mouseImage}
              alt="Mouse Image"
              className="hidden md:block w-[100px] absolute -bottom-10 -right-0"
              loading="lazy"
              /> */}
          </div>
          <div className="flex w-full flex-row-reverse">
            <Link href="/about" className="link-tag">About Me</Link>
          </div>
        </div>
      </div>

      {/* Featured Projects Section*/}
      <div className="relative -z-10 bg-[#1D1D1D] text-white">
        <div className="flex items-center justify-center">
          <motion.img
            src={pencilImage.src}
            alt="Pencil Image"
            className="absolute -top-28"
            animate={{
              translateY: [-9, 9],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 2,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="w-full uppercase flex flex-col items-center justify-center gap-y-6 py-32 div">
          <span className="text-sm tracking-extra-wide md:tracking-super-wide bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF,#DD7DDF,#DD7DDF)] text-transparent bg-clip-text">
            Featured
          </span>
          <h1 className="font-extrabold text-4xl md:text-5xl">Projects</h1>
        </div>
        <div className="px-6">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            <motion.div
              className="relative flex flex-none h-[510px] "
              animate={{
                translateX: "-50%",
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              {projects_data.map((project) => (
                <div
                  key={project.altname}
                  className="w-full h-full border border-[#333333]"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={project.imageSrc}
                      alt={project.altname}
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute top-0 px-[20px] py-[47px] text-3xl font-extrabold">
                      {project.num}
                    </div>
                    <div className="absolute top-44 w-[166px] font-semibold text-3xl px-[20px] py-[47px]">
                      {project.jobTitle}
                    </div>
                  </div>
                </div>
              ))}
              {projects_data.map((project) => (
                <div
                  key={project.altname}
                  className="w-full h-full border border-[#333333]"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={project.imageSrc}
                      alt={project.altname}
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                    <div className="z-20 absolute top-0 px-[20px] py-[47px] text-3xl font-extrabold">
                      {project.num}
                    </div>
                    <div className="z-20 absolute top-44 w-[166px] font-semibold text-3xl px-[20px] py-[47px]">
                      {project.jobTitle}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
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
