import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import PortfolioNavbar from "@/components/nav/PortfolioNavbar";
import { withBasePath } from "@/lib/site-path";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Nguyễn Thị Ngọc Uyên - Fullstack Developer",
  description:
    "A London-based independent creator shaping sharp visual systems, web-ready products, and story-first campaigns.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: withBasePath("/icon_web.png"),
        media: "(prefers-color-scheme: light)",
      },
      {
        url: withBasePath("/icon_web.png"),
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: withBasePath("/icon.png"),
        type: "image/svg+xml",
      },
    ],
    apple: withBasePath("/icon_web.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#0a0a0a]">
      <body className={`${inter.variable} font-sans antialiased`}>
        <PortfolioNavbar />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
