import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="text-center bg-white text-dark" data-aos="fade-up">
      <div className="container">
        <h2 className="mb-4 fw-bold">Get In Touch</h2>
        <p className="lead text-secondary mb-4">
          Need a repair or have a question? Reach out today.
        </p>

        <a href="mailto:info@bytefix.com" className="btn btn-dark btn-lg mb-5">
          Email Us
        </a>

        <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm" style={{ maxWidth: '100%', marginTop: '40px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0291274520034!2d-122.41941538468166!3d37.77492977975967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a0a45729%3A0xdea1b0176c7e3c7b!2sTech%20Shop!5e0!3m2!1sen!2sus!4v1689100000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            title="ByteFix Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
