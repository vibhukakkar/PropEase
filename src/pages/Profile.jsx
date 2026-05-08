import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import '../index.css';

const Profile = () => {
  const [isProfileSetup, setIsProfileSetup] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    location: 'Delhi',
    role: 'Member',
    memberSince: 'May 2026',
    bio: 'No bio added yet.'
  });

  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  // Sample data for the saved properties
  const savedProperties = [
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
    }
  ];

  const handleSetupSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      setUser(formData);
      setIsProfileSetup(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUser(formData);
    setIsEditing(false);
  };

  const getInitials = (name) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  if (!isProfileSetup) {
    return (
      <div className="onboarding-container">
        <div className="onboarding-card fade-in">
          <div className="onboarding-header">
            <h1>Create Your Profile</h1>
            <p>Join PropEase to save properties and get smart recommendations.</p>
          </div>
          <form className="onboarding-form" onSubmit={handleSetupSubmit}>
            <div className="form-group-pro">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group-pro">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group-pro">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="+91 00000 00000"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn-setup-pro">Create Professional Profile</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container fade-in">
      {/* Sidebar / User Info */}

      <aside className="profile-sidebar">
        <div className="user-card-pro">
          <div className="user-avatar-large">{getInitials(user.name)}</div>
          <div className="user-meta">
            <h2>{user.name}</h2>
            <span className="user-badge-pro">{user.role}</span>
            <p className="member-date">Member since {user.memberSince}</p>
          </div>

          <div className="user-contact-list">
            <div className="contact-item">
              <span className="icon">📧</span>
              <span>{user.email}</span>
            </div>
            <div className="contact-item">
              <span className="icon">📱</span>
              <span>{user.phone}</span>
            </div>
            <div className="contact-item">
              <span className="icon">📍</span>
              <span>{user.location}</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="profile-main-content">
        {/* Section 1: Overview */}
        <section className="profile-section-pro fade-in">
          <div className="content-header">
            <h1>Welcome back, {user.name.split(' ')[0]}!</h1>
            <p>Your professional real estate dashboard overview.</p>
          </div>

          <div className="stats-grid-pro">
            <div className="stat-box-pro">
              <h3>{savedProperties.length}</h3>
              <p>Saved Listings</p>
            </div>
            <div className="stat-box-pro">
              <h3>12</h3>
              <p>Recent Views</p>
            </div>
            <div className="stat-box-pro">
              <h3>3</h3>
              <p>Inquiries Sent</p>
            </div>
          </div>

          <div className="profile-bio-section">
            <h3>Profile Bio</h3>
            <p>hello user, Welcome To Propease</p>
          </div>
        </section>

        {/* Section 2: Saved Properties */}
        <section className="profile-section-pro fade-in" style={{ marginTop: '4rem' }}>
          <div className="content-header">
            <h1>Saved Properties</h1>
            <p>Homes you've marked as favorites.</p>
          </div>
          <div className="saved-properties-grid-pro">
            {savedProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>

      </main>


    </div>
  );
};

export default Profile;
