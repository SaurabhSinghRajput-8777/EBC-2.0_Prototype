export const ROLES = {
  USER: "ROLE_USER",
  CLINICIAN: "ROLE_CLINICIAN",
  ADMIN: "ROLE_ADMIN",
} as const;

export type Role = typeof ROLES[keyof typeof ROLES];

export const PERMISSIONS = {
  VIEW_DASHBOARD: "view:dashboard",
  SUBMIT_ASSESSMENT: "submit:assessment",
  VIEW_PATIENT_REPORTS: "view:patient_reports",
  MANAGE_USERS: "manage:users",
} as const;

export type Permission = typeof PERMISSIONS[keyof typeof PERMISSIONS];
