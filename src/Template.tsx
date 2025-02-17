import { usePageTransitions } from "./utils/animationPage";
import { useLocation } from "react-router-dom";
import { useEffect, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Template({ children }: Props) {
  const location = useLocation();
  const { animatePageIn } = usePageTransitions();

  useEffect(() => {
    animatePageIn();
  });

  return (
    <div>
      <div
        id="banner-1"
        className="min-h-screen bg-neutral-950 z-50 fixed top-0 left-0 w-full flex items-center justify-center"
      >
        <h1 className="text-white text-4xl">{location.pathname}</h1>
      </div>
      {children}
    </div>

  );
}
