import { Suspense, lazy } from "react";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

const Hero = lazy(() => import("@/components/Hero"));
const About = lazy(() => import("@/components/About"));
const Services = lazy(() => import("@/components/Services"));
const Works = lazy(() => import("@/components/Works"));
const Contact = lazy(() => import("@/components/Contact"));

const Skeleton = () => (
  <div className="min-h-screen w-full animate-pulse bg-muted/50" />
);

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<Skeleton />}>
      <main className="min-h-screen">
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
      </main>
      </Suspense>
    </>
  );
}
