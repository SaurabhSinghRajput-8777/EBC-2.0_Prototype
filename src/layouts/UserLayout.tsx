import { ReactNode } from "react";

export function UserLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* User Dashboard Header placeholder */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
