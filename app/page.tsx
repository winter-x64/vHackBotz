import { Suspense, lazy } from "react";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const Header = lazy(() => import("@/components/Header"));
const Hero = lazy(() => import("@/components/Hero"));
const About = lazy(() => import("@/components/About"));
const WhyUs = lazy(() => import("@/components/WhyUs"));
const Services = lazy(() => import("@/components/Services"));
const Works = lazy(() => import("@/components/Works"));
const CTA = lazy(() => import("@/components/CTA"));
const Footer = lazy(() => import("@/components/Footer"));

const Loader= () => (
  <div className="min-h-screen w-full animate-pulse bg-muted/50" />
);

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <main className="min-h-screen relative z-10">
          <ScrollProgress className="h-2 bg-orange-500" />
          <Header />
          <Hero />
          <section className="w-full bg-black/80 text-orange-400 font-normal">
            <VelocityScroll numRows={1} defaultVelocity={2}>
              HACK • BUILD • DOMINATE •
            </VelocityScroll>
          </section>
          <About />
          <WhyUs />
          <Services />
          <Works />
          <CTA />
          <Footer />
        </main>
      </Suspense>
    </>
  );
}
