import { PublicRoutePage } from "@/components/layout/PublicRoutePage";

export default function LifeBackVoicePage() {
  return (
    <PublicRoutePage
      eyebrow="Solutions / Voice"
      title="LifeBack™ Voice"
      description="Voice-based behavioral screening for early depression signal detection, built for clinical review rather than chatbot-style emotional rehearsal."
      points={["Acoustic signal review", "Clinician-ready screening outputs", "Research-first interpretation"]}
    />
  );
}
