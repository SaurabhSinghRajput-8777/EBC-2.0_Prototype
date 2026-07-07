import { BaseProps } from "@/shared/types/common";
import { cn } from "@/shared/lib/utils";

interface CardProps extends BaseProps {
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  elevation?: "none" | "sm" | "md";
}

export function Card({ className, children, padding = "md", elevation = "sm" }: CardProps) {
  const paddings = {
    none: "",
    sm: "p-4 md:p-6",
    md: "p-6 md:p-8",
    lg: "p-8 md:p-12",
    xl: "p-10 md:p-16 lg:p-20",
  };

  const elevations = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md"
  };

  return (
    <div className={cn("rounded-3xl bg-white", paddings[padding], elevations[elevation], className)}>
      {children}
    </div>
  );
}
