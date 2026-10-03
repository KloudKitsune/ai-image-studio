import "./ImageCard.css";

function ImageCard({ image }) {
  return (
    <article className="image-card">
      <img
        className="image-card__image"
        src={`data:image/jpeg;base64,${image}`}
        alt="AI generated creation"
      />
    </article>
  );
}

export default ImageCard;
