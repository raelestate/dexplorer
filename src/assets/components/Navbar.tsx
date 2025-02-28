import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            <nav className="nav-mobile fixed_section">

                <div className="navbar">
                    
                    <div className="nav-container">
                        <div className="nav_logo">
                            <h2 id="logo">dëxplorer</h2>
                        </div>
                        <input
                            className="checkbox"
                            type="checkbox"
                            checked={isOpen}
                            onChange={toggleMenu}
                        />
                        
                        <div className="hamburger-lines" onClick={toggleMenu}>
                            <span className="line line1"></span>
                            <span className="line line3"></span>
                        </div>
                        
                        <div className={`menu-items ${isOpen ? 'open' : ''}`}>
                            <li className={isActive('/') ? 'active' : ''}><a href="/">Home</a></li>
                            <li className={isActive('/about') ? 'active' : ''}><a href="/about">About</a></li>
                            <li className={isActive('/blogs') ? 'active' : ''}><a href="/blogs">Blogs</a></li>
                            <li className={isActive('/gallery') ? 'active' : ''}><a href="/gallery">Gallery</a></li>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="navbar-desktop fixed_section">
                <div className="nav_logo">
                    <h2 id="logo">dëxplorer</h2>
                </div>
                <ul className="nav-links">
                    <li className={isActive('/') ? 'active' : ''}><a href="/">Home</a></li>
                    <li className={isActive('/about') ? 'active' : ''}><a href="/about">About</a></li>
                    <li className={isActive('/blogs') ? 'active' : ''}><a href="/blogs">Blogs</a></li>
                    <li className={isActive('/gallery') ? 'active' : ''}><a href="/gallery">Gallery</a></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
