import { useState, useEffect, lazy, Suspense } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import CategoriesSection from "@/components/CategoriesSection";

// Lazy load below-fold sections
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const OffersBanner = lazy(() => import("@/components/OffersBanner"));
const InstagramSection = lazy(() => import("@/components/InstagramSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const LeadFormSection = lazy(() => import("@/components/LeadFormSection"));
const LocationSection = lazy(() => import("@/components/LocationSection"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Force scroll to top immediately on mount (bypass smooth scroll)
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        setLoading(false);
        // Restore smooth scroll after a tick
        requestAnimationFrame(() => {
          document.documentElement.style.scrollBehavior = '';
        });
      }, 400);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen onExit={exiting} />}

      {!loading && (
        <>
          <Navbar />
          <main>
            <HeroSection />
            <MarqueeSection />
            <CategoriesSection />
            <Suspense fallback={null}>
              <WhyChooseUs />
              <OffersBanner />
              <InstagramSection />
              <TestimonialsSection />
              <LeadFormSection />
              <LocationSection />
            </Suspense>
          </main>
          <Suspense fallback={null}>
            <Footer />
            <WhatsAppButton />
          </Suspense>
        </>
      )}
    </>
  );
};

export default Index;
