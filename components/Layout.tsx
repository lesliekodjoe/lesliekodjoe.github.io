import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const animate = (variants: any) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    exit: {
      opacity: 1,
    },
  };

  const slide = {
    initial: {
        top: "-100vh"
    },
    enter: {
        top: "-100vh"
    },

    exit: {
        top:"0",
        transition:{
            duration: 1,
            ease: [0.76, 0, 0.24, 1]
        }
    }
  }

  return (
    <div className="inner">
      <motion.div {...animate(slide)} className="slide" />
      <motion.div {...animate(opacity)}>{children}</motion.div>
    </div>
  );
}
