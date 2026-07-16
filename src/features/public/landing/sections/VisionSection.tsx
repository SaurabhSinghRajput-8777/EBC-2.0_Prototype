"use client";

import { Container } from "@/shared/ui/Container";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import { useEffect, useRef } from "react";
import { siteContent } from "@/constants/siteContent";

export function VisionSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches && videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <section className="py-32 md:py-48 lg:py-8 md:py-10 bg-primary text-white overflow-hidden relative">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/Hero.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085844_21a8f4b3-dea5-4ede-be16-d53f6973bb14.mp4"
      />
      <div className="absolute inset-0 z-0 bg-primary/70 dark:bg-black/40 backdrop-blur-[2px]" />

      <Container>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <MotionWrapper variant="slideUp" delay={0.2}>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.1] mb-8 [word-spacing:0.2em]">
              {siteContent.vision.quote}
            </h2>
          </MotionWrapper>
        </div>
      </Container>
    </section>
  );
}
