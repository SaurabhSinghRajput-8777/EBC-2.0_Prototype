import { Container } from "@/shared/ui/Container";
import { Card } from "@/shared/ui/Card";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { Users, Presentation, Building, Globe, Zap, Rocket, Sparkles } from "lucide-react";
import { Marquee } from "@/shared/animations/Marquee";
import { siteContent } from "@/constants/siteContent";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";

const icons = [Users, Presentation, Building, Globe, Zap, Rocket];

export function HighlightsSection() {
  return (
    <section id="highlights" className="relative py-12 md:py-8 lg:py-10 bg-surface overflow-hidden border-y border-primary/10 dark:border-white/5 flex flex-col justify-center max-h-screen">
      
      <Container className="relative z-10 mb-0 md:mb-2 flex flex-col items-center">
        <MotionWrapper variant="slideUp" className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-background border border-primary/10 dark:border-white/10 text-foreground text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm mb-6">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
            <span>Why Join Us</span>
          </div>
          <div className="flex flex-col items-center text-center w-full max-w-none px-4">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 md:mb-6 leading-tight text-foreground whitespace-nowrap">
              {siteContent.highlights.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-secondary-text">
              {siteContent.highlights.description}
            </p>
          </div>
        </MotionWrapper>
      </Container>

      {/* Full width marquee container */}
      <div className="w-full pb-4 md:pb-6 overflow-hidden">
        <Marquee speed="normal" className="py-4" showArrows={false}>
          {siteContent.highlights.items.map((card, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <div key={i} className="w-[85vw] sm:w-[320px] md:w-[400px] shrink-0 mx-3 md:mx-5 h-full py-2">
                <Card className="h-full bg-background border border-primary/10 dark:border-white/10 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden rounded-[24px]">

                  {/* Decorative Inner Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  {/* Huge Watermark Number */}
                  <div className="absolute -bottom-6 -right-4 text-[100px] md:text-[120px] font-black text-slate-100 dark:text-white/5 select-none pointer-events-none group-hover:text-slate-200/80 dark:group-hover:text-white/10 group-hover:-translate-x-2 transition-all duration-500 tracking-tighter">
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  <div className="flex flex-col h-full relative z-10 px-5 py-5 md:px-6 md:py-6">
                    <div className="flex items-start md:items-center gap-3 mb-3 md:mb-4">
                      <div className="w-12 h-12 shrink-0 rounded-2xl bg-surface border border-primary/10 dark:border-white/10 shadow-sm flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-500">
                        <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                        {card.title}
                      </h3>
                    </div>

                    <p className="text-secondary-text leading-relaxed text-sm md:text-base font-medium flex-1">
                      {card.description}
                    </p>
                  </div>
                </Card>
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}
