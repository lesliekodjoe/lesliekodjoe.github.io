"use client";
import React from "react";
import coffeeImage from "@/assets/background/Coffee.svg";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";

type Props = {};

const Connect = (props: Props) => {
  return (
    <div className="container">
      <div className="py-12 w-full footer-bottom md:flex items-center justify-between md:py-4">
        <div className="flex flex-col gap-y-4 md:gap-y-10 md:w-1/2">
          <h1 className="text-4xl md:text-7xl font-black w-[121px]">
            Let's Create
          </h1>
          <a
            href=""
            className="inline-flex items-center gap-x-2 bg-black rounded-full text-white w-fit px-5 py-3 text-sm font-semibold"
          >
            <span>leswulffk@gmail.com</span>
            <GoArrowRight className="text-xl" />
          </a>
        </div>
        <div className="md:w-1/2">
          <Image
            src={coffeeImage}
            alt="Coffee Image"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Connect;
