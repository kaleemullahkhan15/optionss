
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-display font-semibold mb-6">
              Option<span className="text-option-400">Associates</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Premium real estate services focused on quality, trust, and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-option-600 transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-option-600 transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-option-600 transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-option-600 transition-colors duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Properties', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Property Sales', 
                'Property Management', 
                'Consulting', 
                'Market Analysis', 
                'Investment Guidance'
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <address className="not-italic text-gray-400 space-y-3">
              <p>Office # 402, 4th Floor, Imperial Square</p>
              <p>E-11/2 Markaz, Islamabad Pakistan</p>
              <p>Phone: +92 345 5577772</p>
              <p>Email: info@optionassociates.com</p>
            </address>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} Option Associates. All rights reserved.</p>
          <p className="mt-2 text-sm flex items-center justify-center">
            Made with <Heart size={14} className="mx-1 text-red-500" /> by Option Associates Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
