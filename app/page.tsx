"use client"
import coneImage from "@/assets/icons/Cone.svg";
import donutImage from "@/assets/icons/Donut.svg";
import watchImage from "@/assets/icons/Apple_watches.svg";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { fadeIn } from "../utils/animate";


export default function Home() {
    const heroTitle = useRef(null);

    useEffect(() => {
      const target = heroTitle.current;

      fadeIn(target);
    }, []);
  return (
    <section className="">
      <div className="pt-20 pb-36 lg:pb-32 md:pt-28 overflow-x-clip">
        <div className="container">
          <div className="-z-10 relative flex justify-center items-center">
            <div className="w-[309px] md:w-[788px] h-auto flex flex-col items-center justify-center">
              <h1 ref={heroTitle} className="hero-title text-center text-2xl font-bold text-design md:text-6xl md:leading-tight">
                A Frontend Developer who loves designs & creating memorable user
                experiences.
              </h1>
            </div>
            <Image
              src={coneImage}
              alt="Cone Image"
              className="cone absolute top-0 -right-28"
              width={230}
              height={230}
            />
            <Image
              src={donutImage}
              alt="Donut Image"
              className="donut absolute -bottom-28 lg:left-0"
              width={230}
              height={230}
            />
            <Image
              src={watchImage}
              alt="Watch Image"
              className="watch hidden md:block w-[100px] absolute -top-10 -left-20"
            />
          </div>
          <div className="flex w-full flex-row-reverse">
            <Link href="/about" className="link-tag">About Me</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
