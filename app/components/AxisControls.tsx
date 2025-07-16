import React from 'react';

interface AxisControlsProps {
  xUnit: string;
  setXUnit: (value: string) => void;
  xRange: string;
  setXRange: (value: string) => void;
  yUnit: string;
  setYUnit: (value: string) => void;
  yRange: string;
  setYRange: (value: string) => void;
}

const AxisControls: React.FC<AxisControlsProps> = ({
  xUnit,
  setXUnit,
  xRange,
  setXRange,
  yUnit,
  setYUnit,
  yRange,
  setYRange
}) => {
  return (
    <>
      <div className="input-group">
        <label htmlFor="xUnit">X轴单位长度:</label>
        <input
          type="text"
          id="xUnit"
          value={xUnit}
          onChange={(e) => setXUnit(e.target.value)}
          placeholder="例如: 1, π/2, π/4, 0.5"
        />
        <label htmlFor="xRange">X轴范围 (±):</label>
        <input
          type="number"
          id="xRange"
          value={xRange}
          onChange={(e) => setXRange(e.target.value)}
          placeholder="10"
          step="0.1"
        />
      </div>

      <div className="input-group">
        <label htmlFor="yUnit">Y轴单位长度:</label>
        <input
          type="text"
          id="yUnit"
          value={yUnit}
          onChange={(e) => setYUnit(e.target.value)}
          placeholder="例如: 1, π/2, π/4, 0.5"
        />
        <label htmlFor="yRange">Y轴范围 (±):</label>
        <input
          type="number"
          id="yRange"
          value={yRange}
          onChange={(e) => setYRange(e.target.value)}
          placeholder="10"
          step="0.1"
        />
      </div>
    </>
  );
};

export default AxisControls;