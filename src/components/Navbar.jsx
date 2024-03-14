import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo-dime-cleaning.png';
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='navbar'>
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
                <span className="navbar-toggle-icon"></span>
            </button>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                 <li><Link to="/Services" onClick={toggleMenu}>Services</Link></li>
                 <li><Link to="/About" onClick={toggleMenu}>About</Link></li>
                <li><Link to="/Faq" onClick={toggleMenu}>FAQ</Link></li>
                <li><Link to="/Contact" onClick={toggleMenu}>Contact</Link></li>
                {/* <li><Link to="/Impressum" onClick={toggleMenu}>Impressum </Link></li>  */}
            </ul>
        </nav>
    );
}
