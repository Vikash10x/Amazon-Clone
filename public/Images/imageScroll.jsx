import { useRef } from "react";

function Imagescroll() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= sliderRef.current.clientWidth;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += sliderRef.current.clientWidth;
    }
  };

  const images = [
    "public/Images/scroll-image1.jpg",
    "public/Images/scroll-image1.jpg",
    "public/Images/scroll-image3.jpg",
    "public/Images/scroll-image4.jpg",
    "public/Images/scroll-image5.jpg",
    "public/Images/scroll-image6.jpg",
  ];

  return (
    <div className="slider-wrapper">
      <button className="nav left" onClick={scrollLeft}>
        &lt;
      </button>
      <div className="slider" ref={sliderRef}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`slide-${index}`} className="slide" />
        ))}
      </div>

      <button className="nav right" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
}

export default Imagescroll;
