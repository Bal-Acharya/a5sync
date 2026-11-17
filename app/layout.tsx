import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A5 Sync — The All-in-One AI Business Platform for IT Resellers & MSPs",
  description:
    "A5 Sync replaces your CRM, CPQ, PSA, procurement, warehouse, payments, and reporting tools with one AI-powered platform — built for sales, service, procurement, warehouse, and finance teams.",
  keywords:
    "IT reseller software, MSP platform, all-in-one business management platform, AI automation, replace HubSpot, replace PSA, procurement automation",
  openGraph: {
    title: "A5 Sync — The All-in-One AI Business Platform for IT Resellers & MSPs",
    description:
      "One AI-powered platform for sales, service, procurement, warehouse, and finance — built to replace the point solutions IT resellers and MSPs cobble together.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#070b14] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
