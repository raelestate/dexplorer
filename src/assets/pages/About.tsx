import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

interface AboutPageContent {
  heroSection: {
    brand: string;
    smallText: string;
    description: string;
  };
  aboutMe: {
    title: string;
    paragraphs: string[];
  };
  journey: {
    title: string;
    items: {
      title: string;
      content: string;
    }[];
  };
  mission: {
    title: string;
    paragraphs: string[];
  };
  contact: {
    title: string;
    description: string;
    email: string;
    instagram: string;
    twitter: string;
  };
  footer: {
    text: string;
  };
}

interface AboutPageProps {
  content?: AboutPageContent;
}

const defaultContent: AboutPageContent = {
  heroSection: {
    brand: "About",
    smallText: "Welcome to",
    description: "All About Me",
  },
  aboutMe: {
    title: "About Me",
    paragraphs: [
      "Hello, I’m Nick, a passionate traveler, adventurer, and storyteller. My journey began at a young age, fueled by an insatiable curiosity about the world and its diverse cultures.",
      "Over the years, I’ve explored bustling cities, serene landscapes, and hidden corners of nature that few have witnessed. Every experience has enriched my perspective and inspired me to share my adventures with you.",
      "From savoring street food in Asia to trekking remote mountain trails in South America, my travels have transformed my life—and I hope they inspire you to embark on your own adventures.",
    ],
  },
  journey: {
    title: "My Journey",
    items: [
      {
        title: "Early Beginnings",
        content:
          "My passion for travel was ignited during childhood when I spent countless hours dreaming of far-off lands. That curiosity eventually blossomed into a lifelong pursuit of discovery.",
      },
      {
        title: "Adventures Across Continents",
        content:
          "I’ve ventured across continents, immersing myself in local traditions, sampling unique cuisines, and connecting with people from all walks of life. Each adventure has taught me valuable lessons and enriched my understanding of the world.",
      },
      {
        title: "A Life of Discovery",
        content:
          "Every new destination brings with it a sense of wonder and the promise of new experiences. Whether it’s the serene beauty of untouched nature or the vibrant energy of urban life, my travels continue to shape who I am.",
      },
    ],
  },
  mission: {
    title: "My Mission",
    paragraphs: [
      "My mission is to empower others to break free from their routines and explore the world. I believe that travel opens our eyes to different perspectives, fosters empathy, and creates memories that last a lifetime.",
      "Through detailed travel guides, captivating stories, and immersive photography, I strive to make your travel planning easier and your journeys more meaningful.",
    ],
  },
  contact: {
    title: "Get in Touch",
    description:
      "I love connecting with fellow travelers and adventure enthusiasts. Whether you have questions about my travels, need tips for your next trip, or just want to share your own stories, feel free to reach out.",
    email: "nick@example.com",
    instagram: "@dëxplorer",
    twitter: "@dëxplorer",
  },
  footer: {
    text: "© 2025 dëxplorer. All rights reserved. Designed and Developed by Rael",
  },
};

const AboutPage: React.FC<AboutPageProps> = ({ content = defaultContent }) => {
  return (
    <>
      <Loader />
      <Navbar />
      <HeroSection
        brand={content.heroSection.brand}
        smallText={content.heroSection.smallText}
        description={content.heroSection.description}
      />

      {/* About Me Section */}
      <section id="about_me">
        <div className="container">
          <h2>{content.aboutMe.title}</h2>
          {content.aboutMe.paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </section>

      {/* My Journey Section */}
      <section id="my_journey">
        <div className="container">
          <h2>{content.journey.title}</h2>
          <div className="journey_content">
            {content.journey.items.map((item, index) => (
              <div className="journey_item" key={index}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Mission Section */}
      <section id="my_mission">
        <div className="container">
          <h2>{content.mission.title}</h2>
          {content.mission.paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact_info">
        <div className="container">
          <h2>{content.contact.title}</h2>
          <p>{content.contact.description}</p>
          <ul>
            <li>
              Email:{" "}
              <a href={`mailto:${content.contact.email}`}>
                {content.contact.email}
              </a>
            </li>
            <li>
              Instagram:{" "}
              <a
                href={`https://instagram.com/${content.contact.instagram.replace(
                  "@",
                  ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.contact.instagram}
              </a>
            </li>
            <li>
              Twitter:{" "}
              <a
                href={`https://twitter.com/${content.contact.twitter.replace(
                  "@",
                  ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.contact.twitter}
              </a>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;
