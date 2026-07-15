import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/shared/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const requestDemoLinkStyles =
  "inline-flex min-h-13 items-center justify-center rounded-[10px] border border-[#C8102E] bg-[#C8102E] px-7 font-heading text-[12px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_12px_28px_rgba(200,16,46,0.2)] transition-colors hover:border-[#E63946] hover:bg-[#E63946] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F5F8FC]";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-[8px] font-heading font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F8FC] disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "border border-[#001B65] bg-[#001B65] text-white shadow-[0_14px_34px_rgba(0,27,101,0.16)] hover:border-[#D4AF37] hover:bg-[#00164F]",
      secondary: "border border-[#D4AF37] bg-transparent text-[#001B65] hover:bg-[#D4AF37]/10",
      outline: "border border-[#001B65]/28 bg-white/55 text-[#001B65] hover:border-[#D4AF37] hover:bg-[#F9F8F3]",
      ghost: "text-[#001B65] hover:bg-[#001B65]/5"
    };
    
    const sizes = {
      sm: "h-10 px-5 text-[13px]",
      md: "h-12 px-6 text-[15px]",
      lg: "h-14 px-8 text-[15px] md:px-9"
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
