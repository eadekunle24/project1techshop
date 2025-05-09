import React from 'react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="text-center d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        backgroundColor: '#f5f7fa',
        padding: '140px 20px 80px',
        flexDirection: 'column',
        color: '#1e1e1e'
      }}
    >
      <h1 className="display-5 fw-bold mb-3">ByteFix Tech Repairs</h1>
      <p className="text-secondary mb-4" style={{ maxWidth: '600px' }}>
        Fast, friendly service to keep your devices running smoothly — phones, laptops, PCs, and more.
      </p>
      <div>
        <a href="#services" className="btn btn-dark btn-lg me-3">Book Now</a>
        <a href="#contact" className="btn btn-outline-secondary btn-lg">Get Quote</a>
      </div>
    </section>
  );
}
