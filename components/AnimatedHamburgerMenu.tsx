"use client";
import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { socialIcons } from "@/utils/data";
import { useState } from "react";
import TransitionLink from "./TransitionLink";

export const AnimatedHamburgerMenu = () => {
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  const menuColor = active
    ? "bg-white"
    : pathname == "/projects"
    ? "bg-white"
    : "bg-black";
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        onClick={() => setActive((pv) => !pv)}
        className="relative h-10 w-12 z-50"
        animate={active ? "open" : "closed"}
      >
        <motion.span
          className={`${menuColor} absolute h-0.5 w-8 rounded-full md:w-10`}
          style={{
            left: "50%",
            top: "30%",
            x: "-50%",
            y: "-50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["30%", "50%", "50%"],
              color: "bg-white",
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "30%"],
            },
          }}
        ></motion.span>
        <motion.span
          className={`${menuColor} absolute h-0.5 w-8 rounded-full md:w-10`}
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
              color: "bg-white",
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        ></motion.span>
      </motion.button>

      <motion.div
        className={`fixed top-0 left-0 right-0 bottom-0 z-30 h-screen w-full bg-[#111111]`}
        animate={active ? "open" : "closed"}
        initial="closed"
        variants={{
          open: {
            x: 0,
            transition: {
              duration: 0.9,
              ease: "easeInOut",
            },
          },
          closed: {
            x: "-100%",
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          },
        }}
      >
        {/* Menu Navigation */}
        <div className="flex flex-col items-end pr-8 text-white h-full justify-center gap-12">
          <TransitionLink
            href="/"
            className="menu-style"
            onClick={() => setActive(false)}
          >
            Home
          </TransitionLink>
          <TransitionLink
            href="/about"
            className="menu-style"
            onClick={() => setActive(false)}
          >
            About
          </TransitionLink>
          <TransitionLink
            href="/projects"
            className="menu-style"
            onClick={() => setActive(false)}
          >
            Projects
          </TransitionLink>
        </div>

        {/* Social Icons */}
        <div className="absolute text-white left-1/2 bottom-20 inline-flex items-center gap-10 md:flex-col md:left-20">
          {socialIcons.map((icon, index) => (
            <a
              href={icon.href}
              key={index}
              className="inline-flex items-center"
              target="_blank"
            >
              <Image src={icon.src} alt={icon.alt} width={20} height={20} />
            </a>
          ))}
        </div>
      </motion.div>
    </MotionConfig>
  );
};
