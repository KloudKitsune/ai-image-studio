import ImageCard from "./ImageCard";
import "./ImageGrid.css";

function ImageGrid({ images, onImageDelete }) {
  return (
    <section className="image-grid">
      <h2 className="image-grid__title">Your Creations</h2>

      {images.length === 0 ? (
        <p className="image-grid__empty">
          No creations yet. Describe an image above to get started.
        </p>
      ) : (
        <div className="image-grid__container">
          {images.map((image) => (
            <ImageCard key={image} image={image} onDelete={onImageDelete} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ImageGrid;
