import React from 'react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="text-center d-flex flex-column align-items-center justify-content-center px-3"
      style={{
        minHeight: '100vh',
        backgroundColor: '#f5f7fa',
        paddingTop: '140px',
        paddingBottom: '80px',
        color: '#1e1e1e'
      }}
    >
      <h1 className="fw-bold mb-3 display-5">ByteFix Tech Repairs</h1>
      <p className="lead text-secondary mb-4" style={{ maxWidth: '600px' }}>
        Fast, friendly service to keep your devices running smoothly — phones, laptops, PCs, and more.
      </p>
      <div className="d-flex flex-column flex-sm-row gap-3">
        <a href="#services" className="btn btn-dark btn-lg">
          Book Now
        </a>
        <a href="#contact" className="btn btn-outline-secondary btn-lg">
          Get Quote
        </a>
      </div>
    </section>
  );
}
