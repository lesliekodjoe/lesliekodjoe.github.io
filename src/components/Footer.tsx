import React from "react";
import { GoArrowRight } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="pb-16 w-full relative z-10 bg-white footer px-8 md:px-48">
      <div className="footer-top flex flex-col-reverse items-start justify-between md:flex-row md:items-center">
        <div className=" pt-4 pb-8">
          <h1 className="font-normal text-base">
            Designed and coded by Leslie Nartey Kodjoe
          </h1>
          <p className="mt-3 text-zinc-500 text-sm">
            &copy; 2025 Leslie N. Kodjoe.
          </p>
        </div>
        <div className="flex mt-10 md:mt-0">
          <a
            href="https://github.com/lesliekodjoe/"
            className="flex items-center hover:text-zinc-500"
          >
            <GoArrowRight className="text-xl mr-1" />
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
