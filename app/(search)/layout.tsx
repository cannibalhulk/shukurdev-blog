import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import { Metadata } from "next/types";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Search | ShukurBlog",
  description: "Weekly technical blogs and articles",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          defaultTheme="system"
          attribute="class"
          enableSystem
        >
          <main className="max-w-2xl mx-auto px-4 pt-4">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
