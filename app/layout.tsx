import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/app/theme-provider";
import Background from "@/components/ui/background";

const poppins = Poppins({  subsets:["latin", "latin-ext"], weight: ["100", "200", "400"] });

export const metadata: Metadata = {
  title: "vHackBotz | Innovative Tech Solutions",
  description:
    "vHackBotz is a cutting-edge tech startup specializing in AI-driven software solutions. We transform complex business challenges into scalable technology advantages, driving innovation in the digital landscape.",
  keywords: [
    "tech",
    "startup",
    "innovation",
    "software",
    "development",
    "vHackBotz",
    "digital transformation",
    "tech consultancy",
    "software engineering",
    "web development",
    "technology services",
    "custom software",
    "hardware solutions",
    "IoT devices",
    "prototype development",
    "UI/UX design",
    "front-end development",
    "hardware startup",
    "electronic engineering",
    "product design",
    "rapid prototyping",
    "hardware-software integration",
  ],
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
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Background />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
