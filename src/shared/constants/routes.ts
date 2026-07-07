export const ROUTES = {
  PUBLIC: {
    HOME: "/",
    ABOUT: "/#about",
    RESEARCH: "/#research",
  },
  USER: {
    DASHBOARD: "/dashboard",
    ASSESSMENTS: "/assessments",
  },
  CLINICIAN: {
    DASHBOARD: "/clinician",
    PATIENTS: "/clinician/patients",
  },
  ADMIN: {
    DASHBOARD: "/admin",
    SYSTEM: "/admin/system",
  },
} as const;
