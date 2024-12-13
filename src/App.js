// src/App.js
import React from "react";
import ImageUploader from "./components/ImageUploader";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Image Inpainting Widget</h1>
      <p>Upload an image to see Magic mask</p>
      <ImageUploader />
    </div>
  );
}

export default App;
