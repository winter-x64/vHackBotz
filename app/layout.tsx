import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import { ThemeProvider } from "@/app/theme-provider";
import Background from "@/components/ui/background";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});
const raleway = Raleway({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "400", "500", "600", "700"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "vHackBotz | Innovative Tech Solutions",
  description:
    "vHackBotz is a cutting-edge tech startup specializing in AI-driven software solutions. We transform complex business challenges into scalable technology advantages, driving innovation in the digital landscape.",
  keywords: [
    "tech startup",
    "software development",
    "AI solutions",
    "web development",
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
        <link rel="icon" href="/vhackbotz.svg" sizes="any" />
      </head>
      <body className={`${montserrat.className} ${raleway.variable}`}>
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
