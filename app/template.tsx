"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

type Props = {
  children: ReactNode;
};

export default function Template({ children }: Props) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true); // State to manage loading animation
  const [isVisible, setIsVisible] = useState(true); // State for child visibility

  // Function to handle when the animation completes
  const handleAnimationComplete = () => {
    setIsLoading(false); // Hide loading animation
  };

  // Update visibility when loading state changes
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setIsVisible(true); // Show children after loading is done
      }, 300); // Adjust the delay time as needed
    }
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div key={pathname}>
            <motion.div
              className={`fixed top-0 left-0 right-0 bottom-0 z-30 h-screen w-full bg-[#111111] flex flex-col items-center justify-center text-center text-white`}
              initial={{ y: "100%", opacity: 1 }} // Start off-screen to the bottom
              animate={{ y: 0, opacity: 1 }} // Slide in from the bottom
              exit={{ y: "-100%", opacity: 1 }} // Slide out to the top
              transition={{
                ease: "easeInOut",
                duration: 1.4,
              }}
              onAnimationComplete={handleAnimationComplete} // Handle animation completion
            >
              <div className="text-5xl capitalize">{pathname}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ensure children are visible only after the loading is complete */}
      {isVisible && !isLoading && children}
    </div>
  );
}
