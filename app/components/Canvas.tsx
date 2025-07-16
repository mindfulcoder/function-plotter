import React from 'react';

interface CanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  width: number;
  height: number;
}

const Canvas: React.FC<CanvasProps> = ({ canvasRef, width, height }) => {
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