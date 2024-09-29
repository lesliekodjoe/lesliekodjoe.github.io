"use client";
import React from "react";
import Image from "next/image";
import LogoWhite from "@/assets/logo/LogoWhite.svg";
import LogoBlack from "@/assets/logo/LogoBlack.svg";
import { useRouter, usePathname } from "next/navigation";
import { AnimatedHamburgerMenu } from "@/components/AnimatedHamburgerMenu";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="fixed w-full top-0 backdrop-blur-sm">
      <div className="flex items-center justify-between px-8 py-3">
        <div className="w-1/3">
        {
          pathname == '/about' ? (
            <Image src={LogoWhite} alt="logo" height={30} width={30}/>
          ) : (
            <Image src={LogoBlack} alt="logo" height={30} width={30}/>
          )
        }
        </div>
        <nav
          className={`hidden md:flex w-1/3 items-center justify-center ${ pathname == '/about' ? 'text-white' : 'text-black'}`}
        >
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
