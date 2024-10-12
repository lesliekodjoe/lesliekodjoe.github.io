"use client";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animationPage";

import React from "react";

type Props = {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
};

const TransitionLink = ({ href, label,onClick, className }: Props) => {
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
      {label}
    </button>
  );
};

export default TransitionLink;
