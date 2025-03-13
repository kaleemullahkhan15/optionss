
import { Award, Users, Clock, BadgeCheck } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block px-3 py-1 bg-option-100 text-option-800 rounded-full text-sm font-medium mb-4">About Us</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            We're Committed to <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Option Associates is a premier real estate agency with years of experience in helping clients find their dream properties.
          </p>
        </div>
        
        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side Image */}
          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1000" 
                alt="About Option Associates" 
                className="rounded-xl subtle-shadow object-cover h-[500px] w-full"
              />
              
              {/* Stats Card Overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white glass-card rounded-xl p-6 subtle-shadow max-w-xs">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <h4 className="text-3xl font-semibold text-option-600 mb-1">15+</h4>
                    <p className="text-sm text-gray-600">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-3xl font-semibold text-option-600 mb-1">650+</h4>
                    <p className="text-sm text-gray-600">Properties Sold</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-3xl font-semibold text-option-600 mb-1">150+</h4>
                    <p className="text-sm text-gray-600">Happy Clients</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-3xl font-semibold text-option-600 mb-1">24+</h4>
                    <p className="text-sm text-gray-600">Awards Won</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side Content */}
          <div className="space-y-8 reveal" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-2xl font-semibold text-gray-900">
              Bringing the Best Real Estate Solutions Since 2008
            </h3>
            <p className="text-gray-600">
              At Option Associates, we believe in providing exceptional service to our clients. 
              Our team of experienced professionals is dedicated to helping you find the perfect 
              property that meets your needs and exceeds your expectations.
            </p>
            
            {/* Features */}
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-option-100 rounded-full text-option-600">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">Award-Winning Service</h4>
                  <p className="text-gray-600 text-sm">Our exceptional service has been recognized with multiple industry awards.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-option-100 rounded-full text-option-600">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">Expert Team</h4>
                  <p className="text-gray-600 text-sm">Our team of professionals has extensive knowledge of the local real estate market.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-option-100 rounded-full text-option-600">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">Fast & Efficient</h4>
                  <p className="text-gray-600 text-sm">We value your time and work efficiently to meet your deadlines.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-option-100 rounded-full text-option-600">
                  <BadgeCheck size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">Quality Guaranteed</h4>
                  <p className="text-gray-600 text-sm">We ensure the highest quality standards in all of our properties and services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
