import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import GeneralProvider from "@/context/GenralContext";
import { ToastContainer } from "react-toastify";

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
        <body>
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
