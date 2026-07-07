import { Container } from "@/shared/ui/Container";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { siteContent } from "@/constants/siteContent";
import Image from "next/image";

export function StructureSection() {
  return (
    <section id="bootcamp" className="py-24 md:py-32 lg:py-40 bg-background text-foreground border-y border-primary/5">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <MotionWrapper variant="slideUp">
            <SectionHeading 
              title={siteContent.structure.title} 
              subtitle={siteContent.structure.description}
              titleClassName="text-primary"
            />
          </MotionWrapper>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {siteContent.structure.steps.map((item, index) => (
            <MotionWrapper key={index} variant="slideUp" delay={0.1 * (index + 1)}>
              <div className="flex flex-col group h-full">
                <div className="relative w-full h-64 md:h-72 mb-6 rounded-2xl overflow-hidden shadow-sm border border-primary/10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl mb-3 font-serif text-primary">
                  {item.title}
                </h3>
                <p className="text-secondary-text text-base leading-relaxed">{item.description}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </section>
  );
}
