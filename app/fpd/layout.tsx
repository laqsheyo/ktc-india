import type { ReactNode } from "react";

export default function FPDLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <main className="fpd-site">{children}</main>;
}
