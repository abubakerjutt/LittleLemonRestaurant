import { Link } from "react-router-dom";
import "../../assets/css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img
                src="/logo/logo-footer.png"
                alt="Little Lemon"
                className="footer-logo-img"
              />
              <span className="footer-logo-text">Little Lemon</span>
            </div>
            <div className="footer-about">
              <p>
                Little Lemon is a charming Mediterranean restaurant specializing
                in authentic recipes served with a modern twist. Our
                family-owned establishment offers a cozy atmosphere for dining
                and memorable culinary experiences.
              </p>
            </div>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>NAVIGATION</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <i className="fas fa-info-circle"></i> About
                </Link>
              </li>
              <li>
                <Link to="/menu">
                  <i className="fas fa-utensils"></i> Menu
                </Link>
              </li>
              <li>
                <Link to="/reservations">
                  <i className="far fa-calendar-alt"></i> Reservations
                </Link>
              </li>
              <li>
                <Link to="/order">
                  <i className="fas fa-shopping-bag"></i> Order Online
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <i className="fas fa-sign-in-alt"></i> Login
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>CONTACT US</h3>
            <ul className="footer-links footer-contact">
              <li>
                <i className="fas fa-phone-alt"></i>
                (312) 555-8765
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                info@littlelemon.com
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                123 Mediterranean Street, Chicago, IL 60642
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>OPENING HOURS</h3>
            <ul className="footer-links">
              <li>
                <i className="far fa-clock"></i> Monday - Friday: 11:00 AM -
                10:00 PM
              </li>
              <li>
                <i className="far fa-clock"></i> Saturday - Sunday: 10:00 AM -
                11:00 PM
              </li>
              <li>
                <i className="fas fa-glass-cheers"></i> Happy Hour: Daily 4:00
                PM - 6:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Little Lemon Restaurant. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
