import React from 'react';

interface TravelGuide {
  id: number;
  title?: string;
  subtitle?: string;
  image: string;
  link: string;
}

interface TravelGuidesProps {
  guides?: TravelGuide[];
}

const defaultGuides: TravelGuide[] = [
  {
    id: 1,
    title: "Sailing Between Skylines",
    subtitle: "Adventures on Land and Sea",
    image: "images/img6.jpg",
    link: "#",
  },
  {
    id: 2,
    image: "images/img7.jpg",
    link: "#",
  },
];

const TravelGuides: React.FC<TravelGuidesProps> = ({ guides = defaultGuides }) => {
  return (
    <section id="travel_guides">
      <div className="container">
        <div className="travel_guide_info">
          <h2>Travel Guides</h2>
        </div>
        <div className="travel_guide_img_holder">
          {guides.map((guide, index) => (
            <a href={guide.link} key={guide.id}>
              <div className={`travel_guide_img${index + 1}`}>
                {(guide.title || guide.subtitle) && (
                  <div className="travel_guide_img_info">
                    {guide.title && <h2>{guide.title}</h2>}
                    {guide.subtitle && <p>{guide.subtitle}</p>}
                  </div>
                )}
                <figure>
                  <img src={guide.image} alt={guide.title || "Travel Guide Image"} />
                </figure>
              </div>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TravelGuides;
