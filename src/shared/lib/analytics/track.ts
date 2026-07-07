import { AnalyticsEvent } from "./events";

export function trackEvent(eventName: AnalyticsEvent, properties?: Record<string, unknown>) {
  // Stub for future analytics integration (e.g., Mixpanel, Google Analytics, PostHog)
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics Track] ${eventName}`, properties);
  }
}

export function trackAssessmentStart(source: string) {
  trackEvent("assessment_start", { source });
}

export function trackResearchView(topic: string) {
  trackEvent("research_view", { topic });
}

export function trackCTA(label: string) {
  trackEvent("cta_click", { label });
}

export function trackSectionView(sectionId: string) {
  trackEvent("section_view", { sectionId });
}
