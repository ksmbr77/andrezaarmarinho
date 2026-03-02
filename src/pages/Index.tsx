import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import CategoriesSection from "@/components/CategoriesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import OffersBanner from "@/components/OffersBanner";
import InstagramSection from "@/components/InstagramSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadFormSection from "@/components/LeadFormSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(() => {
        setLoading(false);
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
        requestAnimationFrame(() => {
          document.getElementById('hero')?.scrollIntoView();
        });
      }, 500);
    }, 2000);
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
            <WhyChooseUs />
            <OffersBanner />
            <InstagramSection />
            <TestimonialsSection />
            <LeadFormSection />
            <LocationSection />
          </main>
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </>
  );
};

export default Index;
