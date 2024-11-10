import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-screen flex items-center justify-center sticky top-0 z-10 pt-20 pb-20 px-8">
      {/* Flex container to center the video */}
      <div className="absolute top-20 right-40 flex items-center justify-center">
        <div className="w-[340px] h-[340px] rounded-full overflow-hidden">
          <video
            src="/background.mp4"
            autoPlay
            loop
            muted
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Glassmorphism effect */}
      <div className="absolute w-full h-full top-0 left-0 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg"></div>

      {/* Content */}
      <div className="flex items-end w-full h-full relative z-20">
        <div className="w-full md:px-40">
          <div>
            <h4 className="text-6xl text-[#b3b3b3] font-black md:text-8xl">
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
                  translateY: [-18, 4],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 1,
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
