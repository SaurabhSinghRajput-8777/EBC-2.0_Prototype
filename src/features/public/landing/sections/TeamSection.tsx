import { Container } from "@/shared/ui/Container";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { siteContent } from "@/constants/siteContent";
import { cn } from "@/shared/lib/utils";
import Image from "next/image";

function TeamCard({ name, position, description, image }: { name: string; position: string; description: string; image?: string }) {
  // Fallback placeholder if no image is provided
  const avatarUrl = image || `https://i.pravatar.cc/300?u=${encodeURIComponent(name)}`;
  
  return (
    <div className="group relative w-full h-[220px] sm:h-[240px] md:h-[280px] rounded-2xl overflow-hidden cursor-pointer border border-primary/10 dark:border-white/10 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-surface">
      {/* Background Image */}
      <Image priority src={avatarUrl} alt={name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
      
      {/* Permanent Gradient Overlay for text readability (Dark to transparent) */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-0" />
      
      {/* Hover Overlay for Description (Glassmorphic) */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-md z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col p-4 md:p-6 text-left">
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 flex flex-col h-full">
          <div className="mb-3 border-b border-primary/10 dark:border-white/10 pb-3 shrink-0">
             <h3 className="text-foreground font-bold text-sm md:text-base leading-tight mb-0.5">{name}</h3>
             <p className="text-accent font-semibold text-[10px] md:text-[11px] uppercase tracking-wider">{position}</p>
          </div>
          <p className="text-secondary-text text-[11px] sm:text-xs md:text-sm leading-relaxed line-clamp-6 text-justify flex-1 overflow-hidden">{description}</p>
        </div>
      </div>

      {/* Default State Content (Name & Position) */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-4 md:p-5 flex flex-col items-start transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
        <h3 className="text-white font-semibold text-sm md:text-base leading-tight mb-1">{name}</h3>
        <p className="text-white/80 font-medium text-[10px] md:text-[11px] tracking-widest uppercase">{position}</p>
      </div>
    </div>
  );
}

export function TeamSection() {
  return (
    <section id="team" className="relative py-12 md:py-16 lg:py-12 bg-surface overflow-hidden border-y border-primary/10 dark:border-white/5">
      
      <Container className="relative z-10">
        <SectionHeading
          title="Team & Experts"
          subtitle={siteContent.team.title}
          className="!mb-2 md:!mb-4 lg:!mb-6"
          titleClassName="text-foreground !mb-2 md:!mb-3"
        />

        <div className="flex flex-col gap-6 md:gap-8">
          
          {/* Tier 1: Chief Mentor */}
          <MotionWrapper variant="slideUp" delay={0.1}>
            <div className="flex flex-col items-center">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-secondary-text/50 mb-6">Chief Mentor</h4>
              <div className="w-full px-4 sm:px-0 sm:w-[320px] md:w-[330px]">
                <TeamCard 
                  name={siteContent.team.chiefMentor.name} 
                  position={siteContent.team.chiefMentor.position} 
                  description={siteContent.team.chiefMentor.description} 
                  image={siteContent.team.chiefMentor.image}
                />
              </div>
            </div>
          </MotionWrapper>

          {/* Tier 2: Core Team */}
          <MotionWrapper variant="slideUp" delay={0.2}>
            <div className="flex flex-col items-center">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-secondary-text/50 mb-6">Core Team (CIE)</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 w-full max-w-5xl mx-auto">
                {siteContent.team.coreTeam.map((member, i, arr) => {
                  const isLastOddMobile = i === arr.length - 1 && arr.length % 2 !== 0;
                  return (
                    <div key={i} className={cn(
                      isLastOddMobile ? "col-span-2 flex justify-center sm:col-span-1 sm:block" : ""
                    )}>
                      <div className={cn("w-full h-full", isLastOddMobile ? "w-[calc(50%-6px)] sm:w-full" : "")}>
                        <TeamCard name={member.name} position={member.position} description={member.description} image={member.image} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </MotionWrapper>

          {/* Tier 3: Supporting Team (Hidden for now as tenure is over) */}
          {/* <MotionWrapper variant="slideUp" delay={0.3}>
            <div className="flex flex-col items-center">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-secondary-text/50 mb-6">Supporting Team (E-Cell)</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 w-full max-w-5xl mx-auto">
                {siteContent.team.supportingTeam.map((member, i, arr) => {
                  const isLastOddMobile = i === arr.length - 1 && arr.length % 2 !== 0;
                  return (
                    <div key={i} className={cn(
                      isLastOddMobile ? "col-span-2 flex justify-center sm:col-span-1 sm:block" : ""
                    )}>
                      <div className={cn("w-full h-full", isLastOddMobile ? "w-[calc(50%-6px)] sm:w-full" : "")}>
                        <TeamCard name={member.name} position={member.position} description={member.description} image={member.image} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </MotionWrapper> */}

        </div>
      </Container>
    </section>
  );
}
