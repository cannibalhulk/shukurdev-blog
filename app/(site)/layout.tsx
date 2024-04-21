import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { GoogleTagManager } from '@next/third-parties/google'
import "../globals.css";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShukurBlog",
  description: "Weekly technical blogs and articles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-K2NJL28S" />
      
      <body className={inter.className}>
        <ThemeProvider
          defaultTheme="system"
          attribute="class"
          enableSystem
        >
          <main className="max-w-2xl mx-auto px-4">
            <Navbar />
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        
      </body>
      <Script async strategy="lazyOnload" src="https://feedbacks.vercel.app/widget.js data-widget-id=66254ebb1711bcf22143" />
    </html>
  );
}
