import classNames from "classnames";
import "./globals.css";
import type { Metadata } from "next";
import { inter, syne, marcellus } from "@/app/devFonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hubit Technologies",
  description: "Professional Digital Agency for Technologies Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classNames(
          inter.variable,
          syne.variable,
          marcellus.variable,
          "bg-backgroundColor  "
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
