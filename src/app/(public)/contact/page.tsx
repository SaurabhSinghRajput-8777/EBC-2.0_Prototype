import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { PublicLayout } from "@/layouts/PublicLayout";
import { Container } from "@/shared/ui/Container";
import { generateSeoMetadata } from "@/shared/lib/seo";
import { cn } from "@/shared/lib/utils";

export const metadata = generateSeoMetadata({
  title: "Contact SIPL | Sequoia Insilico",
  description: "Contact Sequoia Insilico Private Limited for LifeBack™ demos, research partnerships, and clinical collaborations.",
  path: "/contact",
});

const phone = "+91 8920 381 315";
const address = "1704, BYTE-3, NxOne, Greater NOIDA West,\nGautam Buddha Nagar (UP) 201318";
const emails = ["anupama@sequoiainsilico.com", "contact@sequoiainsilico.com"];
const mapQuery = "NX ONE BYTE, Greater Noida, Uttar Pradesh";
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;

const socialButtons = [
  { label: "LinkedIn", mark: "in" },
  { label: "Twitter", mark: "X" },
  { label: "Instagram", mark: "ig" },
  { label: "YouTube", mark: "yt" },
];

export default function ContactPage() {
  return (
    <PublicLayout>
      <div className="bg-[#F5F8FC] text-[#001B65]">
        <section className="pb-16 pt-40">
          <Container>
            <div className="grid w-full gap-6 border-t border-[#001B65]/12 pt-16 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#001B65]/60">
                  Contact
                </p>
              </div>

              <div className="max-w-4xl">
                <h1 className="font-heading text-5xl font-semibold leading-[1.02] tracking-[-0.02em] text-[#001B65] md:text-7xl">
                  Reach the SIPL team.
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-[#001B65]/72 md:text-xl">
                  For LifeBack™ demonstrations, research partnerships, and clinical collaborations,
                  connect directly with Sequoia Insilico Private Limited.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="pb-24">
          <Container>
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
              <ContactPanel />
              <MapPanel />
            </div>
          </Container>
        </section>
      </div>
    </PublicLayout>
  );
}

function ContactPanel() {
  return (
    <section
      aria-labelledby="contact-details-heading"
      className="flex min-h-full flex-col rounded-[28px] border border-[#001B65]/10 bg-[#F9F8F3] p-6 shadow-[0_18px_54px_rgba(0,27,101,0.08)] md:p-8 lg:p-10"
    >
      <div className="mb-10 flex items-start justify-between gap-6">
        <div>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#001B65]/58">
            Company Contact
          </p>
          <h2 id="contact-details-heading" className="mt-4 font-heading text-3xl font-semibold text-[#001B65]">
            Sequoia Insilico Pvt. Ltd.
          </h2>
        </div>
        <span aria-hidden="true" className="mt-1 h-12 w-px bg-[#D4AF37]" />
      </div>

      <div className="grid gap-7">
        <ContactItem icon={Phone} label="Phone">
          <Link
            href="tel:+918920381315"
            className="font-heading text-lg font-semibold text-[#001B65] underline decoration-[#D4AF37]/0 underline-offset-4 transition-colors hover:decoration-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F9F8F3]"
          >
            {phone}
          </Link>
        </ContactItem>

        <ContactItem icon={MapPin} label="Address">
          <address className="not-italic text-lg leading-8 text-[#001B65]/78 whitespace-pre-line">
            {address}
          </address>
        </ContactItem>

        <ContactItem icon={Mail} label="Email">
          <div className="grid gap-2">
            {emails.map((email) => (
              <Link
                key={email}
                href={`mailto:${email}`}
                className="w-fit font-heading text-lg font-semibold text-[#001B65] underline decoration-[#D4AF37]/0 underline-offset-4 transition-colors hover:decoration-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F9F8F3]"
              >
                {email}
              </Link>
            ))}
          </div>
        </ContactItem>
      </div>

      <div className="mt-12 border-t border-[#001B65]/12 pt-7">
        <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#001B65]/58">
          Social
        </p>
        <div className="flex flex-wrap gap-3">
          {socialButtons.map((social) => (
            <button
              key={social.label}
              type="button"
              aria-label={`${social.label} coming soon`}
              className={cn(
                "inline-flex h-12 w-12 items-center justify-center rounded-[10px] border border-[#001B65]/18 bg-[#F5F8FC] text-[#001B65] transition-colors",
                "hover:border-[#D4AF37] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F9F8F3]"
              )}
            >
              <span aria-hidden="true" className="font-mono text-[12px] font-bold uppercase tracking-[0.06em]">
                {social.mark}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Phone;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-4 border-l border-[#D4AF37]/70 pl-5 sm:grid-cols-[2.5rem_1fr] sm:border-l-0 sm:pl-0">
      <div className="hidden h-10 w-10 items-center justify-center rounded-[10px] border border-[#001B65]/12 bg-[#F5F8FC] text-[#001B65] sm:flex">
        <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.7} />
      </div>
      <div>
        <p className="mb-2 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#001B65]/58">
          {label}
        </p>
        {children}
      </div>
    </div>
  );
}

function MapPanel() {
  return (
    <section
      aria-labelledby="map-heading"
      className="overflow-hidden rounded-[28px] border border-[#001B65]/10 bg-white shadow-[0_18px_54px_rgba(0,27,101,0.08)]"
    >
      <div className="flex flex-col gap-4 border-b border-[#001B65]/10 bg-[#F9F8F3] px-6 py-6 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#001B65]/58">
            Location
          </p>
          <h2 id="map-heading" className="mt-3 font-heading text-2xl font-semibold text-[#001B65]">
            NX ONE BYTE, Greater Noida
          </h2>
        </div>
      </div>

      <div className="relative min-h-[420px] bg-[#F5F8FC]">
        <iframe
          title="Google Map showing NX ONE BYTE, Greater Noida, Uttar Pradesh"
          src={mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
          allowFullScreen
        />
      </div>
    </section>
  );
}
