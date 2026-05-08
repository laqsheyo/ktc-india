// app/fpd/layout.tsx
import "../globals.css";

export default function FPDLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: "#000" }}>
        {/* NO KTC header here - just children */}
        {children}
      </body>
    </html>
  );
}