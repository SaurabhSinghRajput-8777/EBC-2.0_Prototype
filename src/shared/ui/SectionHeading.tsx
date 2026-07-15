import { BaseProps } from "@/shared/types/common";
import { cn } from "@/shared/lib/utils";

interface SectionHeadingProps extends BaseProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: "left" | "center";
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeading({ className, title, subtitle, align = "center", titleClassName, subtitleClassName }: SectionHeadingProps) {
  return (
    <div className={cn("relative mb-16 md:mb-24 flex flex-col", align === "center" ? "items-center text-center" : "items-start text-left", className)}>
      
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <h2 className={cn("font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 md:mb-6 lg:mb-8 leading-tight", titleClassName || "text-foreground")}>
          {title}
        </h2>
        {subtitle && (
          <p className={cn("text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto", subtitleClassName || "text-secondary-text")}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
