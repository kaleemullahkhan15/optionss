
import { useState } from 'react';
import { Building2, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block px-3 py-1 bg-option-100 text-option-800 rounded-full text-sm font-medium mb-4">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Get in <span className="text-gradient">Touch</span> With Us
          </h2>
          <p className="text-lg text-gray-600">
            Have questions or want to schedule a viewing? Reach out to us and our team will get back to you shortly.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            <div className="bg-option-50/50 backdrop-blur-sm rounded-xl p-8 h-full">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-option-100 rounded-full text-option-600">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">Our Office</h4>
                    <p className="text-gray-600">Option Associates Real Estate</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-option-100 rounded-full text-option-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">Office # 402, 4th Floor, Imperial Square,<br />E-11/2 Markaz, Islamabad Pakistan</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-option-100 rounded-full text-option-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+92 345 5577772</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-option-100 rounded-full text-option-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@optionassociates.com</p>
                  </div>
                </div>
              </div>
              
              {/* Map or Additional Image */}
              <div className="mt-8 rounded-lg overflow-hidden subtle-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000" 
                  alt="Office" 
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="reveal" style={{ transitionDelay: '200ms' }}>
            <div className="bg-white rounded-xl p-8 border border-gray-100 subtle-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-option-500 focus:border-transparent transition-all duration-200"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-option-500 focus:border-transparent transition-all duration-200"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-option-500 focus:border-transparent transition-all duration-200"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-option-500 focus:border-transparent transition-all duration-200"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-option-600 hover:bg-option-700 text-white py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
