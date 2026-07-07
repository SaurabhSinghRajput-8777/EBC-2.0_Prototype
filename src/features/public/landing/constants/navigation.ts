import { NavItem, FooterSection } from "@/features/public/landing/types/navigation";

export const MAIN_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Past Work", href: "/past-work" },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Research & Trust",
    links: [
      { label: "Research First", href: "/research" },
      { label: "Privacy First", href: "/about#privacy" },
      { label: "Human-in-the-Loop AI", href: "/about#mission" },
    ],
  },
];
