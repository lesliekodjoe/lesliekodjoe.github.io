"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import TransitionLink from "./TransitionLink";
import { AnimatedHamburgerMenu } from "@/components/AnimatedHamburgerMenu";
import useMediaQuery from "@/utils/useMediaQuery";
import { socialIcons } from "@/utils/data";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 170) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isAboveMediumScreens = useMediaQuery("(min-width: 720px)");
  const pathname = usePathname();
  return (
    <div>
      {isScrolling ? (
        <nav className="fixed bottom-12 z-20 w-full">
          <div className="w-full flex justify-center">
            <div className="w-[243px] py-3.5 h-full bg-[#333333] backdrop-blur-lg rounded-lg">
              <div className="flex items-center justify-center h-full space-x-6">
                <a
                  href="#"
                  className="text-white text-base hover:text-gray-300"
                >
                  Work
                </a>
                <a
                  href="#"
                  className="text-white text-base hover:text-gray-300"
                >
                  About
                </a>
                {socialIcons.map((icon, index) => (
                  <a
                    href={icon.href}
                    key={index}
                    className="inline-flex items-center"
                    target="_blank"
                  >
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={20}
                      height={20}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <header className="nav fixed w-full top-0 backdrop-blur-sm z-50">
          <div className="flex items-center justify-between px-8 py-3">
            <div className="w-1/3">
              {pathname == "/" || pathname == "/about" ? (
                <TransitionLink href="/">
                  <Image
                    src={"/assets/logo/LogoBlack.svg"}
                    alt="logo"
                    height={30}
                    width={30}
                  />
                </TransitionLink>
              ) : (
                <TransitionLink href="/">
                  <Image
                    src={"/assets/logo/LogoWhite.svg"}
                    alt="logo"
                    height={30}
                    width={30}
                  />
                </TransitionLink>
              )}
            </div>
            <nav
              className={`hidden w-1/3 md:flex items-center justify-center ${
                pathname == "/" || pathname == "/about"
                  ? "text-black"
                  : "text-white"
              }`}
            ></nav>
            {isAboveMediumScreens ? (
              <div className="flex gap-x-5 text-sm font-semibold">
                <a href="">Work</a>
                <a href="">About</a>
              </div>
            ) : (
              <div className="w-1/3 flex flex-row-reverse">
                <AnimatedHamburgerMenu />
              </div>
            )}
          </div>
        </header>
      )}
    </div>
  );
};

export default Navbar;
