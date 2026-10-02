import "./ImageCard.css";

function ImageCard({ image }) {
  return (
    <article className="image-card">
      <img
        className="image-card__image"
        src={image}
        alt="AI generated creation"
      />
    </article>
  );
}

export default ImageCard;
