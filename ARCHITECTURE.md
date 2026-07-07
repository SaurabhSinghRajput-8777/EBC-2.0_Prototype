# LifeBack Frontend Architecture

This document outlines the domain-driven architecture adopted for the LifeBack frontend application.

## Directory Structure

The codebase is split into feature-specific domains and shared layers to support scalable multi-user layers (Public, User, Clinician, Admin).

```text
src/
├── app/
│   ├── (public)/     # Public-facing landing pages (Current)
│   ├── (user)/       # Patient portal (Future)
│   ├── (clinician)/  # Clinician dashboard (Future)
│   └── (admin)/      # Administrative console (Future)
│
├── features/         # Domain-driven feature boundaries
│   └── public/
│       └── landing/  # All components, sections, and logic specific to the landing page
│
├── shared/           # Cross-cutting concerns and primitives
│   ├── analytics/    # Pluggable analytics boundary
│   ├── animations/   # Framer Motion components and variants
│   ├── hooks/        # Shared React hooks
│   ├── lib/          # Utilities, design tokens, SEO logic
│   ├── types/        # Global TypeScript types
│   └── ui/           # Shared design system components
│
└── layouts/          # Root layout definitions for different access layers
```

## Core Principles

1.  **Strict Feature Boundaries**: Code belongs to the feature that uses it. If multiple features need it, it moves to `shared/`.
2.  **Absolute Imports**: Imports must use `@/` alias (e.g., `import { Button } from "@/shared/ui"`).
3.  **Server Components Default**: All components default to Server Components for performance. `use client` is strictly isolated to interactive leaves (e.g., `MotionWrapper`, `MobileMenu`).
4.  **Design Tokens**: Magic numbers are forbidden. Colors, spacing, and typography are defined in `src/shared/lib/design-tokens.ts`.
5.  **Strict TypeScript**: `any` is disallowed. Strict null checks and exact optional property types are enforced.

## Future Expansion

When implementing Phase 2 (User/Clinician layers):
1.  Create the page routing in `app/(layer)/`.
2.  Create the new feature domain in `src/features/(layer)/`.
3.  Utilize `src/shared/` for consistent design.
4.  Avoid cross-feature imports unless promoted to `shared/`.
