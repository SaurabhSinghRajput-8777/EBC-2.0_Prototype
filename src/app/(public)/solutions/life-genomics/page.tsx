import { PublicRoutePage } from "@/components/layout/PublicRoutePage";

export default function LifeGenomicsPage() {
  return (
    <PublicRoutePage
      eyebrow="Solutions"
      title="Life Genomics"
      description="A focused view into SIPL's genomics research direction for clinical screening intelligence."
      points={["Genomic signal research", "Clinical risk context", "Privacy-first implementation"]}
    />
  );
}
