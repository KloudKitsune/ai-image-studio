import { useState } from "react";
import ImageGenerator from "../ImageGenerator/ImageGenerator";
import ImageGrid from "../ImageGrid/ImageGrid";

function App() {
  const [images, setImages] = useState([]);

  const handleImageGenerated = (image) => {
    setImages((currentImages) => [image, ...currentImages]);
  };

  const handleImageDelete = (imageToDelete) => {
    setImages((currentImages) =>
      currentImages.filter((image) => image !== imageToDelete),
    );
  };

  return (
    <main>
      <ImageGenerator onImageGenerated={handleImageGenerated} />
      <ImageGrid images={images} onImageDelete={handleImageDelete} />
    </main>
  );
}

export default App;
