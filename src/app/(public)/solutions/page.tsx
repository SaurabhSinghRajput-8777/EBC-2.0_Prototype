import { PublicRoutePage } from "@/components/layout/PublicRoutePage";

export default function SolutionsPage() {
  return (
    <PublicRoutePage
      eyebrow="Solutions"
      title="Clinical-first screening infrastructure"
      description="SIPL's solution philosophy is built around privacy-first clinical intelligence and multimodal evidence capture. LifeBack™ structures behavioral signals for responsible human review."
      points={[
        "Multimodal screening across voice, behavior, and clinical context",
        "Privacy-first architecture for sensitive behavioral health workflows",
        "Clinician-ready reporting instead of conversational substitution",
        "High-level operating model for how SIPL turns signals into reviewable evidence",
      ]}
    />
  );
}
