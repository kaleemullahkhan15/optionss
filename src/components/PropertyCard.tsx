
import { Building2, MapPin, BedDouble, Bath, Square } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  featured?: boolean;
  delay?: number;
}

const PropertyCard = ({ 
  image, 
  title, 
  location, 
  price, 
  beds, 
  baths, 
  sqft,
  featured = false,
  delay = 0
}: PropertyCardProps) => {
  return (
    <div 
      className="property-card reveal rounded-xl overflow-hidden bg-white border border-gray-100 subtle-shadow hover:shadow-lg transition-all duration-500"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Property Image */}
      <div className="relative overflow-hidden">
        <AspectRatio ratio={4/3}>
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            onError={(e) => {
              // Fallback to a placeholder if image fails to load
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80';
            }}
          />
        </AspectRatio>
        {featured && (
          <div className="absolute top-4 left-4 bg-option-600 text-white text-xs font-medium px-2 py-1 rounded">
            Featured
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-24 pointer-events-none" />
      </div>
      
      {/* Property Details */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{title}</h3>
          <span className="text-option-600 font-semibold">{price}</span>
        </div>
        
        <div className="flex items-center text-gray-500 mb-4">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="border-t border-gray-100 pt-4 mt-2">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <BedDouble size={16} className="mr-1" />
              <span>{beds} Beds</span>
            </div>
            <div className="flex items-center">
              <Bath size={16} className="mr-1" />
              <span>{baths} Baths</span>
            </div>
            <div className="flex items-center">
              <Square size={16} className="mr-1" />
              <span>{sqft} sqft</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
