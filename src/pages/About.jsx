import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  });

  const fetchProperties = async () => {
    try {
      const response = await axios.get("http://localhost:3000/item/dis");
      setProperties(response.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="page-container">
          {properties.length === 0 ? (
            <p>No properties found.</p>
          ) : (
            properties.map((property, index) => (
              <div key={index} className="card">
                <div className="product-details">
                  <h2 className="product-title">{property.title}</h2>
                  <p className="product-description">{property.desc}</p>
                  <div className="product-meta">
                    <span className="location">
                      <i className="fas fa-map-marker-alt"></i> {property.location}
                    </span>
                    <span className="price">
                      ${Number(property.price).toLocaleString()}
                    </span>
                  </div>
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
