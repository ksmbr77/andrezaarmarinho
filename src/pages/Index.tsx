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
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        setLoading(false);
      }, 400);
    }, 1500);
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
