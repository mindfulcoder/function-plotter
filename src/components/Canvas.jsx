import React from 'react';

const Canvas = ({ canvasRef, width, height }) => {
  return (
    <div className="canvas-container">
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
      />
    </div>
  );
};

export default Canvas;