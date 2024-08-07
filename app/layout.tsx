import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar/Navbar";
import Footer from "@/components/sections/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: "Brandflare Woodworks and Design Limited",
  description: "Transform your home with Brandflare Woodwork and Designs, your premier choice for expert interior design and durable, stylish roofing solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
      <main className='bg-main bg-no-repeat bg-cover bg-center'>
        <Navbar />
        {children}
      </main>
      <Footer/>
      <p className="tracking-tight text-base text-center border border-gray-300 bg-white py-10 lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
        ©{currentYear} Brandflare Woodworks And Design
    </p>
      </body>
    </html>
  );
}
