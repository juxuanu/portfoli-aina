import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Aina Delgado Solivellas",
  description:
    "Portfoli digital de la dissenyadora gràfica Aina Delgado Solivellas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ca">
      <body
        className={`${poppins.className} text-customGray mx-auto max-w-[1920px]`}
      >
        {children}
      </body>
    </html>
  );
}
