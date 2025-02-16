import React from "react";
import { GoArrowRight } from "react-icons/go";

const Connect = () => {
  return (
    <section className="w-full relative z-10 bg-white pt-10 md:pt-0">
      <div className="px-8 w-full md:px-48">
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
            <img
              src="/Coffee.svg"
              alt="Coffee Image"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
