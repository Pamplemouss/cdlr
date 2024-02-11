import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Le Collier de la Reine",
  description: "Liens et contacts pour les créateurs du Collier de la Reine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/44560cd5e0.js"
          crossOrigin="anonymous"
          async
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
