import { Container } from "@/shared/ui/Container";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { PublicLayout } from "@/layouts/PublicLayout";
import { generateSeoMetadata } from "@/shared/lib/seo";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";

export const metadata = generateSeoMetadata({
  title: "About LifeBack™ & SIPL | Healthcare Technology",
  description: "Learn about SIPL and LifeBack™'s mission to support early depression detection through AI-assisted behavioral screening.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <PublicLayout>
      <div className="pt-32 pb-24 bg-[#F5F8FC]">
        <Container>
          <MotionWrapper variant="slideUp" delay={0.1}>
            <SectionHeading
              title="About Our Institution"
              subtitle="Sequoia Insilico Private Limited (SIPL) is a cognitive healthcare company dedicated to enhancing healthcare delivery through deep learning and artificial intelligence."
              align="center"
            />
          </MotionWrapper>

          <div className="grid md:grid-cols-2 gap-16 mt-20 max-w-5xl mx-auto">
            <MotionWrapper variant="slideUp" delay={0.2}>
              <h3 className="text-3xl font-serif text-[#0A0C10] mb-6">Our Mission</h3>
              <p className="text-[#4A5568] text-lg leading-relaxed">
                To bridge the gap between behavioral signals and clinical diagnosis, providing a scalable, non-invasive platform that surfaces early indicators of depression before they escalate into crises.
              </p>
            </MotionWrapper>

            <MotionWrapper variant="slideUp" delay={0.3}>
              <h3 className="text-3xl font-serif text-[#0A0C10] mb-6">Our Vision</h3>
              <p className="text-[#4A5568] text-lg leading-relaxed">
                A world where no one goes undetected. We envision a future where P4 medicine (predictive, preventive, personalized, and participatory) is accessible to all, powered by responsible AI.
              </p>
            </MotionWrapper>
          </div>

          <div className="mt-32 max-w-5xl mx-auto">
            <MotionWrapper variant="fadeIn" delay={0.4}>
              <h3 className="text-3xl font-serif text-[#0A0C10] mb-12 text-center">Core Values</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Research First", desc: "Rigorous scientific validation drives everything we build." },
                  { title: "Privacy First", desc: "Strict adherence to global healthcare data protection standards." },
                  { title: "Clinical Responsibility", desc: "We build tools to assist clinicians, not replace them." },
                  { title: "Accessibility", desc: "Scalable technology designed to reach underserved populations." },
                  { title: "Innovation", desc: "Pioneering the intersection of genomics and behavioral health." },
                ].map((value) => (
                  <div key={value.title} className="p-8 bg-white rounded-[24px] border border-[#001B65]/10">
                    <h4 className="text-xl font-semibold text-[#0A0C10] mb-3">{value.title}</h4>
                    <p className="text-[#4A5568]">{value.desc}</p>
                  </div>
                ))}
              </div>
            </MotionWrapper>
          </div>

          <div className="mt-32 max-w-4xl mx-auto text-center">
            <MotionWrapper variant="slideUp" delay={0.5}>
              <h3 className="text-3xl font-serif text-[#0A0C10] mb-6">Research Philosophy</h3>
              <p className="text-2xl text-[#4A5568] leading-relaxed font-serif italic">
                &quot;AI assists. Humans decide.&quot;
              </p>
              <p className="mt-6 text-[#4A5568] text-lg leading-relaxed max-w-2xl mx-auto">
                Our architecture is strictly Human-in-the-Loop. LifeBack™ processes complex multimodal signals—voice, video, and behavioral patterns—to surface actionable insights, supporting clinical professionals with more structured evidence.
              </p>
            </MotionWrapper>
          </div>
        </Container>
      </div>
    </PublicLayout>
  );
}
