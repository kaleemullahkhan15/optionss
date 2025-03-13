
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PropertiesSection from '@/components/PropertiesSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { setupScrollAnimation } from '@/utils/fadeInAnimation';

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    const cleanup = setupScrollAnimation();
    return cleanup;
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Featured Properties Section */}
        <PropertiesSection />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Contact Section */}
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
