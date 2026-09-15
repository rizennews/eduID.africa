"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export type AnimationType = "hover-scale" | "hover-spin" | "pulse" | "bounce" | "glow" | "hover-right" | "none";

interface AnimatedIconProps {
  children: React.ReactNode;
  animation?: AnimationType;
  containerClassName?: string;
}

export function AnimatedIcon({
  children,
  animation = "hover-scale",
  containerClassName,
}: AnimatedIconProps) {
  const getAnimationVariants = (): Variants => {
    switch (animation) {
      case "hover-right":
        return {
          rest: { x: 0 },
          hover: { x: 4, transition: { type: "spring", stiffness: 400, damping: 18 } },
        };
      case "hover-spin":
        return {
          rest: { rotate: 0 },
          hover: { rotate: 360, transition: { duration: 0.6, ease: "easeOut" } },
        };
      case "hover-scale":
        return {
          rest: { scale: 1 },
          hover: { scale: 1.15, transition: { type: "spring", stiffness: 400, damping: 15 } },
        };
      case "pulse":
        return {
          rest: { scale: 1, opacity: 1 },
          animate: {
            scale: [1, 1.08, 1],
            opacity: [1, 0.85, 1],
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          },
        };
      case "bounce":
        return {
          rest: { y: 0 },
          hover: { y: -4, transition: { type: "spring", stiffness: 500, damping: 12 } },
        };
      case "glow":
        return {
          rest: { filter: "drop-shadow(0 0 0px rgba(0, 168, 107, 0))" },
          hover: {
            filter: "drop-shadow(0 0 8px rgba(0, 168, 107, 0.6))",
            transition: { duration: 0.3 },
          },
        };
      default:
        return {};
    }
  };

  const isContinuous = animation === "pulse";

  return (
    <motion.span
      className={cn("inline-flex items-center justify-center cursor-pointer", containerClassName)}
      initial="rest"
      animate={isContinuous ? "animate" : "rest"}
      whileHover={!isContinuous ? "hover" : undefined}
      variants={getAnimationVariants()}
    >
      {children}
    </motion.span>
  );
}
