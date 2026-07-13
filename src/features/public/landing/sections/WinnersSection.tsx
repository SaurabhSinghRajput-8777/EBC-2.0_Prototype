import { Container } from "@/shared/ui/Container";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import Image from "next/image";
import { siteContent } from "@/constants/siteContent";
import { Trophy } from "lucide-react";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";

export function WinnersSection() {
  const { title, description, images, teams } = siteContent.winners;

  return (
    <section id="winners" className="py-20 md:py-32 bg-gradient-to-br from-orange-50/40 via-white to-amber-50/30 border-y border-slate-200/50 relative overflow-hidden">

      {/* Subtle background abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <Container className="relative z-10 mb-12 md:mb-16">
        <MotionWrapper variant="slideUp" className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-slate-200/60 text-slate-700 text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm mb-6">
            <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            <span>Hall of Fame</span>
          </div>
          <SectionHeading
            title={
              <>
                Past Winners of EBC <span className="inline-block align-middle ml-2 px-4 py-1.5 sm:px-5 sm:py-2 bg-[#eade18] text-slate-900 rounded-lg sm:rounded-xl text-[0.7em] sm:text-[0.8em] font-sans font-black tracking-widest shadow-[0_8px_20px_rgba(234,222,24,0.4)] border border-[#eade18]/50 transform -translate-y-1 sm:-translate-y-2 -rotate-3">1.0</span>
              </>
            }
            subtitle={description}
            titleClassName="text-slate-900"
            className="!mb-0"
          />
        </MotionWrapper>
      </Container>

      <Container className="relative z-10">
        <div className="flex flex-col gap-8 lg:gap-12">

          {/* Top Row: Landscape Images (Swipeable on Mobile, Grid on Desktop) */}
          <div className="flex md:grid md:grid-cols-2 gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
            <MotionWrapper variant="slideRight" className="relative min-w-[85vw] md:min-w-0 w-full aspect-video rounded-[20px] md:rounded-[24px] overflow-hidden border border-slate-200/80 shadow-md group snap-center shrink-0">
              <Image
                src={images[0]}
                alt="EBC 1.0 Winners 1"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 85vw, 50vw"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </MotionWrapper>

            <MotionWrapper variant="slideLeft" className="relative min-w-[85vw] md:min-w-0 w-full aspect-video rounded-[20px] md:rounded-[24px] overflow-hidden border border-slate-200/80 shadow-md group snap-center shrink-0">
              <Image
                src={images[1]}
                alt="EBC 1.0 Winners 2"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 85vw, 50vw"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </MotionWrapper>
          </div>

          {/* Bottom Row: 5-Column Teams Grid (Swipeable 2-Row Carousel on Mobile) */}
          <MotionWrapper variant="slideUp" className="w-full">
            <div className="grid grid-rows-2 grid-flow-col lg:grid-flow-row lg:grid-cols-5 auto-cols-[75vw] sm:auto-cols-[300px] gap-3 sm:gap-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none pb-6 lg:pb-0 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
              {teams.map((team, idx) => {
                const number = String(idx + 1).padStart(2, '0');

                return (
                  <div
                    key={idx}
                    className="relative flex flex-col items-start justify-end p-4 sm:p-6 rounded-[16px] sm:rounded-[20px] bg-white border border-primary/30 hover:border-primary/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgb(0,0,0,0.08)] transition-all duration-500 group hover:-translate-y-1 cursor-pointer overflow-hidden min-h-[105px] sm:min-h-[140px] snap-center shrink-0"
                  >
                    {/* Background Watermark Number */}
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 text-[54px] sm:text-[90px] font-black text-slate-50 group-hover:text-primary/[0.03] transition-colors duration-700 pointer-events-none select-none leading-none tracking-tighter z-0">
                      {number}
                    </div>

                    {/* Left structural accent line on hover */}
                    <div className="absolute left-0 bottom-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500 opacity-0 group-hover:opacity-100 z-10" />

                    <div className="relative z-10 flex flex-col w-full text-left mt-auto">
                      <span className="text-[14px] sm:text-lg font-bold text-slate-800 mb-0.5 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                        {team.startup}
                      </span>
                      <span className="text-[11px] sm:text-sm font-medium text-slate-500 line-clamp-1">
                        by {team.founder}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </MotionWrapper>

        </div>
      </Container>
    </section>
  );
}
