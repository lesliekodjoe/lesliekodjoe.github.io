"use client";
import React from "react";
import coffeeImage from "@/assets/background/Coffee.svg";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";

const Connect = () => {
  return (
    <section className="container">
      <div className="px-6 md:px-0">
        <div className="mt-10 connect">
          <div className="py-4 w-full md:flex items-center justify-between md:py-1">
            <div className="connect-left flex flex-col gap-y-4 md:gap-y-10 md:w-1/2">
              <h1 className="text-4xl md:text-7xl font-black opacity-80 w-[121px]">
                Lets Create
              </h1>
              <a
                href=""
                className="inline-flex items-center gap-x-2 bg-black opacity-80 rounded-full text-white w-fit px-5 py-3 text-sm font-semibold"
              >
                <span>leswulffk@gmail.com</span>
                <GoArrowRight className="text-xl" />
              </a>
            </div>
            <div className="connect-right md:w-1/2">
              <Image
                src={coffeeImage}
                alt="Coffee Image"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
