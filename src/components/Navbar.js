import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg py-3 px-4"
      style={{
        width: '98%',
        maxWidth: '1400px',
        margin: '20px auto',
        backgroundColor: '#ffffff',
        border: '1px solid #dee2e6',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
        position: 'relative',
        zIndex: 999
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-dark" href="#hero">
          ByteFix
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            {[
              ['Services', '#services'],
              ['Pricing', '#pricing'],
              ['About', '#about'],
              ['FAQ', '#faq'],
              ['Contact', '#contact']
            ].map(([text, href], i) => (
              <li className="nav-item" key={i}>
                <a className="nav-link text-dark px-3" href={href}>
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
