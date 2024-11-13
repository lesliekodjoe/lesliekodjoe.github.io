"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import TransitionLink from "./TransitionLink";
import { AnimatedHamburgerMenu } from "@/components/AnimatedHamburgerMenu";
import useMediaQuery from "@/utils/useMediaQuery";
import { socialIcons } from "@/utils/data";
import { PiDownloadSimple } from "react-icons/pi";
import Link from "next/link";

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
                <Link
                  href="#project"
                  scroll={true}
                  className={`text-white text-sm hover:text-zinc-400 ${
                    pathname == "/projects" || pathname == "/about"
                      ? ""
                      : "text-[#d28d50] font-bold"
                  }`}
                >
                  Work
                </Link>

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
                <a
                  href="/Leslie_CV.pdf"
                  download
                  className={`flex items-center text-sm font-semibold text-white`}
                >
                  <PiDownloadSimple className="text-xl mr-1" />
                  CV
                </a>
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
            {isAboveMediumScreens ? (
              <div
                className={`flex gap-x-5 text-sm font-semibold ${
                  pathname == "/" || pathname == "/about"
                    ? "text-black"
                    : "text-white"
                }`}
              >
                <Link
                  href="#project"
                  scroll={true}
                  className="hover:text-zinc-400 ease-in-out duration-500"
                >
                  Work
                </Link>
                <a
                  href="/Leslie_CV.pdf"
                  download
                  className={`flex items-center text-sm font-semibold hover:text-zinc-400 ease-in-out duration-500`}
                >
                  <PiDownloadSimple className="text-xl mr-1" />
                  My CV
                </a>
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
