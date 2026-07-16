import { Container } from "@/shared/ui/Container";
import { Card } from "@/shared/ui/Card";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { Users, Presentation, Building, Globe, Zap, Rocket, Sparkles } from "lucide-react";
import { Marquee } from "@/shared/animations/Marquee";
import { siteContent } from "@/constants/siteContent";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";

const icons = [Users, Presentation, Building, Globe, Zap, Rocket];

const cardColors = [
  {
    border: "border-blue-500/50",
    bgHover: "bg-blue-500",
    textHover: "text-blue-500",
    glow: "from-blue-500/10",
    iconText: "text-white",
    borderGlow: "border-blue-500"
  },
  {
    border: "border-amber-500/50",
    bgHover: "bg-amber-500",
    textHover: "text-amber-500",
    glow: "from-amber-500/10",
    iconText: "text-white",
    borderGlow: "border-amber-500"
  },
  {
    border: "border-emerald-500/50",
    bgHover: "bg-emerald-500",
    textHover: "text-emerald-500",
    glow: "from-emerald-500/10",
    iconText: "text-white",
    borderGlow: "border-emerald-500"
  },
  {
    border: "border-purple-500/50",
    bgHover: "bg-purple-500",
    textHover: "text-purple-500",
    glow: "from-purple-500/10",
    iconText: "text-white",
    borderGlow: "border-purple-500"
  },
  {
    border: "border-rose-500/50",
    bgHover: "bg-rose-500",
    textHover: "text-rose-500",
    glow: "from-rose-500/10",
    iconText: "text-white",
    borderGlow: "border-rose-500"
  },
  {
    border: "border-cyan-500/50",
    bgHover: "bg-cyan-500",
    textHover: "text-cyan-500",
    glow: "from-cyan-500/10",
    iconText: "text-white",
    borderGlow: "border-cyan-500"
  }
];

export function HighlightsSection() {
  return (
    <section id="highlights" className="relative pt-12 pb-6 md:pt-16 md:pb-8 lg:pt-12 lg:pb-6 bg-surface overflow-hidden border-y border-primary/10 dark:border-white/5">
      
      <Container className="relative z-10 mb-0 md:mb-2 flex flex-col items-center">
        <MotionWrapper variant="slideUp" className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-background border border-primary/10 dark:border-white/10 text-foreground text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
            <span>Why Join Us</span>
          </div>
          <div className="flex flex-col items-center text-center w-full max-w-none px-4">
            <h2 className="font-serif font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-2 md:mb-3 leading-tight text-foreground">
              {siteContent.highlights.title}
            </h2>
            <p className="text-sm sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-secondary-text">
              {siteContent.highlights.description}
            </p>
          </div>
        </MotionWrapper>
      </Container>

      {/* Full width marquee container */}
      <div className="w-full pb-2 md:pb-4 overflow-hidden">
        <Marquee speed="normal" className="py-2" showArrows={false}>
          {siteContent.highlights.items.map((card, i) => {
            const Icon = icons[i % icons.length]!;
            const color = cardColors[i % cardColors.length]!;
            return (
              <div key={i} className="w-[85vw] sm:w-[320px] md:w-[400px] shrink-0 mx-3 md:mx-5 h-full py-2">
                <Card className={`h-full bg-background border shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden rounded-[24px] ${color.border}`}>

                  {/* Decorative Inner Glow on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${color.glow} via-transparent to-transparent opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                  {/* Huge Watermark Number */}
                  <div className="absolute -bottom-6 -right-4 text-[100px] md:text-[120px] font-black text-slate-100 dark:text-white/5 select-none pointer-events-none group-hover:text-slate-200/80 dark:group-hover:text-white/10 group-hover:-translate-x-2 transition-all duration-500 tracking-tighter">
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  <div className="flex flex-col h-full relative z-10 px-3 py-3 md:px-4 md:py-4">
                    <div className="flex items-start md:items-center gap-2 md:gap-3 mb-1.5 md:mb-2">
                      <div className={`w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-all duration-500 ${color.iconText} ${color.bgHover} border ${color.borderGlow}`}>
                        <Icon className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2} />
                      </div>
                      <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 leading-tight ${color.textHover}`}>
                        {card.title}
                      </h3>
                    </div>

                    <p className="text-secondary-text text-justify leading-relaxed text-sm md:text-base font-medium flex-1">
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
