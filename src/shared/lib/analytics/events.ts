export const ANALYTICS_EVENTS = {
  ASSESSMENT_START: "assessment_start",
  RESEARCH_VIEW: "research_view",
  CTA_CLICK: "cta_click",
  SECTION_VIEW: "section_view",
} as const;

export type AnalyticsEvent = typeof ANALYTICS_EVENTS[keyof typeof ANALYTICS_EVENTS];
