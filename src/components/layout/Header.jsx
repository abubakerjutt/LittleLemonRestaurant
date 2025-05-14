import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "../../assets/css/Header.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            <img src="/logo/logo.png" alt="Little Lemon" className="logo-img" />
          </Link>
        </div>
        <button
          className="mobile-menu-toggle"
          aria-label="Toggle menu"
          onClick={toggleMobileMenu}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <nav className={`nav ${mobileMenuOpen ? "active" : ""}`}>
          {mobileMenuOpen && (
            <button
              className="mobile-menu-close"
              aria-label="Close menu"
              onClick={closeMobileMenu}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/menu" className="nav-link" onClick={closeMobileMenu}>
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/reservations"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                Reservations
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/order" className="nav-link" onClick={closeMobileMenu}>
                Order
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className="nav-link login-link"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
            <li className="nav-item cart-nav-item">
              <Link
                to="/order"
                className="nav-link cart-icon-link"
                onClick={closeMobileMenu}
              >
                <div className="cart-icon-container">
                  <i className="fas fa-shopping-cart"></i>
                  {getTotalItems() > 0 && (
                    <span className="cart-count">{getTotalItems()}</span>
                  )}
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        {mobileMenuOpen && (
          <div className="overlay" onClick={closeMobileMenu}></div>
        )}
      </div>
    </header>
  );
};

export default Header;
