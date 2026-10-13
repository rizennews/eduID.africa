"use client";

import * as React from "react";
import { MotionConfig } from "framer-motion";
import { ToastProvider } from "@heroui/react";
import { DeveloperFootprint } from "./DeveloperFootprint";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <MotionConfig reducedMotion="user">
      <DeveloperFootprint />
      <ToastProvider />
      {children}
    </MotionConfig>
  );
}
