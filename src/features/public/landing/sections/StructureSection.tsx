import { Container } from "@/shared/ui/Container";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { siteContent } from "@/constants/siteContent";
import Image from "next/image";
import { Map } from "lucide-react";

export function StructureSection() {
  return (
    <section id="bootcamp" className="py-12 md:py-16 lg:py-12 bg-surface border-y border-primary/10 dark:border-white/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8 flex flex-col items-center">
          <MotionWrapper variant="slideUp" className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-primary/10 dark:border-white/10 text-foreground text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm mb-3">
              <Map className="w-4 h-4 text-primary" />
              <span>The Journey</span>
            </div>
            <SectionHeading
              title={siteContent.structure.title}
              subtitle={siteContent.structure.description}
              titleClassName="text-foreground !mb-2 md:!mb-3"
              className="!mb-0"
            />
          </MotionWrapper>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative">
          {siteContent.structure.steps.map((item, index) => (
            <MotionWrapper key={index} variant="slideUp" delay={0.1 * (index + 1)} className="h-full">
              <div className="group relative bg-background rounded-[20px] sm:rounded-[24px] p-2 border border-primary/10 dark:border-white/10 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full">

                {/* Large Background Number */}
                <div className="absolute -top-4 -right-2 text-[100px] sm:text-[120px] font-black text-slate-50 dark:text-white/5 z-0 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-translate-x-2">
                  0{index + 1}
                </div>

                {/* Image Container with Inner Padding */}
                <div className="relative w-full h-40 sm:h-48 lg:h-40 rounded-[14px] sm:rounded-[18px] overflow-hidden z-10 mb-4 sm:mb-6">
                  <Image priority                     src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

                  {/* Phase Badge */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase border border-white/30 shadow-lg">
                    Phase 0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="px-3 sm:px-4 pb-4 sm:pb-6 relative z-10 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl lg:text-lg mb-2 sm:mb-3 font-bold text-foreground group-hover:text-primary transition-colors duration-300 tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-secondary-text text-xs sm:text-sm leading-relaxed flex-1 font-medium text-justify">
                    {item.description}
                  </p>
                </div>

              </div>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </section>
  );
}
