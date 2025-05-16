import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Estudio TB | Asesoramiento Legal Integral",
  description:
    "Estudio jurídico con más de 15 años de experiencia en derecho civil, comercial, laboral y penal.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta
          name="facebook-domain-verification"
          content="prf4x1f5e4v8jfcokqbhz8q20nezs5"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
