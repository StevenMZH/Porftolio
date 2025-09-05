import { useState, useEffect, useRef } from "react";

export function ImageCarousel({ images, onImageChange }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManual, setIsManual] = useState(false); // controla si es manual
  const intervalRef = useRef(null);

  const changeImage = (newIndex) => {
    setCurrentIndex(newIndex);
    if (onImageChange) onImageChange(newIndex); // notifica al padre
  };

  const prevImage = () => {
    setIsManual(true); // ahora es manual
    changeImage(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextImage = () => {
    setIsManual(true); // ahora es manual
    changeImage(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  // inicializa auto-slide solo si no está en modo manual
  useEffect(() => {
    if (!isManual) {
      intervalRef.current = setInterval(() => {
        changeImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isManual, images.length]);

  return (
    <div className="carousel">
      <img
        src={`projects/${images[currentIndex]}`}
        alt={`slide-${currentIndex}`}
        className="card-img"
      />
      <button className="carousel-btn left" onClick={prevImage}>◀</button>
      <button className="carousel-btn right" onClick={nextImage}>▶</button>
    </div>
  );
}

export default ImageCarousel;
