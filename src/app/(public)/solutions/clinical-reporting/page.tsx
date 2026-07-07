import { PublicRoutePage } from "@/components/layout/PublicRoutePage";

export default function ClinicalReportingPage() {
  return (
    <PublicRoutePage
      eyebrow="Solutions / Clinical Reporting"
      title="Clinical Reporting"
      description="A technical scaffold for SIPL's clinician-ready reporting layer, which translates screening outputs into reviewable, non-diagnostic summaries."
      points={["Non-diagnostic summaries", "Human-in-the-loop review", "Structured evidence presentation"]}
    />
  );
}
