import { Container } from "@/shared/ui/Container";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { siteContent } from "@/constants/siteContent";
import { cn } from "@/shared/lib/utils";
import Image from "next/image";

function TeamCard({ name, position, description, image }: { name: string; position: string; description: string; image?: string }) {
  // Fallback placeholder if no image is provided
  const avatarUrl = image || `https://i.pravatar.cc/150?u=${encodeURIComponent(name)}`;
  
  return (
    <div className="group w-full h-[200px] md:h-[220px] [perspective:1000px] cursor-pointer">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* Front of Card */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-[#0F172A] border border-white/10 rounded-2xl p-3 md:p-6 flex flex-col items-center justify-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border border-white/10 mb-2 md:mb-4 relative shrink-0 bg-[#1E293B]">
            <Image src={avatarUrl} alt={name} fill className="object-cover" unoptimized />
          </div>
          <h3 className="text-white font-semibold text-xs sm:text-sm md:text-base mb-1">{name}</h3>
          <p className="text-[#94A3B8] font-medium text-[9px] sm:text-[10px] md:text-[11px] leading-snug uppercase tracking-wider">{position}</p>
        </div>

        {/* Back of Card */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#0F172A] border border-white/10 rounded-2xl p-3 sm:p-4 md:p-5 flex flex-col items-center justify-center text-center shadow-[0_20px_40px_rgb(0,0,0,0.2)] overflow-hidden">
          <h3 className="text-white font-bold text-xs sm:text-sm md:text-base mb-2 pb-2 md:mb-3 md:pb-3 border-b border-white/10 w-full">{name}</h3>
          <p className="text-[#CBD5E1] text-[10px] sm:text-xs md:text-sm leading-relaxed line-clamp-4">{description}</p>
        </div>
        
      </div>
    </div>
  );
}

export function TeamSection() {
  return (
    <section id="team" className="relative py-16 md:py-8 md:py-10 bg-[#003366] text-white overflow-hidden border-t border-[#003366]/10">
      
      {/* Square Mesh Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <Container className="relative z-10">
        <SectionHeading
          title="Team & Experts"
          subtitle={siteContent.team.title}
          className="!mb-6 md:!mb-8 lg:!mb-10"
          titleClassName="text-white"
          subtitleClassName="text-white/90"
        />

        <div className="flex flex-col gap-6 md:gap-8">
          
          {/* Tier 1: Chief Mentor */}
          <MotionWrapper variant="slideUp" delay={0.1}>
            <div className="flex flex-col items-center">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-6">Chief Mentor</h4>
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
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-6">Core Team (CIE)</h4>
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
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-6">Supporting Team (E-Cell)</h4>
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
