export const COLORS = {
  primaryBlue: "#001B65",
  background: "#F9F8F3",
  highlight: "#D4AF37",
  primary: {
    dark: "#001B65",
    DEFAULT: "#001B65",
    light: "#001B65",
  },
  accent: {
    DEFAULT: "#D4AF37",
    hover: "#D4AF37",
  },
  text: {
    primary: "#001B65",
    muted: "rgba(0, 27, 101, 0.72)",
    inverse: "#F9F8F3",
  },
  border: {
    DEFAULT: "rgba(0, 27, 101, 0.14)",
    light: "rgba(0, 27, 101, 0.08)",
  },
} as const;

export const SPACING = {
  section: {
    desktop: "96px",
    tablet: "96px",
    mobile: "68px",
  }
} as const;

export const CONTAINER_SIZES = {
  max: "1440px",
  content: "1024px",
  reading: "768px",
} as const;

export const RADII = {
  button: "4px",
  chip: "12px",
  card: "32px",
  pill: "100px",
  sm: "4px",
  md: "12px",
  lg: "32px",
  xl: "32px",
  xxl: "32px",
  full: "100px",
} as const;
