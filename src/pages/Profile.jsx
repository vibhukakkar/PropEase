import React, { useState } from 'react';
import '../index.css';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'Aarav Sharma',
    email: 'aarav@example.com',
    phone: '+91 98765 43210',
    location: 'Gurgaon, Haryana',
    role: 'Home Buyer'
  });

  const [formData, setFormData] = useState(user);
  const [isEditing, setIsEditing] = useState(false);

  const savedProperties = [
    'Modern 3BHK Apartment',
    'Luxury Villa',
    'Premium Studio'
  ];

  const nameParts = user.name.split(' ');
  const firstNameInitial = nameParts[0][0];
  let initials = firstNameInitial;

  if (nameParts.length > 1) {
    const lastNameInitial = nameParts[1][0];
    initials = firstNameInitial + lastNameInitial;
  }

  const handleEditClick = () => {
    setFormData(user);
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSave = (event) => {
    event.preventDefault();
    setUser(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(user);
    setIsEditing(false);
  };

  return (
    <section className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">{initials}</div>
          <div>
            <h2>{user.name}</h2>
            <p>{user.role}</p>
          </div>
        </div>

        {isEditing ? (
          <form className="profile-form" onSubmit={handleSave}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>

            <label>
              Role
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>

            <label>
              Phone
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </label>

            <label>
              Location
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </label>

            <div className="profile-actions">
              <button className="profile-button" type="submit">
                Save
              </button>
              <button className="profile-button profile-button-light" type="button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className="profile-details">
              <div className="profile-info">
                <span>Email</span>
                <p>{user.email}</p>
              </div>
              <div className="profile-info">
                <span>Phone</span>
                <p>{user.phone}</p>
              </div>
              <div className="profile-info">
                <span>Location</span>
                <p>{user.location}</p>
              </div>
            </div>

            <button className="profile-button" type="button" onClick={handleEditClick}>
              Edit Profile
            </button>
          </>
        )}
      </div>

      <div className="profile-card">
        <h3>Saved Properties</h3>
        <ul className="saved-list">
          {savedProperties.map((property) => (
            <li key={property}>{property}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Profile;
