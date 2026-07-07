import { ReactNode } from "react";

export function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      {/* Admin Panel Header placeholder */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
