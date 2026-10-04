import { useEffect } from "react";
import "./DeleteModal.css";

function DeleteModal({ image, onCancel, onConfirm }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onCancel();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onCancel]);

  return (
    <div className="delete-modal" onClick={onCancel}>
      <div
        className="delete-modal__content"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className="delete-modal__title">Delete this image?</h2>

        <img
          className="delete-modal__image"
          src={`data:image/jpeg;base64,${image}`}
          alt="Image selected for deletion"
        />

        <p className="delete-modal__message">This action cannot be undone.</p>

        <div className="delete-modal__actions">
          <button
            className="delete-modal__cancel"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="delete-modal__confirm"
            type="button"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
