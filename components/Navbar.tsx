"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import TransitionLink from "./TransitionLink";
import { AnimatedHamburgerMenu } from "@/components/AnimatedHamburgerMenu";
import useMediaQuery from "@/utils/useMediaQuery";
import { socialIcons } from "@/utils/data";
import { PiDownloadSimple } from "react-icons/pi";

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
        <nav className="fixed bottom-5 z-20 w-full">
          <div className="w-full flex justify-center">
            {/* Floating Navbar */}
            <div className="w-[303px] py-3 h-full bg-[#333333] backdrop-blur-lg rounded-lg">
              <div className="flex items-center justify-center h-full space-x-6">
                <div className="flex">
                  <TransitionLink href="/">
                    <Image
                      src={"/assets/logo/LogoWhite.svg"}
                      alt="logo"
                      height={20}
                      width={20}
                    />
                  </TransitionLink>
                  <div className="w-0.5 h-6 bg-zinc-500 rounded-full ml-3"></div>
                </div>
                <a
                  href="#design"
                  className={`text-white text-sm hover:text-zinc-400 ${
                    pathname == "/projects" || pathname == "/about"
                      ? ""
                      : "text-[#d28d50] font-bold"
                  }`}
                >
                  Work
                </a>
                <TransitionLink
                  href="/about"
                  className={`text-white text-sm hover:text-zinc-400 ${
                    pathname === "/about" ? "text-[#d28d50] font-bold" : ""
                  }`}
                >
                  About
                </TransitionLink>

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
                      width={18}
                      height={18}
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
            <div
              className={`flex items-center text-sm font-semibold ${
                pathname == "/" || pathname == "/about"
                  ? "text-black"
                  : "text-white"
              }`}
            >
              <PiDownloadSimple />
              My CV
            </div>
          </div>
        </header>
      )}
    </div>
  );
};

export default Navbar;
