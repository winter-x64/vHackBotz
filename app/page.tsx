import { Suspense, lazy } from "react";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

const Header = lazy(() => import("@/components/Header"));
const Hero = lazy(() => import("@/components/Hero"));
const About = lazy(() => import("@/components/About"));
const Services = lazy(() => import("@/components/Services"));
const Works = lazy(() => import("@/components/Works"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Skeleton = () => (
  <div className="min-h-screen w-full animate-pulse bg-muted/50" />
);

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <main className="min-h-screen relative z-10">
          <Header />
          <Hero />
          <section className="w-full bg-black text-white font-medium">
            <VelocityScroll numRows={1} defaultVelocity={2}>
              HACK ★ BUILD ★ DOMINATE ★
            </VelocityScroll>
          </section>
          <About />
          <Services />
          <Works />
          <Contact />
          <Footer />
        </main>
      </Suspense>
    </>
  );
}
