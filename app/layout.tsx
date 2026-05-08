import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A5 Sync — Business Management Platform for IT Service Providers",
  description:
    "A5 Sync combines CRM, CPQ, PSA, procurement, warehouse, payments, and storefront to streamline operations and enable scalable growth for IT service providers.",
  keywords:
    "IT service management, CRM, CPQ, PSA, HubSpot, HaloPSA, Stripe, Shopify, business automation",
  openGraph: {
    title: "A5 Sync — Business Management Platform",
    description:
      "Streamline your IT service business with unified CRM, CPQ, PSA, warehouse, payments, and storefront.",
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
