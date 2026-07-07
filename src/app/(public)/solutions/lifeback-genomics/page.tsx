import { PublicRoutePage } from "@/components/layout/PublicRoutePage";

export default function LifeBackGenomicsPage() {
  return (
    <PublicRoutePage
      eyebrow="Solutions / Genomics"
      title="LifeBack™ Genomics"
      description="A research track for exploring genomic context alongside behavioral and multimodal screening data."
      points={["Risk-context research", "Multimodal screening direction", "Clinical infrastructure orientation"]}
    />
  );
}
