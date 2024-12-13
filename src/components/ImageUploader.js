import React, { useState } from "react";
import CanvasDraw from "react-canvas-draw";
import PreviewImages from "./PreviewImages";
import BrushControls from "./BrushControls";

function ImageUploader() {
  const [image, setImage] = useState(null);
  const [brushSize, setBrushSize] = useState(10);
  const [maskImage, setMaskImage] = useState(null);
  const [canvasRef, setCanvasRef] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid JPEG or PNG image.");
    }
  };

  const handleSaveMask = () => {
    if (canvasRef) {
      // Get the drawing and background canvas layers
      const drawingCanvas = canvasRef.canvas.drawing;

      // Create a new temporary canvas
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = drawingCanvas.width;
      tempCanvas.height = drawingCanvas.height;
      const tempCtx = tempCanvas.getContext("2d");

      // Fill the canvas with a black background
      tempCtx.fillStyle = "#000000";
      tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

      // Overlay the white brush strokes from the drawing canvas
      tempCtx.drawImage(drawingCanvas, 0, 0);

      // Export the final mask image
      const mask = tempCanvas.toDataURL("image/png");
      setMaskImage(mask);
    }
  };

  const handleClearCanvas = () => {
    if (canvasRef) canvasRef.clear();
    setMaskImage(null);
  };

  return (
    <div>
      {/* Upload Button */}
      <input
        type="file"
        accept="image/jpeg, image/png"
        onChange={handleImageUpload}
        style={{ marginBottom: "10px" }}
      />

      {/* Brush Controls */}
      <BrushControls
        brushSize={brushSize}
        onBrushSizeChange={setBrushSize}
      />

      {/* Drawing Canvas */}
      {image && (
        <div>
          <CanvasDraw
            ref={(canvas) => setCanvasRef(canvas)}
            imgSrc={image} // Uploaded image as the canvas background
            brushColor="#ffffff" // White color for the mask
            backgroundColor="#000000" // Black color for the canvas
            lazyRadius={0} // Immediate brush stroke
            brushRadius={brushSize} // Dynamically adjustable brush size
            canvasWidth={600}
            canvasHeight={400}
          />
          <div style={{ marginTop: "10px" }}>
            <button onClick={handleSaveMask}>Save Mask</button>
            <button onClick={handleClearCanvas}>Clear Canvas</button>
          </div>
        </div>
      )}

      {/* Display Previews */}
      {image && maskImage && <PreviewImages original={image} mask={maskImage} />}
    </div>
  );
}

export default ImageUploader;
