import { Button } from "@/shared/ui/Button";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import Link from "next/link";
import { Container } from "@/shared/ui/Container";
import Image from "next/image";
import { siteContent } from "@/constants/siteContent";
import { Target, Users, Rocket, ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-8 md:py-10 bg-slate-50/50 overflow-hidden border-y border-slate-200/50">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Side: Narrative Content */}
          <div className="flex flex-col items-start text-left relative z-20 w-full pr-0 lg:pr-4">
            
            <MotionWrapper variant="slideUp" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm mb-6">
                <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
                <span>The Objective</span>
              </div>
            </MotionWrapper>

            <MotionWrapper variant="slideUp" delay={0.2}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                {siteContent.about.goal.title}
              </h2>
            </MotionWrapper>
            
            <MotionWrapper variant="slideUp" delay={0.3}>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 sm:mb-10 leading-relaxed font-medium">
                {siteContent.about.goal.description}
              </p>
            </MotionWrapper>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Audience Card */}
              <MotionWrapper variant="slideUp" delay={0.4} className="h-full">
                <div className="h-full p-5 sm:p-8 rounded-[20px] sm:rounded-[24px] bg-slate-50 border border-slate-200/60 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 group flex flex-col">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">
                    {siteContent.about.audience.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed flex-1">
                    {siteContent.about.audience.description}
                  </p>
                </div>
              </MotionWrapper>

              {/* Future Card */}
              <MotionWrapper variant="slideUp" delay={0.5} className="h-full">
                <div className="h-full p-5 sm:p-8 rounded-[20px] sm:rounded-[24px] bg-slate-50 border border-slate-200/60 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300 group flex flex-col">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">
                    {siteContent.about.future.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed flex-1">
                    {siteContent.about.future.description}
                  </p>
                </div>
              </MotionWrapper>
            </div>
            

          </div>

          {/* Right Side: Bento Image Canvas */}
          <div className="w-full h-full relative min-h-[350px] lg:min-h-0 rounded-[24px] sm:rounded-[40px] overflow-hidden shadow-2xl border-[6px] sm:border-8 border-slate-50 group">
            <MotionWrapper variant="slideUp" delay={0.4} className="absolute inset-0 w-full h-full">
              <Image 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
                alt="Startup team collaborating" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 via-transparent to-transparent mix-blend-multiply"></div>
              
              {/* Floating overlay card on the image */}
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-5 sm:p-8 rounded-[24px] shadow-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shrink-0">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Incubation at Bennett Hatchery</h4>
                    <p className="text-white/80 text-sm mt-1">The ultimate destination for the best pitches.</p>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>

        </div>
      </Container>
    </section>
  );
}
