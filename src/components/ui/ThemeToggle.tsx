"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/shared/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={cn("w-10 h-10", className)} />; // Placeholder to prevent layout shift
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn(
        "inline-flex items-center justify-center rounded-full w-10 h-10 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className
      )}
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
