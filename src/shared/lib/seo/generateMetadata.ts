import { Metadata } from "next";

interface GenerateMetadataProps {
  title: string;
  description: string;
  path: string;
}

export function generateSeoMetadata({ title, description, path }: GenerateMetadataProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://lifeback.sipl.com";
  const url = `${baseUrl}${path}`;

  return {
    title: "EBC 2.0 | CIE",
    applicationName: "EBC 2.0 | CIE",
    description,
    icons: {
      icon: [
        { url: "/sipl-s-mark.png?v=sipl-mark", type: "image/png", sizes: "72x104" },
        { url: "/favicon.ico", sizes: "32x32" },
      ],
      shortcut: [{ url: "/sipl-s-mark.png?v=sipl-mark", type: "image/png", sizes: "72x104" }],
      apple: [{ url: "/sipl-s-mark.png", sizes: "72x104", type: "image/png" }],
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "LifeBack™",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    }
  };
}
