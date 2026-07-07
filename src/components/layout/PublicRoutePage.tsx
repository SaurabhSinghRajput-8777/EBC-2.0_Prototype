import { PublicLayout } from "@/layouts/PublicLayout";

type PublicRoutePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  points?: string[];
};

export function PublicRoutePage({
  eyebrow,
  title,
  description,
  points = [],
}: PublicRoutePageProps) {
  return (
    <PublicLayout>
      <section className="min-h-[72dvh] bg-[#F5F8FC] px-6 pb-24 pt-40 text-[#001B65] md:px-10 lg:px-16 xl:px-20">
        <div className="grid w-full gap-12 border-t border-[#001B65]/12 pt-16 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#001B65]/60">
              {eyebrow}
            </p>
          </div>

          <div className="max-w-4xl">
            <h1 className="font-heading text-5xl font-semibold leading-[1.02] tracking-[-0.02em] text-[#001B65] md:text-7xl">
              {title}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#001B65]/72 md:text-xl">
              {description}
            </p>

            {points.length > 0 && (
              <div className="mt-14 grid gap-3 border-l border-[#D4AF37] pl-6">
                {points.map((point) => (
                  <p key={point} className="font-heading text-base font-semibold text-[#001B65]">
                    {point}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
