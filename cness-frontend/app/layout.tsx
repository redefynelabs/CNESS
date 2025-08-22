import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Reusable/Navbar";
import Footer from "@/component/Reusable/Footer";
import LenisProvider from "@/Provider/ScrollProvider";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "CNESS",
  description: "CNESS (Conscious Super App) is a pioneering digital platform that blends social, spiritual, and ethical dimensions into a cohesive ecosystem. Guided by the Declaration of Consciousness Movement (DoCM)—a set of nine core principles including non-violence, equality, freedom of expression, and environmental stewardship—it empowers both individuals and organizations to lead with values and purpose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable}  antialiased`}
      >
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
