"use client"
import { motion, MotionConfig } from "framer-motion"
import Image from "next/image"
import Email from "@/assets/icons/mail.svg"
import Github from "@/assets/icons/github.svg"
import Twitter from "@/assets/icons/twitter.svg"
import { useState } from "react";



const socialIcons = [
    { 
        src: Email, 
        alt: "mail", 
        href: "leswulffk@gmail.com"
    },
    { 
        src: Github, 
        alt: "mail", 
        href: "https://github.com/Leswulff23"

    },
    { 
        src: Twitter, 
        alt: "twitter", 
        href: "https://x.com/WulffKodjoe"

    },
]

export const AnimatedHamburgerMenu = () => {
    const [active, setActive] = useState(false);
    return(
        <MotionConfig
                transition={{
            duration: 0.5,
            ease: "easeInOut"
        }}
        >
            <motion.button
            initial={false}
            onClick={() => setActive ((pv)=> !pv)}
            className="relative h-10 w-12 z-20"
            animate = {active ? "open" : "closed"}
            >
                <motion.span 
                className={`${active ? 'bg-white ' : 'bg-black'} absolute h-0.5 w-8 rounded-full md:w-10`}
                style={{
                    left: "50%",
                    top: "30%",
                    x: "-50%",
                    y: "-50%",
                    
                }}
                variants={{
                    open: {
                        rotate: ["0deg", "0deg", "45deg"],
                        top: ["30%" , "50%", "50%"],
                        color: "bg-white"
                        
                    },
                    closed: {
                        rotate: ["45deg", "0deg", "0deg"],
                        top: [ "50%", "50%", "30%"],
                    },
                }}
                >

                </motion.span>
                <motion.span
                className={`${active ? 'bg-white ' : 'bg-black'} absolute h-0.5 w-8 rounded-full md:w-10`}
                style={{
                    left: "50%",
                    top: "50%",
                    x: "-50%",
                    y: "-50%",
                }}

                variants={{
                    open: {
                        rotate: ["0deg", "0deg", "-45deg"],
                        color: "bg-white"
                        
                        
                    },
                    closed: {
                        rotate: ["-45deg", "0deg", "0deg"],
                        
                    },
                }}

                ></motion.span>
            </motion.button>
            
            <motion.div 
                className={`fixed right-0 bottom-0 z-10 h-full w-full bg-[#111111]`}
                animate = {active ? "open" : "closed"}
                variants={{
                    open: { x: 0,
                        transition: {
                            duration: 1,
                            ease: "easeInOut"
                        }
                    },
                    closed: { x: "-100%",
                        transition: {
                            duration: 1,
                            ease: "easeInOut"
                        }

                    },
                }}
                initial="closed"
                
                >
                    {/* Menu Navigation */}
                    <div className="flex flex-col items-end pr-8 text-white h-full justify-center gap-12">
                        <a className="menu-style ">Home.</a>
                        <a className="menu-style">About.</a>
                        <a className="menu-style">Projects.</a>
                        <a className="menu-style">Connect.</a>
                    </div>

                    {/* Social Icons */}
                    <div className="absolute text-white left-1/2 bottom-20 inline-flex items-center gap-10 md:flex-col md:left-20">
                        <a
                        className="inline-flex items-center"
                        target="_blank"
                        >
                            <Image
                                src={Email}
                                alt='mail'
                                width={20} 
                                height={20} 
                            />
                        </a>
                        {
                            socialIcons.map((icon, index)=>(
                                
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
                            ))
                        }
                    </div>
                    
            </motion.div>
               
            
            
        </MotionConfig>
    );
}