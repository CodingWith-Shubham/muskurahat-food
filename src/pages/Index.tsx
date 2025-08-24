import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import MenuSection from '@/components/MenuSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CharitySection from '@/components/CharitySection';
import FounderVision from '@/components/FounderVision';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <HeroSection />
      <MenuSection />
      <GallerySection />
      <TestimonialsSection />
      <CharitySection />
      <FounderVision />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
