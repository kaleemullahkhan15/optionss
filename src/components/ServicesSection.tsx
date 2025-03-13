
import { Home, Building, Key, HeartHandshake, Calendar, PieChart } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

// Service data interface
interface Service {
  id: number;
  icon: any; // LucideIcon type
  title: string;
  description: string;
}

const ServicesSection = () => {
  // Sample services data
  const services = [
    {
      id: 1,
      icon: Home,
      title: 'Property Sales',
      description: 'Our experts will help you find your dream home or sell your property at the best price.'
    },
    {
      id: 2,
      icon: Building,
      title: 'Property Management',
      description: 'We take care of your property, from tenant screening to maintenance and rent collection.'
    },
    {
      id: 3,
      icon: Key,
      title: 'Rental Services',
      description: 'Find your perfect rental property or secure reliable tenants for your investment.'
    },
    {
      id: 4,
      icon: HeartHandshake,
      title: 'Investment Guidance',
      description: 'Strategic advice for real estate investments that maximize your returns.'
    },
    {
      id: 5,
      icon: Calendar,
      title: 'Property Consultation',
      description: 'Expert advice on property decisions, renovations, and market trends.'
    },
    {
      id: 6,
      icon: PieChart,
      title: 'Market Analysis',
      description: 'Detailed market insights and property valuation to make informed decisions.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block px-3 py-1 bg-option-100 text-option-800 rounded-full text-sm font-medium mb-4">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Comprehensive <span className="text-gradient">Real Estate</span> Services
          </h2>
          <p className="text-lg text-gray-600">
            We offer a wide range of services to meet all your real estate needs.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              {...service}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
