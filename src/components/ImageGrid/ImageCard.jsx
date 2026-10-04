import { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import "./ImageCard.css";

function ImageCard({ image, onDelete }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDeleteConfirm = () => {
    onDelete(image);
    setShowDeleteModal(false);
  };

  return (
    <>
      <article className="image-card">
        <img
          className="image-card__image"
          src={`data:image/jpeg;base64,${image}`}
          alt="AI generated creation"
        />

        <button
          className="image-card__delete"
          type="button"
          onClick={() => setShowDeleteModal(true)}
        >
          Delete
        </button>
      </article>

      {showDeleteModal && (
        <DeleteModal
          image={image}
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={handleDeleteConfirm}
        />
      )}
    </>
  );
}

export default ImageCard;
