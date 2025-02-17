import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export const HeroFadeIn = () => {

  gsap.fromTo(
    ".hero",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 2, ease: "expo.out", delay: 1 }
  );
  gsap.fromTo(
    ".proj-anim",
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "expo.out",
    }
  );
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
    ".design",
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".design-anim-start",
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
