import React, { useState } from 'react';

export default function Pricing() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="pricing" className="bg-white text-dark text-center" data-aos="fade-up">
      <div className="container">
        <h2 className="mb-4 fw-bold">Service Pricing</h2>
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle shadow-sm">
            <thead className="table-light">
              <tr>
                <th>Service</th>
                <th>Estimated Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Phone Screen Replacement</td>
                <td>£60–£120</td>
              </tr>
              <tr>
                <td>Laptop Cleanup & Tune-Up</td>
                <td>£40</td>
              </tr>
              <tr>
                <td>Custom PC Build (Labour Only)</td>
                <td>£80–£150</td>
              </tr>
              {showMore && (
                <>
                  <tr>
                    <td>Battery Replacement</td>
                    <td>£35–£70</td>
                  </tr>
                  <tr>
                    <td>Software Installation / OS Reinstall</td>
                    <td>£30</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
        <button
          className="btn btn-outline-secondary mt-3"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </section>
  );
}
