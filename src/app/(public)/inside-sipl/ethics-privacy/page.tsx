import { PublicRoutePage } from "@/components/layout/PublicRoutePage";

export default function InsideSiplEthicsPrivacyPage() {
  return (
    <PublicRoutePage
      eyebrow="Inside SIPL / Ethics & Privacy"
      title="Ethics & Privacy"
      description="A focused page for SIPL's ethical AI posture, privacy principles, and clinical governance commitments."
      points={["Privacy-first architecture", "Clinical oversight", "Non-diagnostic AI assistance"]}
    />
  );
}
