import { ReactNode } from "react";

export function ClinicianLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      {/* Clinician Portal Header placeholder */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
