import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface EduIDLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  priority?: boolean;
}

const sizeDimensions = {
  sm: { height: 36, width: 130, className: "h-9 w-auto" },
  md: { height: 48, width: 173, className: "h-11 sm:h-12 w-auto" },
  lg: { height: 60, width: 217, className: "h-14 sm:h-15 w-auto" },
  xl: { height: 80, width: 289, className: "h-20 w-auto" },
};

export function EduIDLogo({
  className,
  size = "md",
  href,
  priority = true,
}: EduIDLogoProps) {
  const dim = sizeDimensions[size];

  const logoImg = (
    <div className={cn("inline-flex items-center select-none py-1", className)}>
      <Image
        src="/eduid-logo.png"
        alt="eduID.africa"
        width={1500}
        height={415}
        priority={priority}
        className={cn(dim.className, "object-contain shrink-0")}
      />
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center hover:opacity-95 transition-opacity">
        {logoImg}
      </Link>
    );
  }

  return logoImg;
}
