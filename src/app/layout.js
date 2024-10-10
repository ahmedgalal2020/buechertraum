import localFont from "next/font/local";
import "./globals.css";
import {DefultHeader, DefultFooter} from "@/components/MainLayout";
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

export const metadata = {
  title: "BücherTraum",
  description: "Created by Ahmed Hassan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DefultHeader/>
        <main class= "dark:bg-gray-900">
        {children}
        </main>
        <DefultFooter/>


      </body>
    </html>
  );
}
