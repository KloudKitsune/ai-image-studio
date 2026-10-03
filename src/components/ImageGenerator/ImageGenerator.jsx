import { useState } from "react";
import "./ImageGenerator.css";

function ImageGenerator({ onImageGenerated }) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!prompt.trim()) {
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/images", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to generate image");
      }

      onImageGenerated(data.image);
      setPrompt("");
    } catch (error) {
      console.error("Image generation error:", error);
    }
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
