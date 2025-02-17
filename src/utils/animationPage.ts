import gsap from "gsap";
import { useNavigate } from "react-router-dom";

export const usePageTransitions = () => {
  const navigate = useNavigate();
  const animatePageIn = () => {
    const bannerOne = document.getElementById("banner-1");

    if (bannerOne) {
      const t1 = gsap.timeline();

      t1.set([bannerOne], {
        yPercent: 0,
      }).to([bannerOne], {
        yPercent: -100,
        ease: "power4.inOut",
        duration: 1,
        delay: 0.2,
      });
    }
  };

  const animatePageOut = (href: string) => {
    const bannerOne = document.getElementById("banner-1");

    if (bannerOne) {
      const t1 = gsap.timeline();

      t1.set([bannerOne], {
        yPercent: 100,
      }).to([bannerOne], {
        yPercent: 0,
        ease: "power4.inOut",
        duration: 1,
        delay: 0.2,
        onComplete: () => {
          navigate(href);;
        },
      });
    }
  };

  return { animatePageIn, animatePageOut };
};
