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
        duration: isFirstGreeting  ? 0 : 0.3, // Short duration for the transition between greetings
        onStart: () => {
          setGreeting(greeting); // Update the greeting in the PreLoader component
          gsap.to("#greetingText", {
            fontSize: "5rem", // Smoothly scale down to normal size
            duration: 0.2, // Longer duration for a smooth transition
            ease: "power2.out", // Smooth easing for a natural effect
          });
        },
      }
    ).to(
      {},
      {
        duration: isLastGreeting ? 0 : 0.2, // Immediate transition for the last greeting
      }
    );
  });
};
