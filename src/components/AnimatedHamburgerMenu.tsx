// "use client"
import { motion } from "framer-motion"

export const AnimatedHamburgerMenu = () => {
    return(
        <motion.button className="relative border h-20 w-20">
            <motion.span 
            className="absolute h-1 w-10 bg-black"
            
            >

            </motion.span>
            <motion.span></motion.span>
            <motion.span></motion.span>
        </motion.button>
    );
}