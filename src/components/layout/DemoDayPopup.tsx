"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function DemoDayPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    // Show popup only once the landing page is visible (after initial loading screen fades out)
    const showPopup = () => {
      setIsOpen(true);
    };

    if (typeof window !== "undefined" && window.__appReady) {
      showPopup();
    } else {
      window.addEventListener("landing-page-ready", showPopup, { once: true });
      // Fallback in case event was already triggered
      const fallbackTimer = setTimeout(showPopup, 2000);
      return () => {
        window.removeEventListener("landing-page-ready", showPopup);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    // 10-second countdown timer
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsOpen(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
            onClick={handleClose}
          />

          {/* Modal Container - 80% of page layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-[92vw] sm:w-[85vw] md:w-[80vw] max-w-5xl overflow-hidden rounded-2xl sm:rounded-3xl bg-background border border-primary/20 dark:border-white/10 shadow-[0_28px_80px_rgba(0,0,0,0.5)] z-10 flex flex-col max-h-[88vh]"
          >
            {/* Top Auto-dismiss progress bar (10s) */}
            <div className="w-full h-1 bg-muted/40 overflow-hidden">
              <motion.div
                className="h-full bg-[#C8102E]"
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 10, ease: "linear" }}
              />
            </div>

            {/* Close Button + Timer badge */}
            <div className="absolute right-3.5 top-3.5 z-20 flex items-center gap-2">
              <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full bg-black/60 text-white/90 text-xs font-medium backdrop-blur-md">
                Closing in {timeLeft}s
              </span>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close announcement"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all shadow-md hover:scale-105 active:scale-95"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Poster Image - Full Uncropped */}
            <div className="relative w-full bg-zinc-950 overflow-hidden flex items-center justify-center">
              {/* Using standard img with full width and auto height to maintain 100% of the image without any cropping */}
              <img
                src="/demo day.jpeg"
                alt="Bennett University Demo Day 2026 Announcement"
                className="w-full h-auto object-contain block select-none"
              />
            </div>

            {/* Modal Body / Actions */}
            <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-primary/10 dark:border-white/10 bg-surface/50">
              <div className="flex flex-col text-center sm:text-left">
                <span className="font-heading text-lg font-bold text-foreground">
                  Grand Demo Day 2026
                </span>
                <span className="text-xs text-foreground/70">
                  Pitching live on 23rd October 2026 at Bennett University
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2.5 rounded-xl border border-primary/15 hover:bg-muted/60 text-foreground/75 font-medium text-sm transition-colors text-center w-full sm:w-auto"
                >
                  Dismiss
                </button>

                <Link
                  href="/demoday"
                  onClick={handleClose}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#C8102E] hover:bg-[#E63946] text-white font-semibold text-sm transition-all shadow-lg shadow-[#C8102E]/25 hover:shadow-xl active:scale-[0.99] whitespace-nowrap"
                >
                  <span>View Final 20 Startups</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
