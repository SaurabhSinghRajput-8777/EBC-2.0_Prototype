import { Container } from "@/shared/ui/Container";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import Image from "next/image";
import { siteContent } from "@/constants/siteContent";
import { Marquee } from "@/shared/animations/Marquee";

export function GallerySection() {
  return (
    <section className="py-24 md:py-32 bg-background border-y border-primary/5 overflow-hidden">
      <Container className="mb-16">
        <SectionHeading
          title={siteContent.glimpses.title}
          subtitle={siteContent.glimpses.description}
        />
      </Container>

      <div className="w-full pb-8">
        <Marquee speed="slow" className="py-4">
          {siteContent.glimpses.images.map((src, index) => (
            <div key={index} className="relative w-[65vw] sm:w-[300px] md:w-[350px] h-[220px] md:h-[260px] shrink-0 mx-3 md:mx-4 rounded-3xl overflow-hidden shadow-sm border border-primary/10 group cursor-pointer">
              <Image
                src={src}
                alt={`Glimpse ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 group-hover:-rotate-1 transition-all duration-700 ease-in-out"
                sizes="(max-width: 640px) 70vw, (max-width: 768px) 400px, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
