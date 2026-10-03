import { useState } from "react";
import ImageGenerator from "../ImageGenerator/ImageGenerator";
import ImageGrid from "../ImageGrid/ImageGrid";

function App() {
  const [images, setImages] = useState([]);

  const handleImageGenerated = (image) => {
    setImages((currentImages) => [image, ...currentImages]);
  };

  return (
    <main>
      <ImageGenerator onImageGenerated={handleImageGenerated} />
      <ImageGrid images={images} />
    </main>
  );
}

export default App;
