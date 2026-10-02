import ImageCard from "./ImageCard";
import "./ImageGrid.css";

function ImageGrid() {
  const images = [
    "https://placehold.co/400x400",
    "https://placehold.co/400x400",
    "https://placehold.co/400x400",
  ];

  return (
    <section className="image-grid">
      <h2 className="image-grid__title">Your Creations</h2>

      <div className="image-grid__container">
        {images.map((image, index) => (
          <ImageCard key={index} image={image} />
        ))}
      </div>
    </section>
  );
}

export default ImageGrid;
