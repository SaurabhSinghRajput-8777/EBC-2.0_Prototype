import Link from "next/link";
import { requestDemoLinkStyles } from "@/shared/ui/Button";
import { cn } from "@/shared/lib/utils";
import { siteContent } from "@/constants/siteContent";

export function Footer() {
  const brandingParts = siteContent.footer.branding.split('|');
  const mainBranding = brandingParts[0]?.trim();
  const subBranding = brandingParts[1]?.trim();

  return (
    <footer className="w-full bg-background text-primary pt-24 pb-12 border-t border-primary/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        
        {/* Main Grid: 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_1fr_0.8fr_1.2fr] gap-x-8 gap-y-16 items-start">
          
          <FooterColumn title="Bootcamp" links={siteContent.header.navigation.solutions} />
          <FooterColumn title="About" links={siteContent.header.navigation.inside} />
          <FooterColumn title="Links" links={siteContent.header.navigation.staticLinks} />

          {/* CTA Box */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col justify-start lg:items-end mt-8 lg:mt-0">
            <h2 className="mb-6 font-sans text-sm font-bold uppercase tracking-[0.14em] text-primary/50 lg:text-right">
              Join the Cohort
            </h2>
            <Link
              href={siteContent.header.cta.href}
              className={cn(requestDemoLinkStyles, "px-8 lg:px-10 py-2 border-primary/20 shadow-none")}
            >
              {siteContent.header.cta.label}
            </Link>
          </div>
        </div>

        {/* Divider & Bottom Bar */}
        <div className="mt-24 border-t border-primary/10 pt-10 flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
            <div className="flex flex-col gap-3">
              <p className="font-serif text-3xl md:text-4xl font-bold text-primary tracking-tight">
                {mainBranding}
              </p>
              <p className="font-body text-base text-secondary-text">
                {subBranding && `${subBranding} • `}{siteContent.footer.address}
              </p>
            </div>
            
            {/* Dummy Social Links */}
            <div className="flex items-center gap-5 text-primary/80">
              <a href="https://www.bennett.edu.in/innovation-centre" target="_blank" rel="noopener noreferrer" aria-label="Website" className="hover:text-accent hover:-translate-y-1 transition-all duration-300">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/bennett-hatchery-cie-bu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent hover:-translate-y-1 transition-all duration-300">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://www.instagram.com/hatchery_bennett" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent hover:-translate-y-1 transition-all duration-300">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-6 border-t border-primary/5">
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-primary/70">
              {siteContent.footer.copyright}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 md:gap-8 font-mono text-[11px] uppercase tracking-[0.1em] text-primary/70">
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h2 className="mb-6 font-sans text-sm font-bold uppercase tracking-[0.14em] text-primary/80">
        {title}
      </h2>
      <ul className="grid gap-4">
        {links.map((link) => {
          const isExternal = link.href.startsWith("http");

          return (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-body text-base text-secondary-text transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block focus-visible:outline-none"
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
