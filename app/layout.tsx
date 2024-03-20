import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const lora = Lora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "JValois",
  description: "Arts & Littérature",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.className} bg-[#fafbfc]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
