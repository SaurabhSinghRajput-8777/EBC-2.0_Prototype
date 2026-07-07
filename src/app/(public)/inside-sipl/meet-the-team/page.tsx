import { PublicRoutePage } from "@/components/layout/PublicRoutePage";

export default function MeetTheTeamPage() {
  return (
    <PublicRoutePage
      eyebrow="Inside SIPL"
      title="Meet The Team"
      description="A look at the people building SIPL's clinical intelligence infrastructure."
      points={["Research leadership", "Clinical collaboration", "Engineering discipline"]}
    />
  );
}
