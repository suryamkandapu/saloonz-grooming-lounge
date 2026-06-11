import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Saloonz</h3>
            <p>The Grooming Lounge — a luxury Indian salon crafting cinematic grooming rituals since 2010.</p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/about">Our Story</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Visit</h4>
            <p>14, Linking Road</p>
            <p>Bandra West, Mumbai 400050</p>
            <p>India</p>
          </div>
          <div className="footer-col">
            <h4>Reach Us</h4>
            <a href="tel:+919999999999">+91 99999 99999</a>
            <a href="mailto:hello@saloonz.in">hello@saloonz.in</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Saloonz. All rights reserved.</span>
          <span>Crafted in Mumbai · Made with intention</span>
        </div>
      </div>
    </footer>
  );
}

export function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-card">
          <h2>Ready for a transformation?</h2>
          <p>Book your luxury grooming experience today and feel the Saloonz difference.</p>
          <Link to="/contact" className="cta-button">Book an Appointment</Link>
        </div>
      </div>
    </section>
  );
}
