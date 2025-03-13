
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-sm py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <h1 className="text-2xl font-display font-semibold text-gray-900">
            Option<span className="text-option-600">Associates</span>
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'Properties', 'Services', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 font-medium hover:text-option-600 transition-colors duration-200 text-sm tracking-wide"
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-option-600 hover:bg-option-700 text-white px-5 py-2 rounded-md transition-all duration-200 text-sm font-medium tracking-wide"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-white/95 backdrop-blur-lg z-40 md:hidden transition-transform duration-300 ease-in-out flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ top: '60px' }}
      >
        <nav className="flex flex-col space-y-6 p-8 text-center">
          {['Home', 'Properties', 'Services', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-gray-800 text-lg font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-option-600 text-white px-6 py-3 rounded-md mx-auto"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
