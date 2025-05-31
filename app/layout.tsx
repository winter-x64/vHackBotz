import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/app/theme-provider";
import Background from "@/components/ui/background";

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
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Background
            scale="scale-100"
            opacity="opacity-30"
            position="fixed"
          />
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}