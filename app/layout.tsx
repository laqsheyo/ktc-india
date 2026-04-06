import "./globals.css";
import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="main-nav">
          <h2 style={{color: 'white'}}>KTC India</h2>
          <nav>
            <a href="/">Home</a>
            <a href="/about-us">About Us</a>
            <a href="/promoters">Promoters</a>
            <a href="/consulting">Consulting</a>
            <a href="/certifications">Certifications</a>
            <a href="/brands">Brands</a>
            <a href="/showroom">Showroom</a>
            <a href="/partners">Partners</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        
        {children}

        <Script id="chatbase" strategy="afterInteractive">
          {`/* Your Chatbase script here */`}
        </Script>
      </body>
    </html>
  );
}