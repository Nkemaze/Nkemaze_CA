import React from "react";
import "../assets/css/footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-1">
        <h2>Ready to Ship with Us?</h2>
        <p>Experience the difference of professional global logistics services</p>
        <div className="btn-1">
          <button className="btn primary">Get Started</button>
          <button className="btn outline">Learn More</button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main container2">
        <div className="footer-col">
          <h3 className="logo">GLOBAL<span>TRACK</span></h3>
          <p>
            Your trusted partner in global logistics and transportation services.
            Delivering excellence in shipping solutions since 2020.
          </p>
          <div className="socials">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/track">Track Package</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-col">
          <h4>Our Services</h4>
          <p>Air Freight</p>
          <p>Sea Freight</p>
          <p>Ground Transport</p>
          <p>Warehousing</p>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>globaltrackteam@gmail.com</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2025 GlobalTrack. All rights reserved.</p>
        <div className="legal">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/faq">FAQ</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
