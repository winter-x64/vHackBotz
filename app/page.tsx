import { Suspense, lazy } from "react";

const HeroSection = lazy(() => import("@/components/pages/Hero"));
const AboutSection = lazy(() => import("@/components/pages/About"));
const ServicesSection = lazy(() => import("@/components/pages/Services"));
const WorksSection = lazy(() => import("@/components/pages/Works"));
const ContactSection = lazy(() => import("@/components/pages/Contact"));


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
