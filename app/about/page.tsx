"use client";
import Footer from "@/components/Footer";
import Connect from "@/sections/Connect";
import Image from "next/image";
import { projects_data, tech_stack } from "@/utils/data";
import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <section className="bg-about-img h-full scrollbar-hide">
      <div className="px-12 pt-20 pb-16 w-full md:flex md:px-16">
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
      {/* Connect Section */}
      <Connect />
      {/* Footer */}
      <Footer />
    </section>
  );
};

export default About;
