import { PublicRoutePage } from "@/components/layout/PublicRoutePage";

export default function MultimodalScreeningPage() {
  return (
    <PublicRoutePage
      eyebrow="Solutions / Multimodal Screening"
      title="Multimodal Screening"
      description="A technical overview of how SIPL combines structured assessments, behavioral interaction patterns, and signal review into a single clinical screening workflow."
      points={["Structured intake", "Behavioral signal capture", "Clinical review outputs"]}
    />
  );
}
