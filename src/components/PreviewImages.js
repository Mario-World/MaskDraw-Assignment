// src/components/PreviewImages.js
import React from "react";

function PreviewImages({ original, mask }) {
  return (
    <div style={{ display: "flex", marginTop: "20px" }}>
      <div style={{ marginRight: "20px" }}>
        <h3>Original Image</h3>
        <img
          src={original}
          alt="Original"
          style={{ maxWidth: "300px", border: "1px solid #ccc" }}
        />
      </div>
      <div>
        <h3>Mask Image</h3>
        <img
          src={mask}
          alt="Mask"
          style={{ maxWidth: "300px", border: "1px solid #ccc" }}
        />
      </div>
    </div>
  );
}

export default PreviewImages;
