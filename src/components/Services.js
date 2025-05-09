import React from 'react';

export default function Services() {
  return (
    <section id="services" className="bg-white text-dark text-center py-5 px-3">
      <div className="container">
        <h2 className="fw-bold mb-5" data-aos="fade-up">Our Services</h2>
        <div className="row g-4">
          {[
            ['Phone Repairs', 'Cracked screens, battery replacements, and diagnostics.'],
            ['Laptop Tune-Ups', 'Speed up slow devices with upgrades and cleanups.'],
            ['Custom PC Builds', 'Gaming, editing, or office — built to your needs.'],
            ['Accessories & Parts', 'Chargers, keyboards, cases and more.']
          ].map(([title, desc], i) => (
            <div className="col-12 col-md-6" key={i}>
              <div
                className="card bg-white h-100 shadow-sm border-0 p-4"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <h5 className="fw-semibold">{title}</h5>
                <p className="text-secondary">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
