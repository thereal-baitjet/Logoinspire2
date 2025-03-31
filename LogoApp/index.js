import React from 'react';
import { useEffect } from 'react';

function Home() {
  return (
    <React.StrictMode>
      <div className="container">
        <h1>Logo Showcase</h1>

        {/* Filter section */}
        <section className="filter-section">
          <button onClick={() => filterAll()} > All Logos </button>
          <button onClick={() => filterByCategory('brand')} > Brand Identity </button>
          <button onClick={() => filterByCategory('service')} > Service Logos </button>
        </section>

        {/* Categories */}
        {getCategories().map(category => (
          <button 
            key={category}
            onClick={() => setCategory(category)}
            className={`filter-btn ${category.toLowerCase()}`}
          >
            Show logos of type: {category}
          </button>
        ))}

        {/* Featured Logos */}
        {getFeaturedLogos().map(logo => (
          <>
            <img 
              src={logo.image} 
              alt="Logo {logo.id}" 
              className="lazy-crop"
            />
            <h3>Logo Name: {logo.name}</h3>
            <p>Category: {logo.category}</p>
            <button onClick={() => removeLogo(logo.id)} > Remove </button>
          </>
        ))}
      </div>
    </React.StrictMode>
  );
}

function getCategories() {
  return ['all', 'brand', 'service'];
}

function setCategory(category) {
  // Handle category filtering logic
}

function getFeaturedLogos() {
  // Fetch and return featured logo data
}

function removeLogo(id) {
  // Remove logo functionality
}
