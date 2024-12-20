"use client";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animationPage";

import React, { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

const TransitionLink = ({ href, children,onClick, className }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname != href) {
      animatePageOut(href, router);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
};

export default TransitionLink;
