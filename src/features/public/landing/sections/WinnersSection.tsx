import { Container } from "@/shared/ui/Container";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import Image from "next/image";
import { siteContent } from "@/constants/siteContent";
import { Trophy } from "lucide-react";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";

export function WinnersSection() {
  const { title, description, images, teams } = siteContent.winners;

  return (
    <section id="winners" className="py-12 md:py-16 lg:py-12 bg-surface border-y border-primary/10 dark:border-white/5 relative overflow-hidden">

      {/* Subtle background abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <Container className="relative z-10 mb-6 md:mb-8">
        <MotionWrapper variant="slideUp" className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-background border border-primary/10 dark:border-white/10 text-foreground text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm mb-3">
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
            titleClassName="text-foreground !mb-2 md:!mb-3"
            className="!mb-0"
          />
        </MotionWrapper>
      </Container>

      <Container className="relative z-10">
        <div className="flex flex-col gap-6 lg:gap-8">

          {/* Top Row: Landscape Images (Swipeable on Mobile, Grid on Desktop) */}
          <div className="flex md:grid md:grid-cols-2 gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
            <MotionWrapper variant="slideRight" className="relative min-w-[85vw] md:min-w-0 w-full aspect-video rounded-[20px] md:rounded-[24px] overflow-hidden border border-primary/10 dark:border-white/10 shadow-md group snap-center shrink-0">
              <Image
                src={images[0] || ""}
                alt="EBC 1.0 Winners 1"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 85vw, 50vw"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </MotionWrapper>

            <MotionWrapper variant="slideLeft" className="relative min-w-[85vw] md:min-w-0 w-full aspect-video rounded-[20px] md:rounded-[24px] overflow-hidden border border-primary/10 dark:border-white/10 shadow-md group snap-center shrink-0">
              <Image
                src={images[1] || ""}
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
                    className="relative flex flex-col items-start justify-end p-3 sm:p-4 rounded-[16px] sm:rounded-[20px] bg-background border border-primary/10 dark:border-white/10 shadow-sm hover:shadow-2xl transition-all duration-500 group hover:-translate-y-1.5 cursor-pointer overflow-hidden min-h-[85px] sm:min-h-[100px] snap-center shrink-0"
                  >
                    {/* Decorative Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-100 pointer-events-none z-0"></div>

                    {/* Background Watermark Number */}
                    <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 text-[70px] sm:text-[110px] font-black text-primary/5 dark:text-primary/10 opacity-30 pointer-events-none select-none leading-none tracking-tighter z-0">
                      {number}
                    </div>

                    {/* Top structural gradient accent line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-100 z-10" />

                    <div className="relative z-10 flex flex-col w-full text-left mt-auto">
                      <div className="flex items-center gap-1.5 mb-0.5 sm:mb-1">
                        <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent shrink-0" />
                        <span className="text-[14px] sm:text-lg font-bold text-primary line-clamp-1">
                          {team.startup}
                        </span>
                      </div>
                      <span className="text-[11px] sm:text-sm font-medium text-foreground/80 line-clamp-1">
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
