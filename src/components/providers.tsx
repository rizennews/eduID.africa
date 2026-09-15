"use client";

import * as React from "react";
import { MotionConfig } from "framer-motion";
import { ToastProvider } from "@heroui/react";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <MotionConfig reducedMotion="user">
      <ToastProvider />
      {children}
    </MotionConfig>
  );
}
