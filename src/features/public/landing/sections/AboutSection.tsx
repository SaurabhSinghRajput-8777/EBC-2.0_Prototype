import { Button } from "@/shared/ui/Button";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import Link from "next/link";
import { Container } from "@/shared/ui/Container";
import Image from "next/image";
import { siteContent } from "@/constants/siteContent";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-background overflow-hidden border-y border-primary/5">
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Side: Narrative Content */}
          <div className="flex flex-col items-start text-left max-w-2xl relative z-20">
            
            <MotionWrapper variant="slideUp" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-[1.1] tracking-tight">
                {siteContent.about.goal.title}
              </h2>
            </MotionWrapper>
            
            <MotionWrapper variant="slideUp" delay={0.3}>
              <p className="text-lg md:text-xl text-secondary-text mb-12 leading-relaxed font-body font-light">
                {siteContent.about.goal.description}
              </p>
            </MotionWrapper>

            <div className="w-full space-y-6">
              <MotionWrapper variant="slideUp" delay={0.4}>
                <div className="p-8 md:p-8 rounded-[20px] bg-surface border border-primary/10 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow duration-500">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary/80"></div>
                  <h3 className="text-xl font-serif text-primary mb-3">
                    {siteContent.about.audience.title}
                  </h3>
                  <p className="text-[15px] md:text-base text-secondary-text leading-relaxed font-body">
                    {siteContent.about.audience.description}
                  </p>
                </div>
              </MotionWrapper>

              <MotionWrapper variant="slideUp" delay={0.5}>
                <div className="p-8 md:p-8 rounded-[20px] bg-surface border border-accent/10 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow duration-500">
                  <div className="absolute top-0 left-0 w-1 h-full bg-accent/80"></div>
                  <h3 className="text-xl font-serif text-accent mb-3">
                    {siteContent.about.future.title}
                  </h3>
                  <p className="text-[15px] md:text-base text-secondary-text leading-relaxed font-body">
                    {siteContent.about.future.description}
                  </p>
                </div>
              </MotionWrapper>
            </div>
            
            <MotionWrapper variant="slideUp" delay={0.6} className="mt-12">
              <Link href="/founder-dating" passHref>
                <Button size="lg" className="group relative overflow-hidden bg-primary text-white hover:bg-primary/90 px-10 py-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <span className="flex items-center gap-3 text-sm font-medium">
                    Find Co-Founders
                    <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Button>
              </Link>
            </MotionWrapper>
          </div>

          {/* Right Side: Image Placeholder */}
          <div className="relative w-full h-[500px] lg:h-[700px] flex items-center justify-center rounded-[32px] overflow-hidden shadow-lg border border-primary/10">
            <Image 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
              alt="Startup team collaborating" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
