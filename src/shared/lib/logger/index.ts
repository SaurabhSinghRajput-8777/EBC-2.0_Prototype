import { ENV } from "@/shared/config/env";

export const logger = {
  info: (message: string, meta?: Record<string, unknown>) => {
    if (ENV.NODE_ENV !== "production") console.log(`[INFO] ${message}`, meta || "");
  },
  warn: (message: string, meta?: Record<string, unknown>) => {
    console.warn(`[WARN] ${message}`, meta || "");
  },
  error: (message: string, meta?: Record<string, unknown>) => {
    console.error(`[ERROR] ${message}`, meta || "");
    // Integration point for Sentry / Datadog
  }
};
