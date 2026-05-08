export default function FPDLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* NO main site header here */}
      {children}
    </div>
  );
}