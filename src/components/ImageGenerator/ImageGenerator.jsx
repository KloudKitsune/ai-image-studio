import { useState } from "react";
import "./ImageGenerator.css";

function ImageGenerator() {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(prompt);
  };

  return (
    <section className="image-generator">
      <div className="image-generator__content">
        <h1 className="image-generator__title">Create Anything with AI</h1>
        <p className="image-generator__subtitle">
          Describe an image and let AI bring your idea to life.
        </p>
        <form className="image-generator__form" onSubmit={handleSubmit}>
          <input
            className="image-generator__input"
            type="text"
            placeholder="Describe the image you want to create..."
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
          />

          <button className="image-generator__button" type="submit">
            Generate
          </button>
        </form>
      </div>
    </section>
  );
}
export default ImageGenerator;
