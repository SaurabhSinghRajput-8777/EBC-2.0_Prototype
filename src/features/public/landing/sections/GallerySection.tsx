import { Container } from "@/shared/ui/Container";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import Image from "next/image";
import { siteContent } from "@/constants/siteContent";
import { Marquee } from "@/shared/animations/Marquee";
import { Camera } from "lucide-react";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";

export function GallerySection() {
  const images = siteContent.glimpses.images;
  const midPoint = Math.ceil(images.length / 2);
  const row1Images = images.slice(0, midPoint);
  const row2Images = images.slice(midPoint);

  return (
    <section id="gallery" className="relative py-12 md:py-16 lg:py-12 bg-surface overflow-hidden border-y border-primary/10 dark:border-white/5">
      
      <Container className="relative z-10 mb-0 md:mb-2 flex flex-col items-center">
        <MotionWrapper variant="slideUp" className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-background border border-primary/10 dark:border-white/10 text-foreground text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm mb-3">
            <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            <span>The Gallery</span>
          </div>
          <SectionHeading
            title={
              <>
                Glimpses of EBC <span className="inline-block align-middle ml-2 px-4 py-1.5 sm:px-5 sm:py-2 bg-[#eade18] text-slate-900 rounded-lg sm:rounded-xl text-[0.7em] sm:text-[0.8em] font-sans font-black tracking-widest shadow-[0_8px_20px_rgba(234,222,24,0.4)] border border-[#eade18]/50 transform -translate-y-1 sm:-translate-y-2 -rotate-3">1.0</span>
              </>
            }
            subtitle={siteContent.glimpses.description}
            titleClassName="text-foreground !mb-2 md:!mb-3"
            className="!mb-0"
          />
        </MotionWrapper>
      </Container>

      {/* Marquee Row 1 */}
      <div className="w-full pb-4 sm:pb-6 overflow-hidden">
        <Marquee speed="slow" direction="left" className="py-2" showArrows={false}>
          {row1Images.map((src, index) => (
            <div key={index} className="relative w-[70vw] sm:w-[320px] md:w-[400px] h-[200px] sm:h-[240px] md:h-[280px] shrink-0 mx-2 sm:mx-3 md:mx-4 rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-md border border-primary/10 dark:border-white/10 group cursor-grab active:cursor-grabbing">
              <Image
                src={src}
                alt={`Glimpse ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 70vw, (max-width: 768px) 320px, 400px"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Marquee Row 2 */}
      <div className="w-full pb-0 md:pb-2 overflow-hidden">
        <Marquee speed="slow" direction="right" className="py-2" showArrows={false}>
          {row2Images.map((src, index) => (
            <div key={index} className="relative w-[70vw] sm:w-[320px] md:w-[400px] h-[200px] sm:h-[240px] md:h-[280px] shrink-0 mx-2 sm:mx-3 md:mx-4 rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-md border border-primary/10 dark:border-white/10 group cursor-grab active:cursor-grabbing">
              <Image
                src={src}
                alt={`Glimpse Row 2 ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 70vw, (max-width: 768px) 320px, 400px"
              />
            </div>
          ))}
        </Marquee>
      </div>
      
    </section>
  );
}
