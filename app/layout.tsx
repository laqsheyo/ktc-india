import type { ReactNode } from "react";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "KTC India",
  description: "KTC India Display LLP official website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <h1>KTC India</h1>

          <nav>
            <a href="/">Home</a>
            <a href="/about-us">About Us</a>
            <a href="/promoters">Leadership</a>
            <a href="/showroom">Showroom</a>
            <a href="/partners">Manufacturing Partners</a>
            <a href="/contact">Contact Us</a>
          </nav>
        </header>

        {children}

        <footer className="footer">
          <p>© 2026 KTC India Display LLP. All rights reserved.</p>
        </footer>

        <Script id="chatbase-script" strategy="afterInteractive">
          {`
            (function(){
              if(!window.chatbase || window.chatbase("getState") !== "initialized"){
                window.chatbase = (...arguments) => {
                  if(!window.chatbase.q){window.chatbase.q=[]}
                  window.chatbase.q.push(arguments)
                };
                window.chatbase = new Proxy(window.chatbase, {
                  get(target, prop){
                    if(prop === "q"){return target.q}
                    return (...args)=>target(prop,...args)
                  }
                });
              }
              const onLoad = function(){
                const script = document.createElement("script");
                script.src = "https://www.chatbase.co/embed.min.js";
                script.id = "Csa19KwvsbwSZ8nF8w1i6";
                script.domain = "www.chatbase.co";
                document.body.appendChild(script);
              };
              if(document.readyState === "complete"){onLoad()}
              else{window.addEventListener("load", onLoad)}
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
