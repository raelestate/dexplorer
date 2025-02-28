import React, { useState } from 'react';
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import ImageModal from "../components/ImageModal"; // New import

interface Image {
  id: number;
  src: string;
  title: string;
}

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const images: Image[] = [
    { id: 1, src: '/images/img7.jpg', title: 'Image 1' },
    { id: 2, src: '/images/img2.jpg', title: 'Image 2' },
    { id: 3, src: '/images/img3.jpg', title: 'Image 3' },
    { id: 4, src: '/images/img4.jpg', title: 'Image 4' },
    { id: 5, src: '/images/img5.jpg', title: 'Image 5' },
    { id: 6, src: '/images/img6.jpg', title: 'Image 6' },
    { id: 7, src: '/images/img7.jpg', title: 'Image 7' },
    { id: 8, src: '/images/img2.jpg', title: 'Image 8' },
    { id: 9, src: '/images/img3.jpg', title: 'Image 9' },
    { id: 10, src: '/images/img4.jpg', title: 'Image 10' },
    { id: 11, src: '/images/img5.jpg', title: 'Image 11' },
    { id: 12, src: '/images/img6.jpg', title: 'Image 12' },
    { id: 13, src: '/images/img7.jpg', title: 'Image 13' },
    { id: 14, src: '/images/img3.jpg', title: 'Image 14' },
    { id: 15, src: '/images/img4.jpg', title: 'Image 15' },
    { id: 16, src: '/images/img5.jpg', title: 'Image 16' },
    { id: 17, src: '/images/img6.jpg', title: 'Image 17' },
    { id: 18, src: '/images/img7.jpg', title: 'Image 18' },
    { id: 19, src: '/images/img2.jpg', title: 'Image 19' },
    { id: 20, src: '/images/img3.jpg', title: 'Image 20' },
  ];

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Loader />
      <Navbar />
      <HeroSection brand="Gallery" smallText="Check out the" description="Stunning Images" />
      <div className="gallery-container">
        <h1 className="gallery-title">yey</h1>
        <div className="gallery-grid">
          <ImageModal
            image={selectedImage}
            onClose={closeModal}
          />
          <button onClick={() => setSelectedImage(images[4])}>Test Modal</button>

          {images.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => {
                console.log('Image clicked:', image.id); // Debug click
                handleImageClick(image);
              }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="gallery-image"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/fallback-image.jpg'; // Handle broken images
                }}
              />
              <div className="gallery-overlay"></div>
              <span className="gallery-text">{image.title}</span>
            </div>
          ))}
        </div>
      </div>
      <Footer />


    </>
  );
}

export default Gallery;