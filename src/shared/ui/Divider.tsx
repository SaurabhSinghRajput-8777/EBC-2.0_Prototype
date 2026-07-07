import { BaseProps } from "@/shared/types/common";
import { cn } from "@/shared/lib/utils";

export function Divider({ className }: BaseProps) {
  return (
    <hr className={cn("border-t border-[#D6D6D6]", className)} />
  );
}
