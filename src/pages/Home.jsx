import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import '../index.css';

const Home = () => {
  // Sample static property data matching the image
  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      badge: "Popular",
      title: "Fully Furnished City Apartment",
      location: "DLF Phase 3, Gurgaon",
      beds: 3,
      baths: 2,
      sqft: 1450,
      price: "Rs 45,000/mo"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      badge: "Studio",
      title: "Bright Studio Near Metro",
      location: "Sector 62, Noida",
      beds: 1,
      baths: 1,
      sqft: 520,
      price: "Rs 18,000/mo"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1688653802629-5360086bf632?q=80&w=3132",
      badge: "Verified",
      title: "Family Builder Floor",
      location: "Vasant Kunj, Delhi",
      beds: 2,
      baths: 2,
      sqft: 980,
      price: "Rs 32,000/mo"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      badge: "Villa",
      title: "Independent Villa With Lawn",
      location: "Sector 21C, Faridabad",
      beds: 4,
      baths: 3,
      sqft: 2100,
      price: "Rs 55,000/mo"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      badge: "Premium",
      title: "Modern Penthouse with View",
      location: "Sector 43, Gurgaon",
      beds: 3,
      baths: 3,
      sqft: 1800,
      price: "Rs 75,000/mo"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      badge: "Verified",
      title: "Cozy Garden House",
      location: "Sushant Lok, Gurgaon",
      beds: 2,
      baths: 2,
      sqft: 1200,
      price: "Rs 40,000/mo"
    }
  ];

  const [matchCity, setMatchCity] = useState('Gurgaon');
  const [matchBudget, setMatchBudget] = useState('50000');
  const [matchBeds, setMatchBeds] = useState('3 bedroom');
  const [matchCount, setMatchCount] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleMatch = () => {
    // Hardcoded counts based on city
    const hardcodedCounts = {
      'Delhi': 5,
      'Noida': 9,
      'Gurgaon': 12
    };

    setMatchCount(hardcodedCounts[matchCity] || 0);
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-subtitle-green">RENT SMARTER WITH VERIFIED HOMES</p>
          <h1>Find a rental home<br />that fits your life.</h1>
          <p className="hero-desc">Browse furnished apartments, studios, builder floors, and family homes with clear pricing and trusted listings.</p>

          <form className="hero-search-box" onSubmit={handleSearch}>
            <input type="text" placeholder="City, locality, or landmark" className="search-input" />
            <select className="search-select">
              <option>Any home</option>
              <option>Apartment</option>
              <option>Studio</option>
              <option>Villa</option>
            </select>
            <button type="submit" className="btn-search-green">Search Rentals</button>
          </form>

          <div className="hero-stats">
            <div className="stat-card">
              <h3>1,200+</h3>
              <p>Rental homes</p>
            </div>
            <div className="stat-card">
              <h3>48 hrs</h3>
              <p>Average move-in</p>
            </div>
            <div className="stat-card">
              <h3>4.8/5</h3>
              <p>Tenant rating</p>
            </div>
          </div>
        </div>
      </section>


      <section className="explore-city-section">
        <h2>Explore rentals by city</h2>
        <div className="city-pills">
          <button className="city-pill">Gurgaon</button>
          <button className="city-pill">Noida</button>
          <button className="city-pill">Delhi</button>
          <button className="city-pill">Faridabad</button>
        </div>
      </section>

      {/* Smart Rent Match Section */}
      <section className="smart-match-section">
        <h2>Smart Rent Match</h2>
        <p className="smart-match-sub">Enter your needs and PropEase recommends the closest rental using a simple match score.</p>

        <div className="match-container">
          <div className="match-form-card">
            <div className="form-group">
              <label>Preferred city</label>
              <select value={matchCity} onChange={(e) => setMatchCity(e.target.value)}>
                <option>Gurgaon</option>
                <option>Noida</option>
                <option>Delhi</option>
              </select>
            </div>
            <div className="form-group">
              <label>Monthly budget (Rs)</label>
              <input 
                type="number" 
                value={matchBudget} 
                onChange={(e) => setMatchBudget(e.target.value)} 
                placeholder="50000" 
              />
            </div>
            <div className="form-group">
              <label>Bedrooms</label>
              <select value={matchBeds} onChange={(e) => setMatchBeds(e.target.value)}>
                <option>3 bedroom</option>
                <option>2 bedroom</option>
                <option>1 bedroom</option>
              </select>
            </div>
            <button className="btn-match" onClick={handleMatch}>Find My Match</button>
          </div>

          <div className="match-result-card">
            {matchCount === 0 ? (
              <div className="match-placeholder">
                <div className="badge-ready-container">
                  <span className="badge-ready" style={{ backgroundColor: '#ffeded', color: '#e74c3c' }}>No Properties Found</span>
                </div>
                <h3>We couldn't find any matches</h3>
                <p>Try increasing your budget or changing your city preferences to see more results.</p>
                <button className="btn-view" style={{ marginTop: '1rem' }} onClick={() => setMatchCount(null)}>Reset</button>
              </div>
            ) : matchCount > 0 ? (
              <div className="match-success">
                <div className="badge-ready-container">
                  <span className="badge-ready" style={{ backgroundColor: '#e6f4ea', color: '#27ae60' }}>Matches Found!</span>
                </div>
                <div className="match-count-display">
                  <h3 style={{ fontSize: '2.5rem', color: '#27ae60', margin: '1rem 0' }}>{matchCount}</h3>
                  <p style={{ fontSize: '1.2rem', fontWeight: '600', color: '#2c3e50' }}>
                    {matchCount === 1 ? 'Property Available' : 'Properties Available'}
                  </p>
                  <p style={{ color: '#666', marginTop: '0.5rem' }}>
                    in {matchCity} within your budget.
                  </p>
                  <button className="btn-view" style={{ marginTop: '2rem' }}>View All Matches</button>
                </div>
              </div>
            ) : (
              <div className="match-placeholder">
                <div className="badge-ready-container">
                  <span className="badge-ready">Ready</span>
                </div>
                <h3>Your best rental will appear here</h3>
                <p>Click Find My Match to see a recommended home based on city, budget, and bedrooms.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Fresh Homes Section */}
      <section className="fresh-homes-section">
        <h2>6 fresh homes ready for visits</h2>
        <div className="homes-grid">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
