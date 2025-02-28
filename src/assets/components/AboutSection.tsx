import React from 'react';

interface AboutSectionProps {
  videoSrc?: string;
  videoTitle?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  videoSrc = "videos/video.mp4",
  videoTitle = "My Adventures",
  description = "Hi, I’m Nick. I’m passionate about travel, adventure, and storytelling. Through Dexplorer, I share my experiences, insights, and tips to help you embark on your own adventures.",
  imageSrc = "images/img1.JPG",
  imageAlt = "About Image",
}) => {
  return (
    <section id="about">
      <div className="about_video">
        <video src={videoSrc} autoPlay loop muted playsInline />
        <div className="about_video_info">
          <h2>{videoTitle}</h2>
        </div>
      </div>
      <div className="container">
        <div className="about_holder">
          <div className="about_info">
            <p>{description}</p>
          </div>
          <div className="about_images">
            <a href="#">
              <div className="image1">
                <figure>
                  <img src={imageSrc} alt={imageAlt} />
                </figure>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
