import { Container } from "@/shared/ui/Container";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { siteContent } from "@/constants/siteContent";
import Image from "next/image";
import { Map } from "lucide-react";

export function StructureSection() {
  return (
    <section id="bootcamp" className="py-20 sm:py-24 md:py-32 lg:py-8 md:py-10 bg-slate-50/50 text-foreground border-y border-slate-200/60 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8 flex flex-col items-center">
          <MotionWrapper variant="slideUp" className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm mb-6">
              <Map className="w-4 h-4 text-primary" />
              <span>The Journey</span>
            </div>
            <SectionHeading
              title={siteContent.structure.title}
              subtitle={siteContent.structure.description}
              titleClassName="text-slate-900"
              className="!mb-0"
            />
          </MotionWrapper>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 lg:gap-8 relative">
          {siteContent.structure.steps.map((item, index) => (
            <MotionWrapper key={index} variant="slideUp" delay={0.1 * (index + 1)} className="h-full">
              <div className="group relative bg-white rounded-[24px] sm:rounded-[32px] p-2 sm:p-2.5 border border-slate-200/60 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full">

                {/* Large Background Number */}
                <div className="absolute -top-6 -right-2 sm:-right-4 text-[120px] sm:text-[160px] font-black text-slate-50 z-0 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-translate-x-4">
                  0{index + 1}
                </div>

                {/* Image Container with Inner Padding */}
                <div className="relative w-full h-56 sm:h-64 lg:h-72 rounded-[16px] sm:rounded-[24px] overflow-hidden z-10 mb-6 sm:mb-8">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

                  {/* Phase Badge */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase border border-white/30 shadow-lg">
                    Phase 0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="px-4 sm:px-6 pb-6 sm:pb-8 relative z-10 flex-1 flex flex-col">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 font-bold text-slate-900 group-hover:text-primary transition-colors duration-300 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed flex-1 font-medium">
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
