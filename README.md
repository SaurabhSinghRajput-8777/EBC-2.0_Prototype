# Hatchery Prototype - EBC Bootcamp

**A premium, high-fidelity landing page for the Entrepreneurship Bootcamp at Bennett University.**

This project is a modern web application prototype built for the Centre for Innovation and Entrepreneurship (CIE). It serves as the digital front door for the EBC Bootcamp, showcasing the program's schedule, expert mentors, and alumni success stories with a highly polished, interactive user interface.

## 🚀 Key Features

*   **Premium Editorial Aesthetics:** A clean, high-contrast design system featuring the Bennett University brand colors (Primary Blue and Accent Red).
*   **Interactive Team Showcase:** A hierarchical, 3D flip-card interface displaying the Chief Mentor, Core Team, and Supporting Team members with detailed write-ups on hover.
*   **Dynamic Bootcamp Schedule:** A clearly structured, responsive timeline outlining the program's events and milestones.
*   **Alumni & Guest Spotlights:** Immersive image grids with carefully tuned gradient overlays to ensure text readability without compromising visual impact.
*   **Hall of Fame:** A responsive, swipeable carousel showcasing past EBC 1.0 winners with premium watermarked typography and dynamic hover states.
*   **Fluid Animations:** Seamless scroll-triggered reveals and micro-interactions powered by Framer Motion.
*   **Fully Responsive:** Optimized for all devices, featuring swipeable native carousels on mobile and expansive grid layouts on desktop.

---

## 🛠 Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Library:** [React](https://react.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)

---

## 📂 Project Structure

```text
frontend/
├── public/                # Static assets (Images, Logos, Team Photos)
└── src/
    ├── app/               # Next.js App Router (Pages & Layouts)
    ├── constants/         # Centralized data (e.g., siteContent.ts)
    ├── features/          # Domain-specific components
    │   └── public/
    │       └── landing/   # Landing page sections (Hero, Team, Schedule, etc.)
    ├── shared/            # Reusable UI components and utilities
    │   ├── ui/            # Buttons, Containers, SectionHeadings
    │   ├── animations/    # Framer Motion wrappers
    │   └── lib/           # Utility functions (cn, etc.)
    └── styles/            # Global CSS (globals.css)
```

---

## 💻 Getting Started

### Prerequisites

*   Node.js 18+
*   npm (or pnpm/yarn)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the frontend directory:
    ```bash
    cd "Hatchery Prototype"/frontend
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

### Running Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🎨 Design System & Customization

The project uses a centralized content and styling approach:
*   **Content Management:** All text, team members, and schedule data are managed in `src/constants/siteContent.ts`.
*   **Theming:** Primary colors and global styles are defined in `src/app/globals.css` and configured in `tailwind.config.ts`.
