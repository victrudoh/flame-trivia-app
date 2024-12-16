import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import GeneralProvider from "@/context/GenralContext";
import { ToastContainer } from "react-toastify";
import Script from "next/script";
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
  title: "Health9ja",
  description: "Learn about HIV/AIDS and other STIs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
        <head>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-M1F2GHSW1F`}
          />

          <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M1F2GHSW1F');
          `}
          </Script>
        </head>
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
      </html>
    </>
  );
}
