import { PublicLayout } from "@/layouts/PublicLayout";
import { Container } from "@/shared/ui/Container";
import { generateSeoMetadata } from "@/shared/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Inside SIPL | Sequoia Insilico",
  description:
    "Inside SIPL's philosophy, research culture, clinical responsibility, and mission behind LifeBack™.",
  path: "/inside-sipl",
});

const principles = [
  {
    title: "Clinical complexity deserves humility",
    text:
      "Many mental processes are still explained through models of clinical psychology. The field is both art and science, and some questions do not yet fully satisfy strict scientific criteria. Consciousness itself remains incompletely understood.",
  },
  {
    title: "Evidence should support care",
    text:
      "LifeBack™ is a registered trademark and a platform dedicated to the treatment cycle of mental and nervous system disorders. SIPL builds it to support Evidence-Based Medicine implementation through objective, multimodal clinical technology.",
  },
  {
    title: "Clinicians remain central",
    text:
      "LifeBack™ is designed for screening, assessment support, evidence organization, and professional review. Care decisions remain with qualified clinical professionals.",
  },
];

const outreach = [
  "University research conversations around responsible multimodal screening.",
  "Clinical outreach with key opinion leaders and mental health professionals.",
  "Knowledge leadership that treats privacy, evidence quality, and clinical governance as first-order design requirements.",
];

export default function InsideSiplPage() {
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
                Why Sequoia Insilico exists.
              </h1>
            </div>

            <div className="max-w-4xl">
              <p className="mt-8 max-w-3xl text-lg leading-8 text-[#001B65]/72 md:text-xl">
                SIPL builds research-first clinical intelligence infrastructure for mental and nervous system care. Our work begins with a simple position: technology should help clinicians see more clearly, not replace the people responsible for care.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <Container>
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[28px] border border-[#001B65]/10 bg-[#F9F8F3] p-7 shadow-[0_18px_54px_rgba(0,27,101,0.07)] md:p-10">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#001B65]/58">
                  Name Philosophy
                </p>
                <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight text-[#001B65] md:text-4xl">
                  Growth from a tiny seed.
                </h2>
                <p className="mt-6 text-lg leading-8 text-[#001B65]/74">
                  The Sequoia name reflects the belief that enduring systems can begin from small seeds. For SIPL, that means building patiently: a strong team, long-term clinical infrastructure, and a platform where science, clinicians, and technology grow together toward better mental health care.
                </p>
              </div>

              <div className="rounded-[28px] border border-[#001B65]/10 bg-white/62 p-7 md:p-10">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#001B65]/58">
                  Company Direction
                </p>
                <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight text-[#001B65] md:text-4xl">
                  Infrastructure built to mature.
                </h2>
                <p className="mt-6 text-lg leading-8 text-[#001B65]/74">
                  LifeBack™ carries that philosophy into SIPL&apos;s clinical work: a careful, multimodal platform for evidence generation, professional review, and long-term mental health infrastructure rather than short-lived product theatre.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="pb-24">
          <Container>
            <div className="rounded-[32px] border border-[#001B65]/10 bg-[#001B65] p-7 text-white shadow-[0_22px_64px_rgba(0,27,101,0.16)] md:p-12 lg:p-14">
              <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
                <div>
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-white/58">
                    Mental Health Framing
                  </p>
                  <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight md:text-4xl">
                    A human right, not a feature category.
                  </h2>
                </div>
                <p className="max-w-4xl text-xl leading-9 text-white/82">
                  Mental health is a state of mental well-being that enables people to cope with the stresses of life, realize their abilities, learn and work well, and contribute to their community. It has intrinsic and instrumental value and is a basic human right.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="pb-24">
          <Container>
            <div className="grid gap-6 lg:grid-cols-3">
              {principles.map((principle) => (
                <article
                  key={principle.title}
                  className="rounded-[28px] border border-[#001B65]/10 bg-[#F9F8F3] p-7 md:p-8"
                >
                  <h2 className="font-heading text-2xl font-semibold leading-tight text-[#001B65]">
                    {principle.title}
                  </h2>
                  <p className="mt-5 text-base leading-7 text-[#001B65]/72">
                    {principle.text}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="pb-28">
          <Container>
            <div className="grid gap-10 border-t border-[#001B65]/12 pt-16 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#001B65]/58">
                  Research Culture
                </p>
                <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight text-[#001B65] md:text-4xl">
                  University, KOL, and clinical outreach.
                </h2>
              </div>

              <div>
                <p className="max-w-3xl text-lg leading-8 text-[#001B65]/74">
                  SIPL aims to be a knowledge and thought leader, not just a software vendor. The company is building stronger university, research, and clinical outreach so LifeBack™ can develop with scientific discipline, clinical humility, and responsible governance.
                </p>
                <div className="mt-10 grid gap-4">
                  {outreach.map((item) => (
                    <p
                      key={item}
                      className="border-l border-[#D4AF37] pl-5 font-heading text-base font-semibold leading-7 text-[#001B65]"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </PublicLayout>
  );
}
