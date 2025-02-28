import React from "react";
import Navbar from "./Navbar";

interface HeroSectionProps {
  brand?: string;
  smallText?: string;
  description?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  brand = "dëxplorer",
  smallText = "Discover the World with",
  description = "Join me on journeys to the hidden corners of the globe – from vibrant cities to untouched nature."
}) => {
  return (
    <section id="hero_section">
      <Navbar />
      <div className="container">
        <div className="hero_info">
          <h2>
            <small>{smallText}</small>
            <span>{brand}</span>
          </h2>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
