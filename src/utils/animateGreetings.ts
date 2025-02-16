import gsap from "gsap";

export const animateGreetings = (
  greetings: string[],
  setGreeting: (greeting: string) => void
) => {
  const tl = gsap.timeline();

  greetings.forEach((greeting, index) => {
        const isFirstGreeting = index === 0;
        const isLastGreeting = index === greetings.length - 1;
    tl.to(
      {},
      {
        duration: isFirstGreeting  ? 0 : 0.3,
        onStart: () => {
          setGreeting(greeting); 
          gsap.to("#greetingText", {
            duration: 0.2,
            ease: "power2.out",
          });
        },
      }
    ).to(
      {},
      {
        duration: isLastGreeting ? 0 : 0.2,
      }
    );
  });
};
