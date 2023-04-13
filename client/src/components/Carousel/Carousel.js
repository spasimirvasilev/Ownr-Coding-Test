import { useState, useEffect } from "react";
import { ReactComponent as Left } from "assets/left.svg";
import { ReactComponent as Right } from "assets/right.svg";
import "./Carousel.css";

const Carousel = ({ images, loading }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setCurrentImage(0);
  }, [loading]);

  const previousImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      {images.length === 0 ? (
        <p className="no-photos" data-testid="no-photos">
          no photos
        </p>
      ) : (
        <>
          <span
            className="arrow"
            onClick={previousImage}
            data-testid="left-arrow"
          >
            <Left />
          </span>
          <img
            className="carousel-image"
            src={images[currentImage]}
            alt={`animal-${currentImage}`}
            data-testid="carousel-image"
          />
          <span className="arrow" onClick={nextImage} data-testid="right-arrow">
            <Right />
          </span>
        </>
      )}
    </div>
  );
};

export default Carousel;
