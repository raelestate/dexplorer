import React from 'react';

interface FooterLink {
  name: string;
  url: string;
}

interface FooterProps {
  currentYear?: number;
  brandName?: string;
  tagline?: string;
  designedBy?: string;
  navLinks?: FooterLink[];
}

const Footer: React.FC<FooterProps> = ({
  currentYear = new Date().getFullYear(),
  brandName = "dëxplorer.",
  tagline = "Your Passport to Adventure: Every Journey Tells a Story.",
  designedBy = "Rael",
  navLinks = [
    { name: "HOME", url: "/" },
    { name: "ABOUT", url: "/about" },
    { name: "BLOGS", url: "/blogs" },
    { name: "GALLERY", url: "/gallery" },
    { name: "INSTAGRAM", url: "/" },
  ],
}) => {
  return (
    <footer>
      <div className="container">
        <div className="footer_holder">
          <div className="footer_flex_holder">
            <div className="footer_info">
              <h2>
                <q>{brandName}</q> – {tagline}
              </h2>
            </div>
            <div className="footer_nav">
              <ul>
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer_flex_holder2">
            <div className="footer_text">
              <h2 className="flicker-text">{brandName}</h2>
            </div>
            <div className="footer_copyright">
              <p>
                &copy; {currentYear} {brandName} All rights reserved. Designed and Developed by {designedBy}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
