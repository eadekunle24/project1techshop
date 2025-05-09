import React from 'react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white text-dark text-center">
      <div className="container">
        <h2 className="mb-4 fw-bold">What Customers Say</h2>
        <div className="row g-4">
          {[
            ["Fixed my phone screen same-day. Super helpful!", "Tanya L."],
            ["They built my gaming PC from scratch. Runs perfectly.", "Mark R."],
            ["Laptop was so slow — now it's fast and clean. A+.", "Ahmed K."]
          ].map(([quote, name], i) => (
            <div className="col-md-4" key={i}>
              <div className="card bg-white p-4 shadow-sm border-0 h-100">
                <p className="text-secondary">"{quote}"</p>
                <h6 className="text-dark mt-3 fw-semibold">– {name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
