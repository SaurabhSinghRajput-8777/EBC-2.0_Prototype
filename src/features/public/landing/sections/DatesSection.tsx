import { Marquee } from "@/shared/animations/Marquee";
import { siteContent } from "@/constants/siteContent";

export function DatesSection() {
  return (
    <section className="bg-primary border-y border-primary/10 py-10 md:py-12 overflow-hidden relative z-20">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />

      <Marquee speed="slow" className="py-2">
            {siteContent.dates.items.map((stat, i) => (
              <div key={i} className="flex items-center mx-10 shrink-0 group">
                <span className="text-4xl md:text-5xl lg:text-6xl font-serif text-accent tracking-tight whitespace-nowrap tabular-nums">
                  {stat.value}
                </span>
                <div className="ml-6 flex flex-col">
                  <span className="text-base md:text-lg text-white font-semibold leading-tight tracking-wide">
                    {stat.label}
                  </span>
                  <span className="text-sm text-white/60 max-w-[220px] leading-snug mt-1.5 font-light transition-colors group-hover:text-white/80">
                    {stat.description}
                  </span>
                </div>
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent mx-16"></div>
              </div>
            ))}
          </Marquee>
    </section>
  );
}
