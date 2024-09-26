"use client";
import coneImage from "@/assets/icons/Cone.svg";
import donutImage from "@/assets/icons/Donut.svg";
import watchImage from "@/assets/icons/Apple_watches.svg";
import mouseImage from "@/assets/icons/Mouse.svg";
import pencilImage from "@/assets/icons/Pencil.svg";
import Image from "next/image";

export default function Home() {
  return (
    <section className="">
      <div className="pt-12 pb-24 lg:pb-44 md:pt-28">
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
              className="hidden lg:block w-[230px] absolute -top-20 -right-28"
            />
            <Image
              src={donutImage}
              alt="Donut Image"
              className="hidden lg:block w-[230px] absolute -bottom-28 left-0"
            />
            <Image
              src={watchImage}
              alt="Watch Image"
              className="hidden lg:block w-[100px] absolute -top-10 -left-20"
            />
            <Image
              src={mouseImage}
              alt="Mouse Image"
              className="hidden lg:block w-[100px] absolute -bottom-10 -right-0"
            />
          </div>
        </div>
      </div>
      <div className="relative -z-10 bg-[#1D1D1D] text-white">
        <div className="flex items-center justify-center">
          <Image
            src={pencilImage}
            alt="Pencil Image"
            className="absolute -top-24"
          />
        </div>
        <div className="w-full uppercase flex flex-col items-center justify-center gap-y-6 py-36 div">
          <span className="text-sm tracking-super-wide bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF,#DD7DDF,#DD7DDF)] text-transparent bg-clip-text">
            Featured
          </span>
          <h1 className="font-extrabold text-5xl">Projects</h1>
        </div>
        <div></div>
      </div>
    </section>
  );
}
