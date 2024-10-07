"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { animateGreetings } from "@/utils/animateGreetings";

type Props = {
  children: ReactNode;
};

const greet = [
  "Creator",
  "Problem-Solver",
  "Designer",
  "Developer",
  "Welcome to My Digital World",
];

const PreLoader = ({ children }: Props) => {


  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const [currentGreeting, setCurrentGreeting] = useState(greet[0]);

  useEffect(() => {
    if (pathname === "/") {
      setCurrentGreeting(greet[0]);
      setLoading(true);
      animateGreetings(greet, setCurrentGreeting);
      const totalDuration = greet.length * (0.3 + 0.2) * 1000; // Adjusting total animation duration
      setTimeout(() => {
        setLoading(false);
      }, totalDuration);
    } else {
      setLoading(false);
    }
  }, [pathname]);

  // Render the loader only when loading is true
  if (pathname === "/" && loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-3xl text-white bg-black fixed top-0 left-0 w-full">
        <h1 id="greetingText" className="font-bold text-[5rem]">
          {currentGreeting}
        </h1>
      </div>
    );
  }

  // Render the children normally when loading is false
  return <>{children}</>;
};

export default PreLoader;
