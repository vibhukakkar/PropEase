import React from 'react';
import '../index.css';

const Rent = () => {
  const rentProperties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      tag: "Near Metro",
      title: "Luxury 3BHK Apartment",
      location: "DLF Phase 2, Gurgaon",
      price: "Rs 42,000/mo",
      features: ["Verified", "Furnished", "Gym Access"],
      area: "1650 sqft"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      tag: "Pet Friendly",
      title: "Cozy Garden Studio",
      location: "Sector 45, Gurgaon",
      price: "Rs 22,000/mo",
      features: ["Verified", "Park Facing", "Private Entry"],
      area: "750 sqft"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      tag: "Budget Friendly",
      title: "Smart 1BHK Flat",
      location: "Sector 62, Noida",
      price: "Rs 15,000/mo",
      features: ["Verified", "New Construction", "24/7 Security"],
      area: "620 sqft"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1536376074432-bf121770b48a?auto=format&fit=crop&w=800&q=80",
      tag: "Premium",
      title: "Skyline Penthouse",
      location: "Golf Course Road, Gurgaon",
      price: "Rs 85,000/mo",
      features: ["Verified", "Terrace Garden", "Club House"],
      area: "2800 sqft"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      tag: "Verified",
      title: "Modern Builder Floor",
      location: "Defence Colony, Delhi",
      price: "Rs 65,000/mo",
      features: ["Verified", "Balcony", "Power Backup"],
      area: "1800 sqft"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
      tag: "Fully Furnished",
      title: "Artist Studio Space",
      location: "Hauz Khas, Delhi",
      price: "Rs 35,000/mo",
      features: ["Verified", "Designer Interior", "Cafe Nearby"],
      area: "900 sqft"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
      tag: "Family Choice",
      title: "Spacious 4BHK Home",
      location: "Sector 15, Faridabad",
      price: "Rs 45,000/mo",
      features: ["Verified", "Large Kitchen", "Parking"],
      area: "2400 sqft"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80",
      tag: "Near Metro",
      title: "Minimalist 2BHK Flat",
      location: "Dwarka, Delhi",
      price: "Rs 28,000/mo",
      features: ["Verified", "Natural Light", "Gated Community"],
      area: "1150 sqft"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
      tag: "Verified",
      title: "Executive Suite",
      location: "Cyber City, Gurgaon",
      price: "Rs 55,000/mo",
      features: ["Verified", "Workstation", "High Speed WiFi"],
      area: "1300 sqft"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1464121427114-18c718dfcc38?auto=format&fit=crop&w=800&q=80",
      tag: "Budget Friendly",
      title: "Compact 1BHK Studio",
      location: "Sector 137, Noida",
      price: "Rs 12,000/mo",
      features: ["Verified", "Low Maintenance", "Market Nearby"],
      area: "550 sqft"
    }
  ];

  return (
    <div className="rent-page-container">
      {/* Visual Header without filters */}
      <section className="rent-lifestyle-header">
        <div className="rent-header-text">
          <h1>Find Your Perfect Rental</h1>
          <p>Browse our curated collection of 10 verified homes across Delhi NCR.</p>
        </div>
      </section>

      {/* Horizontal Property Listings */}
      <section className="rent-listings-section">
        <div className="listings-header">
          <h2>Latest Available Rentals</h2>
          <span>{rentProperties.length} Premium Homes Found</span>
        </div>

        <div className="rent-list-container">
          {rentProperties.map(property => (
            <div key={property.id} className="rent-list-item fade-in">
              <div className="rent-item-image">
                <img src={property.image} alt={property.title} />
                <span className="rent-tag">{property.tag}</span>
              </div>
              <div className="rent-item-details">
                <div className="rent-item-main">
                  <h3>{property.title}</h3>
                  <p className="rent-location">📍 {property.location}</p>
                  <p className="rent-area">📐 {property.area}</p>
                  <div className="rent-features">
                    {property.features.map(f => (
                      <span key={f} className="feature-chip">{f}</span>
                    ))}
                  </div>
                </div>
                <div className="rent-item-side">
                  <div className="rent-price-box">
                    <span className="price">{property.price}</span>
                    <span className="period">Excl. Maintenance</span>
                  </div>
                  <button className="btn-visit">Schedule Visit</button>
                  <button className="btn-view-details-light">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Rent;
