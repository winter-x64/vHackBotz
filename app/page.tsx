import { Suspense, lazy } from "react";

const HeroSection = lazy(() => import("@/components/Hero"));
const AboutSection = lazy(() => import("@/components/About"));
const ServicesSection = lazy(() => import("@/components/Services"));
const WorksSection = lazy(() => import("@/components/Works"));
const ContactSection = lazy(() => import("@/components/Contact"));


const Skeleton = () => (
  <div className="min-h-screen w-full animate-pulse bg-muted/50" />
);

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WorksSection />
        <ContactSection />
      </Suspense>
    </>
  );
}
