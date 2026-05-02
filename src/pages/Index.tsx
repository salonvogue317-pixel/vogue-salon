import Header from "@/components/vogue/Header";
import HeroSection from "@/components/vogue/HeroSection";
import ServicesSection from "@/components/vogue/ServicesSection";
import SignatureShowcase from "@/components/vogue/SignatureShowcase";
import AboutSection from "@/components/vogue/AboutSection";
import GallerySection from "@/components/vogue/GallerySection";
import ReviewsSection from "@/components/vogue/ReviewsSection";
import ContactSection from "@/components/vogue/ContactSection";
import Footer from "@/components/vogue/Footer";
import FloatingCallButton from "@/components/vogue/FloatingCallButton";
import ScrollProgress from "@/components/vogue/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <SignatureShowcase />
        <AboutSection />
        <GallerySection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
