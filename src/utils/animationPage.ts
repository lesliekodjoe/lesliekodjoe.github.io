import gsap from "gsap";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const usePageTransitions = () => {
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const animatePageIn = () => {
    if (!bannerRef.current) return;

    gsap
      .timeline()
      .set(bannerRef.current, { yPercent: 0 })
      .to(bannerRef.current, {
        yPercent: -100,
        ease: "power4.inOut",
        duration: 1,
        delay: 0.2,
      });
  };

  const animatePageOut = (href: string) => {
    if (!bannerRef.current) return;

    gsap
      .timeline()
      .set(bannerRef.current, { yPercent: 100 })
      .to(bannerRef.current, {
        yPercent: 0,
        ease: "power4.inOut",
        duration: 1,
        delay: 0.2,
        onComplete: () => {
          navigate(href);
        },
      });
  };

  return { bannerRef, animatePageIn, animatePageOut };
};
