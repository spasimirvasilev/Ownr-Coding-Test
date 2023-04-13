import { useState, useRef } from "react";
import { ReactComponent as Left } from "./left.svg";
import { ReactComponent as Right } from "./right.svg";
import "./Carousel.css";

const Carousel = ({ images, loading }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const imageRef = useRef(null);

  const previousImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      {images.length === 0 ? (
        <p className="no-photos">no photos</p>
      ) : (
        <>
          <span className="arrow" onClick={previousImage}>
            <Left />
          </span>
          <img
            ref={imageRef}
            className="carousel-image"
            src={images[currentImage]}
            alt=""
          />
          <span className="arrow" onClick={nextImage}>
            <Right />
          </span>
        </>
      )}
    </div>
  );
};

export default Carousel;
