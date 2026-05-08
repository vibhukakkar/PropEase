import React from 'react';
import PropertyCard from '../components/PropertyCard';
import '../index.css';

const Buy = () => {
  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      title: "Luxury 4BHK Villa",
      location: "Sector 50, Gurgaon",
      price: "₹4.2 Cr"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
      title: "Modern 3BHK Apartment",
      location: "Dwarka, Delhi",
      price: "₹1.8 Cr"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      title: "Independent House",
      location: "Sonipat, Haryana",
      price: "₹95 Lakh"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
      title: "Premium Penthouse",
      location: "Noida Sector 137",
      price: "₹3.8 Cr"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      title: "2BHK Budget Flat",
      location: "Ghaziabad",
      price: "₹55 Lakh"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      title: "Farmhouse",
      location: "Karnal Highway",
      price: "₹2.5 Cr"
    }
  ];

  return (
    <div className="page-container">
      <h2>Buy Properties</h2>

      <div className="property-grid">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Buy;

