import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className=" h-screen sticky top-0 z-10 pt-20 pb-20 px-8 md:pt-28">
      <div className="flex items-end w-full h-full">
        <div className="w-full md:px-40">
          <div>
            <h4 className="text-6xl text-[#cccccc] font-black md:text-8xl">
              Leslie Kodjoe
            </h4>
            <p className="mt-4 text-lg leading-loose md:w-[518px] md:text-xl">
              A{" "}
              <span className="font-black">Frontend Developer & Designer</span>{" "}
              who loves creating different user experiences.
            </p>
          </div>
          <div className="relative mt-8 w-full flex flex-col gap-y-4 md:mt-16 md:flex-row md:justify-between">
            <div className="absolute top-0 right-0 flex items-center justify-center md:right-28 md:-top-12">
              <motion.img
                src="/assets/icons/Pencil.svg"
                alt="Pencil Image"
                className="pencil"
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
            <div className="">
              Freelance
              <br />
              Developer
            </div>
            <div className="">
              Based in
              <br /> Ghana
            </div>
            <div className="">
              Get in touch
              <br />
              <span className="font-semibold">leswulffk@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
