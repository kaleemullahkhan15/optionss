
import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;
      
      const heroElement = heroRef.current;
      const bgElement = heroElement.querySelector('.hero-bg') as HTMLElement;
      
      if (bgElement) {
        bgElement.style.transform = `translate(${x * -20}px, ${y * -20}px) scale(1.05)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProperties = () => {
    const propertiesSection = document.getElementById('properties');
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Parallax Effect */}
      <div 
        className="hero-bg absolute inset-0 z-0 transition-transform duration-500 ease-out"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=2000)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.85)',
          transform: 'scale(1.05)',
        }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10 z-10" />
      
      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 py-20 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 inline-block animate-fade-in">
            <span className="bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium">
              Premium Real Estate Solutions
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            Discover Your Dream <br /> 
            <span className="text-option-300">Property Today</span>
          </h1>
          
          <p className="text-xl text-white/80 max-w-xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            Option Associates provides premium real estate services with a focus on quality, trust, and customer satisfaction.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            <a 
              href="#properties" 
              className="bg-option-600 hover:bg-option-700 text-white px-8 py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-medium"
            >
              Explore Properties
            </a>
            <a 
              href="#contact" 
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/20 px-8 py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer opacity-0 animate-fade-in"
        style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}
        onClick={scrollToProperties}
      >
        <div className="flex flex-col items-center">
          <span className="text-white/80 text-sm mb-2">Scroll Down</span>
          <ChevronDown className="text-white w-6 h-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
