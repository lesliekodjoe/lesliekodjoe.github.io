"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const AnimatedContent = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Final animation state
        exit={{ opacity: 0, y: 20 }} // Exit animation state
        transition={{ duration: 0.1 }} // Animation duration
      >
        
        {children} // Render the child components
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedContent;
