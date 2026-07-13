"use client";

import { useState, useEffect } from "react";
import { Button } from "@/shared/ui/Button";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/constants/siteContent";
import { ArrowRight } from "lucide-react";

import { TypewriterEffect } from "@/shared/animations/TypewriterEffect";

const HERO_IMAGES = [
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

  return (
    <section className="relative min-h-[90dvh] lg:min-h-[85dvh] pt-28 pb-8 px-4 md:px-8 lg:px-12 flex flex-col justify-center bg-[#F5F8FC]">
      <div className="max-w-[1440px] mx-auto w-full">

        <div className="bg-surface rounded-[40px] shadow-sm overflow-hidden flex flex-col lg:flex-row h-full w-full p-4 lg:p-6 gap-6">

          {/* Content Area */}
          <div className="flex-1 flex flex-col justify-center px-4 py-8 lg:px-12 lg:py-12 lg:w-[45%] shrink-0 order-2 lg:order-1">
            <MotionWrapper variant="slideUp" delay={0.2}>
              <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-[50px] lg:text-[64px] leading-[1.1] md:leading-[1.1] tracking-tight text-foreground mb-4">
                Entrepreneurship Bootcamp 2.0
              </h1>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground/80 font-medium mb-8 h-12 flex items-center">
                <span className="font-body shrink-0">Build Your</span>
                <span className="ml-3 text-primary font-serif italic">
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
            </MotionWrapper>

            <MotionWrapper variant="slideUp" delay={0.3}>
              <p className="text-lg md:text-xl text-secondary-text mb-10 max-w-xl leading-relaxed">
                {siteContent.hero.subheading}
              </p>
            </MotionWrapper>

            <div className="w-full sm:w-fit flex flex-col">
              <MotionWrapper variant="slideUp" delay={0.4} className="mb-8 w-full">
                <div className="bg-surface rounded-2xl border border-primary/10 shadow-sm p-5 flex flex-row w-full">
                  <div className="flex-1 pr-6">
                    <span className="block text-sm font-medium text-secondary-text mb-1">Start Date</span>
                    <span className="block text-lg font-semibold text-foreground">18.08.2026</span>
                  </div>
                  <div className="w-px bg-primary/10"></div>
                  <div className="flex-1 pl-6">
                    <span className="block text-sm font-medium text-secondary-text mb-1">Ending Date</span>
                    <span className="block text-lg font-semibold text-foreground">06.10.2026</span>
                  </div>
                </div>
              </MotionWrapper>

              <MotionWrapper variant="slideUp" delay={0.5} className="flex flex-col sm:flex-row gap-4 w-full">
                <Link href={siteContent.hero.secondaryCta.href} passHref className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary/5">
                    {siteContent.hero.secondaryCta.label}
                  </Button>
                </Link>
                <Link href={siteContent.hero.primaryCta.href} passHref className="w-full sm:w-auto">
                  <Button size="lg" className="w-full bg-accent hover:bg-accent-light text-white border-transparent">
                    {siteContent.hero.primaryCta.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </MotionWrapper>
            </div>
          </div>

          {/* Video / Editorial Canvas Area */}
          <div className="relative w-full lg:w-[55%] min-h-[400px] lg:min-h-[500px] bg-primary rounded-[32px] overflow-hidden order-1 lg:order-2">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "-100%" }}
                transition={{
                  duration: 1.5,
                  ease: [0.65, 0, 0.35, 1]
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
                    className="object-cover opacity-90"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Subtle Premium Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none mix-blend-multiply z-10"></div>

            {/* Image Position Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:bottom-8 z-20 flex items-center gap-2.5">
              {HERO_IMAGES.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-[800ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${index === currentIndex
                      ? "w-8 bg-white"
                      : "w-2 bg-white/40"
                    }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
