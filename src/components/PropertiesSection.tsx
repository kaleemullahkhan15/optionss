
import { useState, useEffect } from 'react';
import PropertyCard from '@/components/PropertyCard';

// Property data interface
interface Property {
  id: number;
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  featured?: boolean;
}

const PropertiesSection = () => {
  // Property data based on makaansolutions.com with updated image URLs
  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      title: 'Gulberg Luxury Apartment',
      location: 'Gulberg, Lahore',
      price: 'PKR 1.95 Cr',
      beds: 3,
      baths: 2,
      sqft: 1450,
      featured: true
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      title: 'DHA Phase 5 Villa',
      location: 'DHA Phase 5, Lahore',
      price: 'PKR 3.75 Cr',
      beds: 5,
      baths: 4,
      sqft: 2800,
      featured: false
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      title: 'Bahria Town Luxury House',
      location: 'Bahria Town, Lahore',
      price: 'PKR 2.50 Cr',
      beds: 4,
      baths: 3,
      sqft: 2200,
      featured: true
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      title: 'Johar Town Modern Home',
      location: 'Johar Town, Lahore',
      price: 'PKR 1.85 Cr',
      beds: 3,
      baths: 2,
      sqft: 1800,
      featured: false
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      title: 'Model Town House',
      location: 'Model Town, Lahore',
      price: 'PKR 2.25 Cr',
      beds: 4,
      baths: 3,
      sqft: 2100,
      featured: false
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      title: 'Cantt Luxury Apartment',
      location: 'Cantt, Lahore',
      price: 'PKR 1.65 Cr',
      beds: 3,
      baths: 2,
      sqft: 1600,
      featured: false
    }
  ];

  return (
    <section id="properties" className="py-20 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block px-3 py-1 bg-option-100 text-option-800 rounded-full text-sm font-medium mb-4">Our Properties</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Discover <span className="text-gradient">Featured</span> Properties
          </h2>
          <p className="text-lg text-gray-600">
            Browse our handpicked selection of premium properties in the most desirable locations.
          </p>
        </div>
        
        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard
              key={property.id}
              {...property}
              delay={index * 100}
            />
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12 reveal">
          <a 
            href="#" 
            className="inline-flex items-center bg-option-600 hover:bg-option-700 text-white px-8 py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Properties
          </a>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
