import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import '../index.css';

const Buy = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('All');

  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=500&q=60",
      badge: "Luxury",
      title: "Modern 4BHK Villa",
      location: "Golf Course Road, Gurgaon",
      beds: 4,
      baths: 4,
      sqft: 3200,
      price: "Rs 6.5 Cr"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=60",
      badge: "Premium",
      title: "Skyline Penthouse",
      location: "Sector 150, Noida",
      beds: 3,
      baths: 3,
      sqft: 2400,
      price: "Rs 4.2 Cr"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=500&q=60",
      badge: "Verified",
      title: "Elegant Builder Floor",
      location: "Vasant Kunj, Delhi",
      beds: 3,
      baths: 2,
      sqft: 1800,
      price: "Rs 2.3 Cr"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=500&q=60",
      badge: "Villa",
      title: "Independent Luxury Villa",
      location: "South City, Gurgaon",
      beds: 5,
      baths: 5,
      sqft: 4500,
      price: "Rs 8.1 Cr"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=500&q=60",
      badge: "Popular",
      title: "Modern Studio Apartment",
      location: "Cyber City, Gurgaon",
      beds: 1,
      baths: 1,
      sqft: 650,
      price: "Rs 95 Lakh"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=500&q=60",
      badge: "Affordable",
      title: "2BHK Smart Flat",
      location: "Dwarka, Delhi",
      beds: 2,
      baths: 2,
      sqft: 1100,
      price: "Rs 78 Lakh"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=500&q=60",
      badge: "Luxury",
      title: "Private Farmhouse",
      location: "Chattarpur, Delhi",
      beds: 6,
      baths: 5,
      sqft: 5200,
      price: "Rs 11 Cr"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=500&q=60",
      badge: "Verified",
      title: "Smart Family Home",
      location: "Sector 79, Gurgaon",
      beds: 4,
      baths: 3,
      sqft: 2600,
      price: "Rs 3.9 Cr"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=500&q=60",
      badge: "Premium",
      title: "Royal 5BHK Mansion",
      location: "Palm Hills, Gurgaon",
      beds: 5,
      baths: 5,
      sqft: 5000,
      price: "Rs 9.5 Cr"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1430285561322-7808604715df?auto=format&fit=crop&w=500&q=60",
      badge: "Studio",
      title: "Stylish Apartment",
      location: "Sector 137, Noida",
      beds: 2,
      baths: 2,
      sqft: 980,
      price: "Rs 1.4 Cr"
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=60",
      badge: "Popular",
      title: "Contemporary Duplex",
      location: "Punjabi Bagh, Delhi",
      beds: 4,
      baths: 4,
      sqft: 3400,
      price: "Rs 5.3 Cr"
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=500&q=60",
      badge: "Lake View",
      title: "Lake Facing Villa",
      location: "Sohna Road, Gurgaon",
      beds: 4,
      baths: 4,
      sqft: 3700,
      price: "Rs 6.8 Cr"
    },
    {
      id: 13,
      image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=500&q=60",
      badge: "Affordable",
      title: "Compact 2BHK Flat",
      location: "Indirapuram, Ghaziabad",
      beds: 2,
      baths: 2,
      sqft: 950,
      price: "Rs 68 Lakh"
    },
    {
      id: 14,
      image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=500&q=60",
      badge: "Luxury",
      title: "Grand Royal Mansion",
      location: "Westend Greens, Delhi",
      beds: 7,
      baths: 6,
      sqft: 6500,
      price: "Rs 14 Cr"
    },
    {
      id: 15,
      image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=500&q=60",
      badge: "Modern",
      title: "Minimalist Smart Home",
      location: "Sector 93, Noida",
      beds: 3,
      baths: 3,
      sqft: 2100,
      price: "Rs 2.8 Cr"
    },
    {
      id: 16,
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=500&q=60",
      badge: "Corner Plot",
      title: "Beautiful Corner House",
      location: "Raj Nagar Extension",
      beds: 4,
      baths: 3,
      sqft: 2800,
      price: "Rs 3.2 Cr"
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = selectedCity === 'All' || property.location.includes(selectedCity);
    return matchesSearch && matchesCity;
  });

  return (
    <div className="buy-container">
      {/* Simple Header */}
      <section className="buy-header">
        <div className="buy-header-content">
          <h1>Find Your Next Premium Home</h1>
          <p>Browse through our handpicked collection of verified luxury properties.</p>
        </div>
      </section>

      {/* Simple Search & Filter Bar */}
      <section className="buy-filter-section">
        <div className="buy-filter-container">
          <div className="buy-search-box">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Search by title or location..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="buy-city-filter">
            <label>City:</label>
            <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
              <option value="All">All Cities</option>
              <option value="Gurgaon">Gurgaon</option>
              <option value="Delhi">Delhi</option>
              <option value="Noida">Noida</option>
              <option value="Ghaziabad">Ghaziabad</option>
            </select>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="buy-results-section">
        <div className="results-info">
          <h2>{filteredProperties.length} Properties Found</h2>
          {selectedCity !== 'All' && <span className="active-filter">City: {selectedCity}</span>}
        </div>

        <div className="homes-grid">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <div className="no-results">
              <h3>No properties match your search.</h3>
              <button className="btn-view" onClick={() => {setSearchTerm(''); setSelectedCity('All');}}>Clear All Filters</button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Buy;
