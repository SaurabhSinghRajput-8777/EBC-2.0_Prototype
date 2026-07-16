"use client";

import { useState, useEffect } from "react";
import { Button } from "@/shared/ui/Button";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/constants/siteContent";
import { ArrowRight, Rocket, Calendar, Flag, ChevronLeft, ChevronRight } from "lucide-react";

import { TypewriterEffect } from "@/shared/animations/TypewriterEffect";

const HERO_IMAGES = [
  { src: "/hero/EBC%202.0.png", alt: "EBC 2.0 Banner" },
  { src: "/hero/WhatsApp%20Image%202026-07-08%20at%2010.31.54%20AM.jpeg", alt: "EBC Bootcamp Kickoff" },
  { src: "/hero/WhatsApp%20Image%202026-07-08%20at%2010.31.54%20AM%20(1).jpeg", alt: "Students collaborating" },
  { src: "/hero/WhatsApp%20Image%202026-07-08%20at%2010.31.54%20AM%20(2).jpeg", alt: "Mentorship session" },
  { src: "/hero/WhatsApp%20Image%202026-07-08%20at%2010.31.54%20AM%20(3).jpeg", alt: "Bootcamp Team" }
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 7000); // 7-second rotation

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  };

  return (
    <>
      <section className="relative min-h-[100dvh] w-full bg-surface dark:bg-transparent flex flex-col justify-center overflow-hidden pt-16 md:pt-20">

        {/* Animated Light Gradient Background (Fallback) */}
        <motion.div
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 z-0 dark:hidden"
          style={{
            background: "linear-gradient(-45deg, #eef2ff, #f3e8ff, #f8fafc, #e0f2fe)",
            backgroundSize: "400% 400%",
          }}
        />

        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085640_276ea93b-d7da-4418-a09b-2aa5b490e838.mp4" type="video/mp4" />
        </video>

        {/* Video Fade & Blur Overlays (Bottom to Center) */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/3 z-[1] pointer-events-none backdrop-blur-sm"
          style={{ maskImage: "linear-gradient(to top, black 0%, transparent 100%)", WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface/80 dark:from-background/80 to-transparent z-[1] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto w-full relative z-10 flex flex-col items-center -translate-y-[10px]">

          {/* Main Heading & Subheading (Centered Outside the Box) */}
          <div className="text-center w-full max-w-6xl mx-auto px-4">
            <div className="flex flex-col items-center">
              <h1 className="font-serif font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[90px] leading-[1.1] md:leading-[1.1] tracking-tight text-foreground dark:text-white mb-2">
                Entrepreneurship <span className="whitespace-nowrap">Bootcamp <span className="inline-block align-middle ml-2 px-3 py-1 sm:px-5 sm:py-2 bg-gradient-to-br from-accent to-red-700 text-white rounded-xl sm:rounded-[1.25rem] text-[0.55em] sm:text-[0.7em] font-sans font-black tracking-widest shadow-[0_8px_20px_rgba(220,38,38,0.4)] border border-white/25 transform -translate-y-1 sm:-translate-y-2 -rotate-3">2.0</span></span>
              </h1>
              <div className="text-xl sm:text-3xl md:text-4xl lg:text-[44px] text-foreground/80 dark:text-white font-medium flex flex-col sm:flex-row items-center justify-center mb-5 min-h-[80px] sm:min-h-[56px] md:min-h-[64px] lg:min-h-[80px] w-full">
                <span className="font-body shrink-0 sm:mr-3.5">Build Your</span>
                <span className="text-yellow-500 dark:text-yellow-400 font-serif italic mt-1 sm:mt-0 whitespace-nowrap drop-shadow-sm">
                  <TypewriterEffect
                    words={[
                      "Unicorn Startup",
                      "Next Big Thing",
                      "Dream Startup",
                      "Million Dollar Idea"
                    ]}
                  />
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-[90%] sm:w-full justify-center max-w-sm sm:max-w-md mx-auto">
                <Link href={siteContent.hero.secondaryCta.href} passHref className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full border-primary/20 text-black dark:text-white hover:bg-primary/5 bg-white/50 backdrop-blur-sm">
                    {siteContent.hero.secondaryCta.label}
                  </Button>
                </Link>
                <Link href={siteContent.hero.primaryCta.href} passHref className="w-full sm:w-auto">
                  <Button size="lg" className="w-full bg-[#C8102E] hover:bg-[#E63946] text-white border-transparent shadow-lg shadow-[#C8102E]/20">
                    {siteContent.hero.primaryCta.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="w-[26px] h-[42px] border-2 border-foreground/50 rounded-full flex justify-center p-1.5 shadow-sm">
            <motion.div
              className="w-1.5 h-2.5 bg-foreground/70 rounded-full"
              animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>

      </section>

      <section className="relative px-4 md:px-8 lg:px-12 py-16 md:py-10 bg-surface border-t border-primary/10 dark:border-white/5">
        <div className="max-w-[1440px] mx-auto w-full relative z-10 flex flex-col items-center">
          {/* The Premium Split Card */}
          <div className="bg-background rounded-3xl lg:rounded-[48px] shadow-sm hover:shadow-lg transition-shadow duration-300 border border-primary/10 dark:border-white/10 overflow-hidden flex flex-col lg:flex-row w-full p-3 sm:p-4 lg:p-6 gap-4 sm:gap-6 relative group/card">
            {/* Inner subtle glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 dark:from-white/5 to-transparent pointer-events-none rounded-3xl lg:rounded-[48px] opacity-50"></div>

            {/* Content Area (Left Side) */}
            <div className="flex-1 flex flex-col justify-center px-4 py-4 sm:py-6 lg:px-10 lg:py-10 lg:w-[45%] shrink-0 order-2 lg:order-1 relative z-10">

              <div>
                <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-background border border-primary/10 dark:border-white/10 text-foreground text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm">
                  <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
                  <span>Your Launchpad</span>
                </div>
                <p className="text-lg sm:text-xl md:text-2xl text-secondary-text font-medium mb-4 sm:mb-6 leading-relaxed tracking-tight text-justify">
                  {siteContent.hero.subheading}
                </p>
              </div>

              <div className="w-full sm:w-fit flex flex-col">
                <div className="w-full">
                  <div className="bg-surface rounded-2xl sm:rounded-3xl border border-primary/10 dark:border-white/10 shadow-sm p-4 sm:p-6 flex flex-row items-center gap-3 sm:gap-6 lg:gap-8 relative overflow-hidden group">
                    {/* Subtle gradient hover effect inside dates box */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-[#004A99]/60" />
                        <span className="block text-xs font-bold text-secondary-text uppercase tracking-widest">Kickoff</span>
                      </div>
                      <span className="block text-lg sm:text-xl font-bold text-foreground whitespace-nowrap">18 Aug 2026</span>
                    </div>
                    <div className="w-px h-12 bg-primary/10 dark:bg-white/10 shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Flag className="w-4 h-4 text-[#004A99]/60" />
                        <span className="block text-xs font-bold text-secondary-text uppercase tracking-widest">Demo Day</span>
                      </div>
                      <span className="block text-lg sm:text-xl font-bold text-foreground whitespace-nowrap">06 Oct 2026</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video / Editorial Canvas Area (Right Side) */}
            <div className="relative w-full lg:w-[55%] min-h-[240px] sm:min-h-[300px] lg:min-h-[400px] bg-background rounded-2xl lg:rounded-[36px] overflow-hidden order-1 lg:order-2 shadow-sm border-4 lg:border-[6px] border-surface dark:border-white/5 ring-1 ring-primary/5 group/slider">
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1.2,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 w-full h-full"
                >
                  <motion.div
                    animate={{ scale: [1, 1.03] }}
                    transition={{ duration: 10, ease: "linear" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={HERO_IMAGES[currentIndex]!.src}
                      alt={HERO_IMAGES[currentIndex]!.alt}
                      fill
                      priority={currentIndex === 0}
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Subtle Premium Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none mix-blend-multiply z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none z-10"></div>

              {/* Image Position Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:bottom-8 z-20 flex items-center gap-2.5">
                {HERO_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-[800ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${index === currentIndex
                      ? "w-8 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                      : "w-2 bg-white/40 hover:bg-white/60"
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="absolute inset-y-0 left-0 z-30 flex items-center pl-2 sm:pl-4 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 z-30 flex items-center pr-2 sm:pr-4 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
                <button
                  onClick={handleNext}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
