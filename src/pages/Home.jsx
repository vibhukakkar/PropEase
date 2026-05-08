import React from 'react';
import PropertyCard from '../components/PropertyCard';
import '../index.css';

const Home = () => {
  // Sample static property data
  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      title: "Modern 3BHK Apartment",
      location: "DLF Phase 3, Gurgaon",
      price: "₹45,000/month"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      title: "Luxury Villa",
      location: "Sector 150, Noida",
      price: "₹3.5 Cr"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1570129477492-45c008acadce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      title: "Cozy Builder Floor",
      location: "Vasant Kunj, Delhi",
      price: "₹25,000/month"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      title: "Spacious 4BHK House",
      location: "Golf Course Extension, Gurgaon",
      price: "₹5.2 Cr"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      title: "Premium Studio",
      location: "Sector 62, Noida",
      price: "₹15,000/month"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      title: "Independent House",
      location: "South Extension, Delhi",
      price: "₹4.8 Cr"
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Find Your Dream Home with PropEase</h1>
          <p>Discover the best properties for sale and rent in your city.</p>
          <form className="hero-search" onSubmit={handleSearch}>
            <input type="text" placeholder="Search by location, property type..." />
            <button type="submit" className="btn-search">Search</button>
          </form>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="properties-section">
        <h2>Featured Properties</h2>
        <div className="properties-grid">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
