import React from 'react';

export default function Faq() {
  return (
    <section id="faq" className="bg-white text-dark" data-aos="fade-up">
      <div className="container">
        <h2 className="mb-4 fw-bold text-center">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          {[
            ['How long do most repairs take?', 'Most common repairs are completed within 1–2 hours. More complex issues may take longer.'],
            ['Do you repair water-damaged devices?', 'Yes, we do — and we’ll give you a no-obligation quote before proceeding.'],
            ['Do I need an appointment?', 'Walk-ins are welcome, but appointments guarantee faster service.']
          ].map(([q, a], i) => (
            <div className="accordion-item border-0 mb-3" key={i}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${i}`}
                >
                  {q}
                </button>
              </h2>
              <div
                id={`collapse${i}`}
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-secondary">{a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
