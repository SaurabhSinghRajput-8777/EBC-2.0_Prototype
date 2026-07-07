import { BaseProps } from "@/shared/types/common";
import { cn } from "@/shared/lib/utils";

interface BadgeProps extends BaseProps {
  variant?: "default" | "muted" | "white";
}

export function Badge({ className, children, variant = "default" }: BadgeProps) {
  const variants = {
    default: "border border-[#001B65]/12 bg-[#F9F8F3] text-[#001B65]",
    muted: "border border-[#001B65]/10 bg-[#001B65]/5 text-[#001B65]/72",
    white: "border border-[#001B65]/10 bg-white text-[#001B65] shadow-sm"
  };

  return (
    <div className={cn("inline-flex items-center rounded-[4px] px-4 py-1.5 font-heading text-sm font-semibold", variants[variant], className)}>
      {children}
    </div>
  );
}
