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
        <meta
          name="description"
          content="KTC India Display LLP official website"
        />

        {/* ✅ CHATBASE SCRIPT (SAFE PLACE) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                if(!window.chatbase || window.chatbase("getState") !== "initialized"){
                  window.chatbase = (...arguments) => {
                    if(!window.chatbase.q){window.chatbase.q=[]}
                    window.chatbase.q.push(arguments)
                  };
                  window.chatbase = new Proxy(window.chatbase, {
                    get(target, prop){
                      if(prop === "q"){return target.q}
                      return (...args) => target(prop, ...args)
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
            `,
          }}
        />
      </head>

      {/* ✅ KEEP YOUR ORIGINAL BODY */}
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}