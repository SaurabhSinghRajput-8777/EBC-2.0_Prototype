import { PublicRoutePage } from "@/components/layout/PublicRoutePage";

export default function VoiceBiomarkersPage() {
  return (
    <PublicRoutePage
      eyebrow="Solutions / Voice Biomarkers"
      title="Voice Biomarkers"
      description="Implementation-focused notes on acoustic and linguistic indicators used to support early behavioral health screening."
      points={["Prosody and cadence analysis", "Acoustic feature extraction", "Clinician-facing interpretation"]}
    />
  );
}
