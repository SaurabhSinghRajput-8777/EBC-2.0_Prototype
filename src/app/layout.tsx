import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

import { siteContent } from "@/constants/siteContent";

export const metadata: Metadata = {
  title: siteContent.metadata.title,
  applicationName: "EBC Bootcamp",
  description: siteContent.metadata.description,
  icons: {
    icon: [
      {
        url: "/logo.png",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/logo.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/logo.png",
        type: "image/png",
      },
    ],
  },
};

import { LoadingScreen } from "@/shared/ui/LoadingScreen";

import { ThemeProvider } from "@/components/providers/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} ${spaceMono.variable}`} suppressHydrationWarning>
      <body className="antialiased font-body transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LoadingScreen />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
