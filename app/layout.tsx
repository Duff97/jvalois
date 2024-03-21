import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { FilterProvider } from "./providers/FilterProvider";

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
      <FilterProvider>
        <body className={`${lora.className} bg-[#fafbfc] pb-10`}>
          <Navbar />
          {children}
        </body>
      </FilterProvider>
    </html>
  );
}
