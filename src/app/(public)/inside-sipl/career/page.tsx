import { PublicLayout } from "@/layouts/PublicLayout";
import { Container } from "@/shared/ui/Container";
import Link from "next/link";
import { generateSeoMetadata } from "@/shared/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Career | SIPL",
  description: "Career interests at SIPL across business development, data science, development, sales and marketing, and project management.",
  path: "/inside-sipl/career",
});

const careerPaths = [
  "Business Development",
  "Data Science",
  "Development",
  "Sales & Marketing",
  "Project Management",
];

export default function InsideSiplCareerPage() {
  return (
    <PublicLayout>
      <main className="bg-[#F5F8FC] text-[#001B65]">
        <section className="px-6 pb-20 pt-40 md:px-10 lg:px-16 xl:px-20">
          <div className="grid w-full gap-12 border-t border-[#001B65]/12 pt-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#001B65]/60">
                Inside SIPL
              </p>
              <h1 className="font-heading text-5xl font-semibold leading-[1.02] tracking-[-0.02em] text-[#001B65] md:text-7xl">
                Career
              </h1>
            </div>

            <div className="max-w-4xl">
              <p className="text-lg leading-8 text-[#001B65]/72 md:text-xl">
                @ SIPL the present is the future. Innovation and R&amp;D are the keys to SIPL&apos;s success, and we are always looking for bright, motivated individuals to join our team and help us develop fresh approaches to transform the healthcare industry.
              </p>
              <p className="mt-6 text-lg leading-8 text-[#001B65]/72 md:text-xl">
                We would love to have you on board if you have a strong interest in cutting-edge technology, artificial intelligence, data analytics, and are prepared to develop cutting-edge, innovative solutions that will improve people&apos;s health. We are optimistic that it will be a steep learning curve and a wonderful adventure for both of us.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-28">
          <Container>
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <section className="rounded-[28px] border border-[#001B65]/10 bg-[#F9F8F3] p-7 shadow-[0_18px_54px_rgba(0,27,101,0.07)] md:p-10">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#001B65]/58">
                  Career Paths
                </p>
                <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight text-[#001B65] md:text-4xl">
                  Areas of interest
                </h2>
                <div className="mt-8 grid gap-3">
                  {careerPaths.map((path) => (
                    <p
                      key={path}
                      className="border-l border-[#D4AF37] pl-5 font-heading text-base font-semibold leading-7 text-[#001B65]"
                    >
                      {path}
                    </p>
                  ))}
                </div>
              </section>

              <section
                aria-labelledby="career-interest-heading"
                className="rounded-[28px] border border-[#001B65]/10 bg-white/62 p-7 md:p-10"
              >
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#001B65]/58">
                  Apply Now
                </p>
                <h2 id="career-interest-heading" className="mt-5 font-heading text-3xl font-semibold leading-tight text-[#001B65] md:text-4xl">
                  Register your interest
                </h2>
                <form className="mt-8 grid gap-5" aria-label="Career interest form">
                  <div className="grid gap-2">
                    <label htmlFor="career-name" className="font-heading text-sm font-semibold text-[#001B65]">
                      Name
                    </label>
                    <input
                      id="career-name"
                      name="name"
                      type="text"
                      className="h-12 rounded-[8px] border border-[#001B65]/18 bg-[#F5F8FC] px-4 text-[#001B65] outline-none transition-colors placeholder:text-[#001B65]/38 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/40"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="career-email" className="font-heading text-sm font-semibold text-[#001B65]">
                      Email
                    </label>
                    <input
                      id="career-email"
                      name="email"
                      type="email"
                      className="h-12 rounded-[8px] border border-[#001B65]/18 bg-[#F5F8FC] px-4 text-[#001B65] outline-none transition-colors placeholder:text-[#001B65]/38 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/40"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="career-path" className="font-heading text-sm font-semibold text-[#001B65]">
                      Career path
                    </label>
                    <select
                      id="career-path"
                      name="path"
                      className="h-12 rounded-[8px] border border-[#001B65]/18 bg-[#F5F8FC] px-4 text-[#001B65] outline-none transition-colors focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/40"
                    >
                      {careerPaths.map((path) => (
                        <option key={path}>{path}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="career-note" className="font-heading text-sm font-semibold text-[#001B65]">
                      Brief note
                    </label>
                    <textarea
                      id="career-note"
                      name="note"
                      rows={5}
                      className="resize-none rounded-[8px] border border-[#001B65]/18 bg-[#F5F8FC] px-4 py-3 text-[#001B65] outline-none transition-colors placeholder:text-[#001B65]/38 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/40"
                    />
                  </div>

                  <Link
                    href={process.env.NEXT_PUBLIC_APPLY_NOW_LINK || "/apply"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-14 items-center justify-center rounded-[8px] border border-[#001B65] bg-[#001B65] px-8 font-heading text-[15px] font-semibold text-white shadow-[0_14px_34px_rgba(0,27,101,0.16)] transition-colors hover:border-[#D4AF37] hover:bg-[#00164F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F8FC] md:px-9 mt-2 w-full sm:w-fit"
                  >
                    Apply Now
                  </Link>
                </form>
              </section>
            </div>
          </Container>
        </section>
      </main>
    </PublicLayout>
  );
}
