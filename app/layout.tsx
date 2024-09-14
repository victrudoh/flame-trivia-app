import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import GeneralProvider from "@/context/GenralContext";
import { ToastContainer } from "react-toastify";
// import bg from "@/assets/imgs/bg.png";

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
          // style={{
          //   backgroundImage: `url(${bg.src})`, // Use bg.src to set the background image from the imported file
          //   backgroundSize: "contain", // Ensures the background image covers the div
          //   backgroundPosition: "center", // Centers the background image
          // }}
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
