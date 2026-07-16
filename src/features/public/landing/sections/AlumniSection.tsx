"use client";

import { useState, useEffect } from "react";
import { Container } from "@/shared/ui/Container";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import Image from "next/image";
import { siteContent } from "@/constants/siteContent";
import { Card } from "@/shared/ui/Card";

function ImageSlideshow({ images, alt }: { images: string[], alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, [images]);

  return (
    <>
      {images.map((src, idx) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} photo ${idx + 1}`}
          fill
          className={`object-cover transition-all duration-1000 ${
            idx === currentIndex 
              ? "opacity-100 scale-100 group-hover:scale-105" 
              : "opacity-0 scale-105"
          }`}
        />
      ))}
    </>
  );
}

export function AlumniSection() {
  return (
    <section className="relative pt-6 pb-12 md:pt-8 md:pb-16 lg:pt-8 lg:pb-12 bg-surface overflow-hidden border-y border-primary/10 dark:border-white/5">
      <Container>
        <SectionHeading
          title={siteContent.alumni.title}
          subtitle={siteContent.alumni.description}
          className="mb-0 md:mb-2"
          titleClassName="text-foreground !mb-2 md:!mb-3"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {siteContent.alumni.talks.map((talk, index) => (
            <MotionWrapper key={index} variant="slideUp" delay={0.1 * index}>
              <Card className="h-full bg-background border border-primary/10 dark:border-white/10 hover:border-primary/30 hover:shadow-lg transition-all duration-500 group overflow-hidden p-0 flex flex-col cursor-pointer">
                <div className="relative w-full h-64 overflow-hidden">
                  <ImageSlideshow 
                    images={Array.isArray(talk.image) ? talk.image : [talk.image]} 
                    alt={talk.name} 
                  />
                  {/* Reduced vignette opacity for clearer images */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-20"></div>
                </div>
                <div className="p-6 md:p-8 relative z-10 flex-grow flex flex-col bg-background">
                  <div className="mb-6">
                    <h3 className="text-2xl font-serif text-foreground mb-1">{talk.name}</h3>
                    <p className="text-accent font-semibold uppercase tracking-wider text-sm">{talk.startup}</p>
                  </div>
                  <p className="text-secondary-text leading-relaxed font-body">
                    {talk.content}
                  </p>
                </div>
              </Card>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </section>
  );
}
