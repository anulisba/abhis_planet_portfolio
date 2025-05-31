// Header.jsx
import { useState } from 'react';
import logo from '../assets/logo.png';
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="header-component">
            <div className="header-logo">
                <img src={logo} alt="logo" />
            </div>

            <div className={`header-navbar ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Projects</li>
                    <li>Services</li>
                    <li>Contact Us</li>

                    {/* Mobile button inside sidebar */}
                    <li className="mobile-only book-btn">
                        <button>Book an Appointment
                            <div className="book-btn-hover-effect"></div>
                        </button>
                    </li>
                </ul>
            </div>

            {/* Desktop Button */}
            <div className="desktop-only book-btn">
                <button>Book an Appointment
                    <div className="book-btn-hover-effect"></div>
                </button>
            </div>

            <div className="hamburger-icon" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default Header;