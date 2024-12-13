// src/components/BrushControls.js
import React from "react";

function BrushControls({ brushSize, onBrushSizeChange }) {
  return (
    <div style={{ margin: "10px 0" }}>
      <label>
        Brush Size:
        <input
          type="range"
          min="1"
          max="50"
          value={brushSize}
          onChange={(e) => onBrushSizeChange(Number(e.target.value))}
          style={{ marginLeft: "10px" }}
        />
      </label>
    </div>
  );
}

export default BrushControls;
