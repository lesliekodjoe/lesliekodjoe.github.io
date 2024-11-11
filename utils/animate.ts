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
    duration: 1.5,
  })
    .to(
      [".watch", ".donut", ".cone", ".about-tag"],
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        opacity: 1,
        x: 0,
        duration: 1.5,
      },
      "-=0.5"
    )
    .to(
      [".pencil"],
      {
        opacity: 1,
      },
      "-=0.5"
    );
  // .to([".connect-left"], {
  //   clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
  //   opacity: 1,
  //   x: 0,
  //   duration: 1.5,
  // });
};



export const aboutAnimate = () => {
  gsap.fromTo(
    ".about-text",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 2, ease: "expo.out", delay: 1 }
  );

  gsap.fromTo(
    ".tech",
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".tech-header",
        start: "top 50%",
        end: "top 30%",
      },
    }
  );
  gsap.fromTo(
    ".projects",
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".project-anim-start",
        start: "top 50%",
        end: "top 30%",
      },
    }
  );
  gsap.fromTo(
    ".hobbys-anim",
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".hobby-start",
        start: "top 50%",
        end: "top 30%",
      },
    }
  );
};

export const projectScroll = () => {
  gsap.fromTo(
    ".single-proj-anim",
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    },
    {
      clipPath: "polygon(15% 11%, 86% 11%, 86% 90%, 15% 90%)",
      scrollTrigger: {
        trigger: ".anim-start",
        start: "top 95%",
        end: "top 20%",
        scrub: 1,
      },
    }
  );
  gsap.fromTo(
    ".desc-anim",
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".desc-anim-start",
        start: "top 75%",
        end: "top 30%",
      },
    }
  );
  gsap.fromTo(
    ".mock-anim",
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".mock-anim-start",
        start: "top 75%",
        end: "top 30%",
      },
    }
  );
};
