"use client";

import type { Variants } from "framer-motion";
import { motion, useAnimation } from "framer-motion";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils";

export interface Building2IconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface Building2IconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const WINDOW_VARIANTS: Variants = {
  normal: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2 },
  },
  animate: (i: number) => ({
    opacity: [0.3, 1],
    scale: [0.8, 1],
    transition: {
      duration: 0.3,
      delay: i * 0.06,
    },
  }),
};

export const Building2Icon = forwardRef<Building2IconHandle, Building2IconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 20, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: () => controls.start("animate"),
        stopAnimation: () => controls.start("normal"),
      };
    });

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (isControlledRef.current) {
          onMouseEnter?.(e);
        } else {
          controls.start("animate");
        }
      },
      [controls, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (isControlledRef.current) {
          onMouseLeave?.(e);
        } else {
          controls.start("normal");
        }
      },
      [controls, onMouseLeave]
    );

    return (
      <div
        className={cn("inline-flex items-center justify-center cursor-pointer", className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          fill="none"
          height={size}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
          <path d="M10 6h4" />
          <motion.path
            animate={controls}
            custom={0}
            d="M10 10h4"
            initial="normal"
            variants={WINDOW_VARIANTS}
          />
          <motion.path
            animate={controls}
            custom={1}
            d="M10 14h4"
            initial="normal"
            variants={WINDOW_VARIANTS}
          />
          <motion.path
            animate={controls}
            custom={2}
            d="M10 18h4"
            initial="normal"
            variants={WINDOW_VARIANTS}
          />
        </svg>
      </div>
    );
  }
);

Building2Icon.displayName = "Building2Icon";
