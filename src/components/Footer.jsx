import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <div className="footer-brand">FIT<span>ZONE</span></div>
          <p className="footer-tagline">Your journey to fitness starts here. Push harder, go further, be stronger.</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/classes">Classes</Link>
          <Link to="/trainers">Trainers</Link>
        </div>
        <div className="footer-col">
          <h4>Membership</h4>
          <Link to="/membership">Plans & Pricing</Link>
          <Link to="/register">Join Now</Link>
          <Link to="/login">Member Login</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a href="tel:+94112345678">+94 11 234 5678</a>
          <a href="mailto:info@fitzone.com">info@fitzone.com</a>
          <span style={{color:'var(--muted)',fontSize:'.85rem'}}>No. 123, Fitness Street<br/>Kurunegala, Sri Lanka</span>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2025 FitZone Fitness Center — All Rights Reserved
      </div>
    </footer>
  );
}
