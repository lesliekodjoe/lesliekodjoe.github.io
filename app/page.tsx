"use client";
import coneImage from "@/assets/icons/Cone.svg";
import donutImage from "@/assets/icons/Donut.svg";
import watchImage from "@/assets/icons/Apple_watches.svg";
import mouseImage from "@/assets/icons/Mouse.svg";
import pencilImage from "@/assets/icons/Pencil.svg";
import coffeeImage from "@/assets/background/Coffee.svg";
import arrowIcon from "@assets/icons/arrow_right.svg";
import Image from "next/image";

import proIMG1 from "@/assets/projectBackground/proIMG1.jpg";
import proIMG2 from "@/assets/projectBackground/proIMG2.jpg";
import proIMG3 from "@/assets/projectBackground/proIMG3.jpg";
import proIMG4 from "@/assets/projectBackground/proIMG4.jpg";

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
  return (
    <section className="">
      {/* Hero Section */}
      <div className="pt-20 pb-36 lg:pb-44 md:pt-28 overflow-x-clip">
        <div className="container">
          <div className="-z-10 relative flex justify-center items-center">
            <div className="w-[309px] md:w-[788px] h-auto">
              <h1 className="text-center text-2xl font-bold text-design md:text-6xl md:leading-tight">
                A Frontend Developer who loves designs & creating memorable user
                experiences.
              </h1>
            </div>
            <Image
              src={coneImage}
              alt="Cone Image"
              className="w-[150px] lg:block lg:w-[230px] absolute -top-20 -right-28"
            />
            <Image
              src={donutImage}
              alt="Donut Image"
              className="w-[150px] -left-10 lg:block lg:w-[230px] absolute -bottom-28 lg:left-0"
            />
            <Image
              src={watchImage}
              alt="Watch Image"
              className="hidden md:block w-[100px] absolute -top-10 -left-20"
            />
            <Image
              src={mouseImage}
              alt="Mouse Image"
              className="hidden md:block w-[100px] absolute -bottom-10 -right-0"
            />
          </div>
        </div>
      </div>

      {/* Featured Projects Section*/}
      <div className="relative -z-10 bg-[#1D1D1D] text-white">
        <div className="flex items-center justify-center">
          <Image
            src={pencilImage}
            alt="Pencil Image"
            className="absolute -top-24"
          />
        </div>
        <div className="w-full uppercase flex flex-col items-center justify-center gap-y-6 py-32 div">
          <span className="text-sm tracking-extra-wide md:tracking-super-wide bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF,#DD7DDF,#DD7DDF)] text-transparent bg-clip-text">
            Featured
          </span>
          <h1 className="font-extrabold text-4xl md:text-5xl">Projects</h1>
        </div>
        <div className="flex px-8 overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="relative flex gap-3 flex-none h-[510px] ">
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
                  <div className="absolute top-0 px-[20px] py-[47px] text-3xl font-extrabold">
                    {project.num}
                  </div>
                  <div className="absolute inset-y-1/2 px-[20px] py-[47px]">
                    {project.jobTitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* About Section */}
      <div className="container">
        <div className="px-8 py-14 border md:flex md:justify-between md:items-center">
          <div className="gap-y-5 flex flex-col md:gap-y-10">
            <h1 className="text-5xl md:text-7xl font-black">
              Let's <br></br>Create
            </h1>
            <a
              href=""
              className="text-sm font-semibold px-6 py-3 bg-black text-white w-fit rounded-full"
            >
              <span>leswulffk@gmail.com</span>
              <Image src={arrowIcon}alt="Arrow icon" />
            </a>
          </div>
          <div>
            <Image src={coffeeImage} alt="Coffee" />
          </div>
        </div>
      </div>
    </section>
  );
}
