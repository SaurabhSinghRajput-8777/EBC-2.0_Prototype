export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/api/v1/auth/login",
    LOGOUT: "/api/v1/auth/logout",
  },
  USER: {
    PROFILE: "/api/v1/users/me",
  },
  ASSESSMENT: {
    START: "/api/v1/assessments/start",
    SUBMIT: "/api/v1/assessments/submit",
  }
} as const;
