import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type GsapTarget = gsap.TweenTarget;

export const fadeIn = (target: GsapTarget) => {
  const tl = gsap.timeline({
    defaults: { ease: "power2.inOut" },
  });

  //   first parameter is selector, second=cssStyle
  // Adding the .to() after the first t1.to allows me to chain the animation
  tl.to(target, {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    opacity: 1,
    y: 0,
    delay: 1,
    duration: 1.3,
  })
    .to(
      [".watch", ".donut", ".cone", ".about-tag"],
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        opacity: 1,
        x: 0,
        duration: 1.4,
      },
      "-=0.5"
    )
};
