import { HeroSection } from "@/features/public/landing/sections/HeroSection";
import { AboutSection } from "@/features/public/landing/sections/AboutSection";
import { DatesSection } from "@/features/public/landing/sections/DatesSection";
import { ScheduleSection } from "@/features/public/landing/sections/ScheduleSection";
import { StructureSection } from "@/features/public/landing/sections/StructureSection";
import { HighlightsSection } from "@/features/public/landing/sections/HighlightsSection";
import { TeamSection } from "@/features/public/landing/sections/TeamSection";
import { GallerySection } from "@/features/public/landing/sections/GallerySection";
import { AlumniSection } from "@/features/public/landing/sections/AlumniSection";
import { VisionSection } from "@/features/public/landing/sections/VisionSection";
import { PublicLayout } from "@/layouts/PublicLayout";
import { generateSeoMetadata, organizationSchema, medicalSchema } from "@/shared/lib/seo";

import { siteContent } from "@/constants/siteContent";

export const metadata = generateSeoMetadata({
  title: siteContent.metadata.title,
  description: siteContent.metadata.description,
  path: "/"
});

export default function Home() {
  return (
    <PublicLayout>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, medicalSchema]) }} 
      />
      <HeroSection />
      <AboutSection />
      <DatesSection />
      <ScheduleSection />
      <StructureSection />
      <HighlightsSection />
      <TeamSection />
      <GallerySection />
      <AlumniSection />
      <VisionSection />
    </PublicLayout>
  );
}
