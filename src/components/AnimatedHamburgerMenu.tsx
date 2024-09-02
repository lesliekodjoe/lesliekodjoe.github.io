// "use client"
import { motion, MotionConfig } from "framer-motion"
import { useState } from "react";

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
            className="relative border h-10 w-20"
            animate = {active ? "open" : "closed"}
            >
                <motion.span 
                className="absolute h-1 w-10 bg-black rounded-full"
                style={{
                    left: "50%",
                    top: "30%",
                    x: "-50%",
                    y: "-50%",
                    
                }}
                variants={{
                    open: {
                        rotate: ["0deg", "0deg", "45deg"],
                        top: ["30%" , "50%", "50%"]
                        
                    },
                    closed: {
                        rotate: ["45deg", "0deg", "0deg"],
                        top: [ "50%", "50%", "30%"]
                    },
                }}
                >

                </motion.span>
                <motion.span
                className="absolute h-1 w-10 bg-black rounded-full"
                style={{
                    left: "50%",
                    bottom: "30%",
                    x: "-50%",
                    y: "-50%",
                }}

                variants={{
                    open: {
                        rotate: ["0deg", "0deg", "-45deg"],
                        bottom: ["30%" , "50%", "40%"]
                        
                    },
                    closed: {
                        rotate: ["-45deg", "0deg", "0deg"],
                        bottom: [ "40%", "50%", "30%"]
                    },
                }}

                ></motion.span>
            </motion.button>
        </MotionConfig>
    );
}