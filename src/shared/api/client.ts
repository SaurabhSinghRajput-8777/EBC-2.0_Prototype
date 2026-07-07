import { ENV } from "@/shared/config/env";
import { AppError } from "@/shared/lib/errors/AppError";

export async function apiClient<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${ENV.NEXT_PUBLIC_API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new AppError(
      `API Error: ${response.statusText}`,
      "API_ERROR",
      response.status,
      { endpoint }
    );
  }

  return response.json();
}
