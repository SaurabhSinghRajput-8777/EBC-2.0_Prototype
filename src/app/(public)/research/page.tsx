import { Container } from "@/shared/ui/Container";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { PublicLayout } from "@/layouts/PublicLayout";
import { generateSeoMetadata } from "@/shared/lib/seo";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";

export const metadata = generateSeoMetadata({
  title: "Clinical Research & Validation | LifeBack™",
  description: "Explore the scientific foundation, clinical validation, and multimodal biomarker research powering the LifeBack™ platform.",
  path: "/research"
});

export default function ResearchPage() {
  return (
    <PublicLayout>
      <div className="pt-32 pb-24 bg-[#F5F8FC]">
        <Container>
          <MotionWrapper variant="slideUp" delay={0.1}>
            <SectionHeading
              title="Scientific Credibility"
              subtitle="LifeBack™ is built on a foundation of rigorous clinical validation, exploring multimodal biomarkers to predict and identify depressive states."
              align="center"
            />
          </MotionWrapper>

          <div className="mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Behavioral Analysis",
                desc: "Tracking subtle shifts in user interaction patterns, response latency, and cognitive load during structured assessments to map behavioral phenotypes."
              },
              {
                title: "Voice Biomarkers",
                desc: "Analyzing acoustic features including prosody, pitch variance, and spectral properties, which are heavily correlated with psychomotor retardation in major depressive disorder."
              },
              {
                title: "Genomics Research",
                desc: "Pioneering the intersection of genomic predispositions and phenotypic expression to develop personalized psychiatric risk stratification models."
              },
              {
                title: "Clinical Validation",
                desc: "Ongoing institutional partnerships to validate our predictive algorithms against established clinical benchmarks such as the PHQ-9 and Hamilton Depression Rating Scale."
              }
            ].map((area, i) => (
              <MotionWrapper key={area.title} variant="slideUp" delay={0.2 + (i * 0.1)}>
                <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-sm border border-[#EDEDED] h-full">
                  <h3 className="text-2xl font-serif text-[#0A0C10] mb-4">{area.title}</h3>
                  <p className="text-[#4A5568] leading-relaxed">{area.desc}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>

          <div className="mt-32 max-w-4xl mx-auto bg-[#001B65] text-white p-12 rounded-[32px]">
            <MotionWrapper variant="fadeIn">
              <h3 className="text-3xl font-serif mb-8 text-center">Research Roadmap</h3>
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-6 border-b border-white/10 pb-8">
                  <div className="md:w-32 font-mono text-white/50 shrink-0">Phase 1</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Multimodal Signal Baseline</h4>
                    <p className="text-white/70">Establishing robust baselines for combined voice and behavioral telemetry in neurotypical and diagnosed populations.</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 border-b border-white/10 pb-8">
                  <div className="md:w-32 font-mono text-[#8931C4] shrink-0">Phase 2</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Genomic Integration (Current)</h4>
                    <p className="text-white/70">Correlating established genetic markers for psychiatric susceptibility with observed digital phenotypes.</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-32 font-mono text-white/50 shrink-0">Phase 3</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Longitudinal Predictive Modeling</h4>
                    <p className="text-white/70">Deploying temporal AI models to predict depressive relapses before clinical symptoms manifest.</p>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </Container>
      </div>
    </PublicLayout>
  );
}
