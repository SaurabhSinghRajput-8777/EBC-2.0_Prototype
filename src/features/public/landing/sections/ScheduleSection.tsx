"use client";

import { useState } from "react";
import { Container } from "@/shared/ui/Container";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import { siteContent } from "@/constants/siteContent";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/shared/lib/utils";
import Image from "next/image";

export function ScheduleSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="schedule" className="py-24 md:py-32 lg:py-8 md:py-10 bg-surface">
      <Container>
        <div className="relative mb-6 md:mb-8 flex flex-col items-center text-center">
          {/* Decorative background text */}
          <div className="relative z-10">
            <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-6 md:mb-8">
              {siteContent.schedule.title}
            </h2>
            
            {/* Venue & Time Badges */}
            {siteContent.schedule.subtitle && (
              <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 bg-surface/80 backdrop-blur-sm border border-primary/10 dark:border-white/10 shadow-sm px-6 py-3 rounded-2xl mx-auto">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm md:text-base font-medium text-foreground/80">
                    {siteContent.schedule.subtitle.split('|')[0]?.replace('Venue - ', '').trim()}
                  </span>
                </div>
                
                <div className="hidden sm:block w-px h-6 bg-primary/20"></div>
                
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm md:text-base font-medium text-foreground/80">
                    {siteContent.schedule.subtitle.split('|')[1]?.trim()}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 max-w-[1100px] mx-auto">
          {/* Left Pane: Navigation List */}
          <div className="w-full lg:w-2/5 flex-shrink-0">
            <MotionWrapper variant="slideUp" delay={0.1}>
              {/* Horizontal scroll on mobile, vertical on desktop */}
              <div className="flex flex-row lg:flex-col gap-3 lg:gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
                {siteContent.schedule.sessions.map((session, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={session.id}
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        "text-left px-4 py-3 lg:px-5 lg:py-4 rounded-xl transition-all duration-300 border border-transparent flex-shrink-0 w-[240px] sm:w-[280px] lg:w-full snap-start cursor-pointer",
                        isActive 
                          ? "bg-primary text-white shadow-md shadow-primary/20" 
                          : "bg-background text-foreground/70 hover:bg-background/80 hover:border-primary/10"
                      )}
                    >
                      <div className="flex items-center gap-3 lg:gap-4">
                        <span className={cn(
                          "font-mono text-sm font-bold opacity-70 shrink-0",
                          isActive ? "text-white" : "text-primary"
                        )}>
                          {String(session.id).padStart(2, '0')}
                        </span>
                        <span className="font-semibold text-sm lg:text-[15px] leading-tight line-clamp-2">
                          {session.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </MotionWrapper>
          </div>

          {/* Right Pane: Detail View */}
          <div className="w-full lg:w-3/5 flex-shrink-0 lg:pl-8 lg:border-l border-primary/10">
            <MotionWrapper variant="slideUp" delay={0.2} className="h-full">
              <div className="bg-background rounded-2xl lg:rounded-3xl p-6 sm:p-8 md:p-12 h-full min-h-[300px] flex flex-col justify-center border border-primary/5 shadow-sm relative overflow-hidden">
                {/* Background decorative element */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="relative z-10 h-full flex flex-col"
                  >
                    {/* Image Header */}
                    {siteContent.schedule.sessions[activeIndex]?.image && (
                      <div className="relative w-full h-40 sm:h-48 md:h-64 mb-6 md:mb-8 rounded-xl md:rounded-2xl overflow-hidden shrink-0 shadow-sm border border-primary/10">
                        <Image priority                           src={siteContent.schedule.sessions[activeIndex].image}
                          alt={siteContent.schedule.sessions[activeIndex].title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-5">
                      <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 text-primary font-serif text-lg md:text-xl shrink-0">
                        {siteContent.schedule.sessions[activeIndex]?.id}
                      </div>
                      {/* Date Badge */}
                      {siteContent.schedule.sessions[activeIndex]?.date && (
                        <div className="px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs md:text-sm font-semibold tracking-wide uppercase font-mono">
                          {siteContent.schedule.sessions[activeIndex].date}
                        </div>
                      )}
                    </div>
                    
                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground mb-3 md:mb-4 leading-tight">
                      {siteContent.schedule.sessions[activeIndex]?.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-secondary-text leading-relaxed font-light">
                      {siteContent.schedule.sessions[activeIndex]?.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </Container>
    </section>
  );
}
