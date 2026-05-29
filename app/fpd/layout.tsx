import type { ReactNode } from "react";
import FPDHeader from "./FPDHeader";

export default function FPDLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="fpd-site">
      <FPDHeader />
      {children}
    </main>
  );
}