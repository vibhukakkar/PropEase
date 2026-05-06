import React from 'react';
import '../index.css';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} className="property-image" />
      <div className="property-details">
        <h3>{property.title}</h3>
        <p className="property-location">📍 {property.location}</p>
        <p className="property-price">💰 {property.price}</p>
        <button className="btn-view">View Details</button>
      </div>
    </div>
  );
};

export default PropertyCard;
