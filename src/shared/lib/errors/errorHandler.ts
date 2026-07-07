import { AppError } from "./AppError";
import { logger } from "../logger";

export function handleError(error: unknown) {
  if (error instanceof AppError) {
    logger.error(`[${error.code}] ${error.message}`, error.metadata);
    // Future: send to Sentry/Datadog
  } else {
    logger.error("Unhandled Error", { error });
  }
}
