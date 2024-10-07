import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1");

  if (bannerOne) {
    const t1 = gsap.timeline();

    t1.set([bannerOne], {
      yPercent: 0,
    }).to([bannerOne], {
      yPercent: -100,
      ease: "power4.inOut",
      duration: 1,
    });
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const bannerOne = document.getElementById("banner-1");

  if (bannerOne) {
    const t1 = gsap.timeline();

    t1.set([bannerOne], {
      yPercent: 100,
    }).to([bannerOne], {
      yPercent: 0,
      ease: "power4.inOut",
      duration: 1,
      onComplete: () => {
        router.push(href);
      },
    });
  }
};
