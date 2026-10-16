import { PublicLayout } from "@/layouts/PublicLayout";
import { generateSeoMetadata } from "@/shared/lib/seo";
import { DemoDayContent } from "@/features/public/demoday/DemoDayContent";

export const metadata = generateSeoMetadata({
  title: "Demo Day Top 20 Shortlisted Startups | EBC 2.0 Bennett Hatchery",
  description: "Explore the top 20 shortlisted startups and founders pitching at the Grand Demo Day for EBC 2.0 by Bennett Hatchery, CIE.",
  path: "/demoday",
});

export default function DemoDayPage() {
  return (
    <PublicLayout>
      <DemoDayContent />
    </PublicLayout>
  );
}
