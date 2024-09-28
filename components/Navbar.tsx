"use client";
import React from "react";
import Image from "next/image";
import Logo from "@/assets/logo/Logo.svg";
import { AnimatedHamburgerMenu } from "@/components/AnimatedHamburgerMenu";

const Navbar = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm">
      <div className="flex items-center justify-between px-8 py-3 ">
        <div className="w-1/3">
          <Image src={Logo} alt="logo" height={30} width={30}/>
        </div>
        <nav className="hidden md:flex w-1/3 items-center justify-center">
          <a href="" className="">
            Leslie Kodjoe
          </a>
        </nav>
        <div className="w-1/3 flex flex-row-reverse">
          <AnimatedHamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
