"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import TransitionLink from "./TransitionLink";
import { AnimatedHamburgerMenu } from "@/components/AnimatedHamburgerMenu";
import useMediaQuery from "@/utils/useMediaQuery";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    // Update the scroll state
    if (window.scrollY > 0) {
      setIsScrolling(true); // Scrolling has started
    } else {
      setIsScrolling(false); // Scrolling has stopped or back to top
    }
  };

  // Listen for scroll events
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isAboveMediumScreens = useMediaQuery("(min-width: 720px)");
  const pathname = usePathname();
  return (
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
  );
};

export default Navbar;
