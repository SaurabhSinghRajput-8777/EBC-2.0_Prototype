import { BaseProps } from "@/shared/types/common";
import { cn } from "@/shared/lib/utils";

interface ContainerProps extends BaseProps {
  as?: React.ElementType;
}

export function Container({ className, children, as: Component = "div" }: ContainerProps) {
  return (
    <Component className={cn("mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-12", className)}>
      {children}
    </Component>
  );
}
