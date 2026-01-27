import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MySphere AI - Intelligent Solutions for Modern Business",
  description: "Transform your business with MySphere's cutting-edge AI solutions. Leverage intelligent automation, data analytics, and machine learning to drive growth and innovation.",
  keywords: "AI, artificial intelligence, machine learning, automation, data analytics, business solutions",
  authors: [{ name: "MySphere AI" }],
  openGraph: {
    title: "MySphere AI - Intelligent Solutions for Modern Business",
    description: "Transform your business with MySphere's cutting-edge AI solutions.",
    url: "https://mysphereai.com",
    siteName: "MySphere AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MySphere AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MySphere AI - Intelligent Solutions for Modern Business",
    description: "Transform your business with MySphere's cutting-edge AI solutions.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
