"use client";
import React from "react";
import Image from "next/image";
import proIMG1 from "@/assets/projectBackground/proIMG1.jpg";

const ProjectList = () => {
  return (
    <section className="bg-about-img h-screen overflow-y-scroll overflow-x-hidden">
      <div className="pt-32 pb-8 w-full h-full">
        <div className="container w-[998px] flex flex-col items-center justify-center">
          <div className="w-full h-[514px] -rotate-6">
            <Image
              src={proIMG1}
              alt="image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-[514px] -rotate-6">
            <Image
              src={proIMG1}
              alt="image 1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
