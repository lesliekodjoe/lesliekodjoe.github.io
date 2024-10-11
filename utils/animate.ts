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

export const scrollIn = () => {
  gsap.fromTo(
    ".feature-header",
    { translateX: -50, opacity: 0 },
    {
      translateX: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".feature-header",
        start: "top 90%",
        end: "top 60%",
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    ".project",
    { y: 300, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".grid",
        start: "top 95%",
        end: "top 10%",
        scrub: 1,
      },
    }
  );

  gsap.to([".connect-left", ".connect-right"], {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    opacity: 1,
    x: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: ".connect",
      start: "top 70%",
      end: "top 40%",
      scrub: 1,
    },
  });

  gsap.fromTo(
    ".footer-top",
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".footer",
        start: "top 95%",
        end: "top 90%",
        scrub: 1,
      },
    }
  );

  // gsap.to("pinned", {
  //   scrollTrigger: {
  //     trigger: ".pin",
  //     start: "top top",
  //     end: "+=200",
  //     scrub: true,
  //     markers: true,
  //     pin: true,
  //   },
  // });
};
