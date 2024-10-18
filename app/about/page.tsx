"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { hobbys_data, tech_stack } from "@/utils/data";
import proIMG1 from "@/assets/projectBackground/proIMG1.jpg";
import proIMG2 from "@/assets/projectBackground/proIMG2.jpg";
import TransitionLink from "@/components/TransitionLink";
import Footer from "@/components/Footer";
import Connect from "@/sections/Connect";
import { aboutAnimate } from "@/utils/animate";

const About = () => {
  useEffect(() => {
    aboutAnimate();
  });
  return (
    <section className="container bg-white h-full">
      <div className="pt-20 pb-8">
        {/* About Bio */}
        <div className="py-16 px-6 md:px-0">
          <h1 className="about-header">Me?</h1>
          <p className="about-text ">
            Experienced Frontend Developer creating different full-stack
            solutions that are functional and visually pleasing with modern web
            technologies. I am eager to explore innovative approaches and grow
            my tech stack. Feel free to reach out — I’m open for new, exciting
            opportunities.
          </p>
        </div>
        {/* Tech Stack */}
        <div className="py-16 px-6 md:px-0">
          
        </div>
      </div>
    </section>
  );
};

export default About;
