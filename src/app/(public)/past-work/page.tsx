import { Container } from "@/shared/ui/Container";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { PublicLayout } from "@/layouts/PublicLayout";
import { generateSeoMetadata } from "@/shared/lib/seo";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import { Badge } from "@/shared/ui/Badge";

export const metadata = generateSeoMetadata({
  title: "Past Work & Projects | SIPL",
  description: "Review the historical projects, healthcare initiatives, and technical innovations pioneered by Sequoia Insilico Private Limited.",
  path: "/past-work"
});

export default function PastWorkPage() {
  return (
    <PublicLayout>
      <div className="pt-32 pb-24 bg-[#F5F8FC]">
        <Container>
          <MotionWrapper variant="slideUp" delay={0.1}>
            <SectionHeading
              title="Institutional Archive"
              subtitle="A legacy of cognitive computing, deep learning, and P4 medicine. Explore the foundational projects that paved the way for LifeBack™."
              align="center"
            />
          </MotionWrapper>

          <div className="mt-20 max-w-5xl mx-auto space-y-12">
            {[
              {
                title: "Retinopathy of Prematurity (ROP) Diagnostics",
                category: "Healthcare Initiative",
                desc: "Developed specialized deep learning architectures to assist ophthalmologists in the early detection and severity grading of ROP in premature infants, demonstrating the viability of AI in critical pediatric screening."
              },
              {
                title: "Grand Challenge Exploration (GCE) - India",
                category: "Research Contribution",
                desc: "Awarded the GCE grant (jointly funded by the Bill & Melinda Gates Foundation, BIRAC, DST, and Government of India) for pioneering work on LifeBack™, recognizing our unique approach to digital phenotyping."
              },
              {
                title: "P4 Medicine Ecosystems",
                category: "Technical Innovation",
                desc: "Engineered interoperable AI systems designed to seamlessly integrate into existing hospital infrastructure, promoting Predictive, Preventive, Personalized, and Participatory (P4) medical delivery."
              },
              {
                title: "Clinical Centre of Excellence (COE) Collaborations",
                category: "Industry Collaboration",
                desc: "Established formal ethical research pipelines with leading Indian hospitals under ICMR guidelines, ensuring all cognitive models are trained on diverse, real-world, highly-validated clinical data."
              }
            ].map((project, i) => (
              <MotionWrapper key={project.title} variant="slideUp" delay={0.2 + (i * 0.1)}>
                <div className="bg-white border border-[#001B65]/10 p-8 md:p-10 rounded-[32px] flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3 shrink-0">
                    <Badge variant="muted" className="mb-4">{project.category}</Badge>
                    <h3 className="text-2xl font-serif text-[#0A0C10]">{project.title}</h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-[#4A5568] text-lg leading-relaxed">{project.desc}</p>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>

          <div className="mt-32 max-w-4xl mx-auto text-center border-t border-[#EDEDED] pt-16">
            <MotionWrapper variant="fadeIn">
              <h3 className="text-3xl font-serif text-[#0A0C10] mb-10">Impact Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: "10+", label: "Years of Research" },
                  { value: "5+", label: "Clinical Partners" },
                  { value: "3", label: "Major Grants" },
                  { value: "Proprietary", label: "AI Architectures" },
                ].map((metric) => (
                  <div key={metric.label}>
                    <div className="text-4xl md:text-5xl font-serif text-[#0A0C10] mb-2">{metric.value}</div>
                    <div className="text-sm font-medium text-[#4A5568] uppercase tracking-wider">{metric.label}</div>
                  </div>
                ))}
              </div>
            </MotionWrapper>
          </div>
        </Container>
      </div>
    </PublicLayout>
  );
}
