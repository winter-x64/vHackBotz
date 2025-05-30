import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/app/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "vHackBotz | Innovative Tech Solutions",
  description: "vHackBotz is a cutting-edge tech startup providing innovative solutions for businesses of all sizes.",
  keywords: ["tech", "startup", "innovation", "software", "development", "vHackBotz"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}