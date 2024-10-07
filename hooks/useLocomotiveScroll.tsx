"use client"
// hooks/useLocomotiveScroll.ts
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const useLocomotiveScroll = () => {
  useEffect(() => {
    const scrollEl = document.querySelector("[data-scroll-container]");

    if (scrollEl) {
      const locomotiveScroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        lerp: 0.1, // Adjust for smoothness
      });

    }
  }, []);
};

export default useLocomotiveScroll;
