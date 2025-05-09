import React from 'react';

export default function Navbar() {
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
        color: '#1e1e1e',
        position: 'relative'
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand fw-bold" href="#hero">
          ByteFix
        </a>
        <ul className="navbar-nav flex-row gap-3 mb-0">
          {[
            ['Services', '#services'],
            ['About', '#about'],
            ['Reviews', '#testimonials'],
            ['Contact', '#contact']
          ].map(([text, href], i) => (
            <li className="nav-item" key={i}>
              <a className="nav-link px-3 py-1" href={href}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
