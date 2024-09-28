"use client"
import { motion, MotionConfig } from "framer-motion"
import Image from "next/image";
import Email from "@/assets/icons/mail.svg";
import { socialIcons } from "@/utils/data";
import { useState } from "react";
import Link from "next/link";


export const AnimatedHamburgerMenu = () => {
    const [active, setActive] = useState(false);
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
            className={`${
              active ? "bg-white " : "bg-black"
            } absolute h-0.5 w-8 rounded-full md:w-10`}
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
            className={`${
              active ? "bg-white " : "bg-black"
            } absolute h-0.5 w-8 rounded-full md:w-10`}
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
          variants={{
            open: {
              x: 0,
              transition: {
                duration: 1,
                ease: "easeInOut",
              },
            },
            closed: {
              x: "-100%",
              transition: {
                duration: 1,
                ease: "easeInOut",
              },
            },
          }}
          initial="closed"
        >
          {/* Menu Navigation */}
          <div className="flex flex-col items-end pr-8 text-white h-full justify-center gap-12">
            <Link href="/" className="menu-style">Home.</Link>
            <Link href="/about" className="menu-style">About.</Link>
            <Link href="/project" className="menu-style">Projects.</Link>
            <Link href="/single"  className="menu-style">Connect.</Link>
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
}