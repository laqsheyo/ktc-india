import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>KTC India</title>
        <meta name="description" content="KTC India Display LLP official website" />
      </head>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}