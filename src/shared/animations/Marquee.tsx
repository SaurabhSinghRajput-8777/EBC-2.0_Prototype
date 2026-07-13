"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/shared/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  pauseOnHover?: boolean;
  speed?: "fast" | "normal" | "slow";
  showArrows?: boolean;
  direction?: "left" | "right";
}

export function Marquee({ 
  children, 
  className,
  pauseOnHover = true,
  speed = "normal",
  showArrows = true,
  direction = "left"
}: MarqueeProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const isAnimatingRef = useRef(false);
  
  // Speed multiplier
  const getSpeed = () => {
    if (speed === "fast") return 1.5;
    if (speed === "slow") return 0.5;
    return 1;
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;
    let lastTime: number;
    let exactScrollLeft = el.scrollLeft;

    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;
      lastTime = time;

      // Only auto-scroll if not hovered (when pauseOnHover is true), not dragging, and not currently arrow-scrolling
      if ((!pauseOnHover || !isHovered) && !isDragging && !isAnimatingRef.current) {
        const moveAmount = getSpeed() * (deltaTime / 16);
        
        if (direction === "left") {
          exactScrollLeft += moveAmount;
          if (exactScrollLeft >= el.scrollWidth / 2) {
            exactScrollLeft -= el.scrollWidth / 2;
          }
        } else {
          exactScrollLeft -= moveAmount;
          if (exactScrollLeft <= 0) {
            exactScrollLeft += el.scrollWidth / 2;
          }
        }
        el.scrollLeft = exactScrollLeft;
      } else {
        // Sync the accumulator if the user manually scrolled or we paused
        exactScrollLeft = el.scrollLeft;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging, pauseOnHover, speed, direction]);

  // Prevent text selection globally while dragging
  useEffect(() => {
    if (isDragging) {
      document.body.style.userSelect = "none";
    } else {
      document.body.style.userSelect = "";
    }
    return () => {
      document.body.style.userSelect = "";
    };
  }, [isDragging]);

  // Mouse Drag Logic
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftStart.current = scrollRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault(); // Helps prevent default drag behaviors
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; 
    scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
    
    // Handle infinite looping during drag
    if (scrollRef.current.scrollLeft <= 0) {
       scrollRef.current.scrollLeft += scrollRef.current.scrollWidth / 2;
    } else if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
       scrollRef.current.scrollLeft -= scrollRef.current.scrollWidth / 2;
    }
  };

  // Arrow Navigation
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current || isAnimatingRef.current) return;
    
    isAnimatingRef.current = true;
    const scrollAmount = window.innerWidth < 640 ? 320 : 400; // approximate card width
    
    scrollRef.current.scrollBy({
       left: direction === "left" ? -scrollAmount : scrollAmount,
       behavior: "smooth"
    });

    // Release animation lock after smooth scroll completes (approx 500ms)
    setTimeout(() => {
       isAnimatingRef.current = false;
    }, 500);
  };

  return (
    <div 
      className="relative group w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={onMouseLeave}
    >
      {showArrows && (
        <>
           <button 
             onClick={() => scroll("left")}
             className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-14 sm:h-14 bg-white/95 hover:bg-white text-slate-800 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-slate-200 opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-0 hover:scale-105"
             aria-label="Scroll left"
           >
              <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
           </button>
           <button 
             onClick={() => scroll("right")}
             className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-14 sm:h-14 bg-white/95 hover:bg-white text-slate-800 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-slate-200 opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-0 hover:scale-105"
             aria-label="Scroll right"
           >
              <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
           </button>
        </>
      )}
      
      <div 
        ref={scrollRef}
        className={cn(
          "flex w-full overflow-x-auto cursor-grab active:cursor-grabbing",
          "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
          className,
          isDragging && "select-none"
        )}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        // Use auto behavior to prevent interference with JS animation/dragging
        style={{ scrollBehavior: "auto", WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex min-w-max shrink-0 items-stretch py-4">
          {children}
        </div>
        {/* Duplicate for infinite effect */}
        <div className="flex min-w-max shrink-0 items-stretch py-4" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
