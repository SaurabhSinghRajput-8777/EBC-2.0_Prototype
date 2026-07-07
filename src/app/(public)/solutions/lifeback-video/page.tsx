import { PublicRoutePage } from "@/components/layout/PublicRoutePage";

export default function LifeBackVideoPage() {
  return (
    <PublicRoutePage
      eyebrow="Solutions / Video"
      title="LifeBack™ Video"
      description="Structured video screening designed to surface observable behavioral patterns that can support human clinical evaluation."
      points={["Behavioral pattern capture", "Non-diagnostic screening workflow", "Human-in-the-loop review"]}
    />
  );
}
