import React from 'react';

interface HighlightItem {
  id: number;
  title?: string;
  description?: string;
  image: string;
  link: string;
}

interface HighlightsProps {
  primaryHighlight: HighlightItem;
  secondaryHighlights: HighlightItem[];
  seeMoreLink?: string;
}

const Highlights: React.FC<HighlightsProps> = ({
  primaryHighlight,
  secondaryHighlights,
  seeMoreLink = "/gallery",
}) => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="highlight_images">
          <div className="highlight_info">
            <h2>Latest Adventures</h2>
          </div>
          <a href={primaryHighlight.link}>
            <div className="highlight_image1">
              <div className="higlight_image_info_holder">
                <h2>{primaryHighlight.title}</h2>
                <p>{primaryHighlight.description}</p>
              </div>
              <figure>
                <img src={primaryHighlight.image} alt={primaryHighlight.title} />
              </figure>
            </div>
          </a>
          <div className="highlight_img_holder">
            {secondaryHighlights.map((item, index) => (
              <a href={item.link} key={item.id}>
                <div className={`highlight_image${index + 2}`}>
                  <figure>
                    <img src={item.image} alt={item.title || "Highlight Image"} />
                  </figure>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="highlight_image_seemore">
          <a href={seeMoreLink}>See More</a>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
