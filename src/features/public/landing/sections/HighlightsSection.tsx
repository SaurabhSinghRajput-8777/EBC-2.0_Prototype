import { Container } from "@/shared/ui/Container";
import { Card } from "@/shared/ui/Card";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { Users, Presentation, Building, Globe, Zap, Rocket } from "lucide-react";
import { Marquee } from "@/shared/animations/Marquee";
import { siteContent } from "@/constants/siteContent";

const icons = [Users, Presentation, Building, Globe, Zap, Rocket];

export function HighlightsSection() {
  return (
    <section id="highlights" className="relative py-24 md:py-32 bg-surface overflow-hidden">
      <Container className="relative z-10 mb-16">
        <SectionHeading
          title={siteContent.highlights.title}
          subtitle={siteContent.highlights.description}
        />
      </Container>

      {/* Full width marquee container */}
      <div className="w-full pb-8">
        <Marquee speed="normal" className="py-4">
          {siteContent.highlights.items.map((card, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <div key={i} className="w-[85vw] md:w-[420px] shrink-0 mx-4 md:mx-6 h-full py-4">
                <Card className="h-full bg-gradient-to-br from-white to-[#F8FAFC] border border-primary/5 hover:border-primary/15 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(0,74,153,0.15)] hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden rounded-3xl">

                  {/* Decorative Top Accent Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />

                  {/* Huge Watermark Number */}
                  <div className="absolute -bottom-8 -right-4 text-[8rem] font-serif font-black text-primary/[0.03] select-none pointer-events-none group-hover:text-primary/[0.05] transition-colors duration-500 tracking-tighter">
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  <div className="flex flex-col h-full relative z-10 px-6 py-5 md:px-8 md:py-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 shrink-0 rounded-xl bg-white shadow-sm border border-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors duration-300">
                        {card.title}
                      </h3>
                    </div>

                    <p className="text-secondary-text leading-normal text-[15px] font-light">
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
