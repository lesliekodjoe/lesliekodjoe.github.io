"use client";
import DesignCard from "@/components/DesignCard";
import ProjectCard from "@/components/ProjectCard";
import React, { useEffect, useState } from "react";
import { HeroFadeIn } from "@/utils/animate";
import About from "../About";

const Project = () => {
  useEffect(() => {
    HeroFadeIn();
  });
  const [activeTab, setActiveTab] = useState("work");

  const handleTabButton = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div
      id="project"
      className={`min-h-screen w-full relative z-10  border-t border-[#3f3f3f] ${
        activeTab === "work"
          ? "bg-[#1d1d1d] text-white"
          : activeTab === "design"
          ? "bg-design-img text-black"
          : "bg-white text-black"
      }`}
    >
      <div className="pt-10">
        <div className="container bg-white bg-opacity-5 py-2 px-4 w-fit rounded-full border border-[#3f3f3f]">
          <button
            className={`w-[91px] h-[41px] ${
              activeTab === "work"
                ? "bg-[#3B3B3B] rounded-full font-medium"
                : ""
            }`}
            onClick={() => handleTabButton("work")}
          >
            Work
          </button>
          <button
            className={`w-[91px] h-[41px] ${
              activeTab === "design"
                ? "border border-[#3B3B3B] rounded-full font-medium"
                : ""
            }`}
            onClick={() => handleTabButton("design")}
          >
            Design
          </button>
          <button
            className={`w-[91px] h-[41px] ${
              activeTab === "about"
                ? "border border-[#3B3B3B] rounded-full font-medium"
                : ""
            }`}
            onClick={() => handleTabButton("about")}
          >
            Me?
          </button>
        </div>
        <div className="pt-5 pb-20 px-8 md:px-0">
          {activeTab === "work" ? (
            <div className="proj-anim">
              <ProjectCard />
            </div>
          ) : activeTab === "design" ? (
            <div>
              <DesignCard />
            </div>
          ) : (
            <div>
              <About />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
