import React, { ReactNode, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { animateGreetings } from "../utils/animateGreetings";

type Props = {
  children: ReactNode;
};

const greet = [
  "Herzlich Wilkommen",
  "Creator",
  "Designer",
  "Developer",
  "Welcome",
];

const PreLoader = ({ children }: Props) => {


  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [currentGreeting, setCurrentGreeting] = useState(greet[0]);

  useEffect(() => {
    if (location.pathname === "/") {
      setCurrentGreeting(greet[0]);
      setLoading(true);
      animateGreetings(greet, setCurrentGreeting);
      const totalDuration = greet.length * (0.3 + 0.2) * 1000;
      setTimeout(() => {
        setLoading(false);
      }, totalDuration);
    } else {
      setLoading(false);
    }
  }, [location]);

  if (location.pathname === "/" && loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-white bg-black fixed top-0 left-0 w-full">
        <h1 id="greetingText" className="font-bold text-3xl lg:text-[2rem]">
          {currentGreeting}
        </h1>
      </div>
    );
  }

  return <>{children}</>;
};

export default PreLoader;
