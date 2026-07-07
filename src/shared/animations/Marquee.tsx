"use client";

import { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  pauseOnHover?: boolean;
  speed?: "fast" | "normal" | "slow";
}

export function Marquee({ 
  children, 
  className,
  pauseOnHover = true,
  speed = "normal" 
}: MarqueeProps) {
  const speedClass = {
    fast: "animate-marquee-fast",
    normal: "animate-marquee",
    slow: "animate-marquee-slow"
  };

  return (
    <div className={cn("flex w-full overflow-hidden", className)}>
      <div 
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4", 
          speedClass[speed],
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
