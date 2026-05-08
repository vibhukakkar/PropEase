import React from 'react';
import '../index.css';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <div className="property-image-container">
        {property.badge && <span className="property-badge">{property.badge}</span>}
        <img src={property.image} alt={property.title} className="property-image" />
      </div>
      <div className="property-details">
        <p className="property-location">{property.location}</p>
        <h3 className="property-title">{property.title}</h3>
        <div className="property-stats">
          <span>{property.beds} Beds</span>
          <span>{property.baths} Baths</span>
          <span>{property.sqft} sq ft</span>
        </div>
        <div className="property-footer">
          <p className="property-price">{property.price}</p>
          <button className="btn-view">View</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
