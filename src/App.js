import Faq from './components/Faq';
import Pricing from './components/Pricing';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <About />
      <Faq />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
