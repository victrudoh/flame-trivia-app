import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import GeneralProvider from "@/context/GenralContext";
import { ToastContainer } from "react-toastify";
import Script from "next/script"; // Use Next.js Script for external scripts
// import bg from "@/assets/imgs/bg.png"; // Ensure the image path is correct

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Trivia App",
  description: "Flame of Hope Trivia App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body
          className="bg-brand-dark/65"
          style={
            {
              // Uncomment this if bg is imported correctly
              // backgroundImage: `url(${bg.src})`,
              // backgroundSize: "contain",
              // backgroundPosition: "center",
            }
          }
        >
          <GeneralProvider>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            {children}
          </GeneralProvider>
        </body>

        {/* Drift chat script using Next.js Script component */}
        <Script id="drift-script" strategy="afterInteractive">
          {`
          "use strict";
          !function() {
            var t = window.driftt = window.drift = window.driftt || [];
            if (!t.init) {
              if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
              t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
              t.factory = function(e) {
                return function() {
                  var n = Array.prototype.slice.call(arguments);
                  return n.unshift(e), t.push(n), t;
                };
              }, t.methods.forEach(function(e) {
                t[e] = t.factory(e);
              }), t.load = function(t) {
                var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
                o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
                var i = document.getElementsByTagName("script")[0];
                i.parentNode.insertBefore(o, i);
              };
            }
          }();
          drift.SNIPPET_VERSION = '0.3.1';
          drift.load('8k58cci44f6u');
          `}
        </Script>
      </html>
    </>
  );
}
