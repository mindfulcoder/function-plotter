import React from 'react';

interface FunctionData {
  id: number;
  expression: string;
  color: string;
  visible: boolean;
}

interface FunctionItemProps {
  func: FunctionData;
  onToggle: (id: number) => void;
  onUpdateColor: (id: number, color: string) => void;
  onUpdateExpression: (id: number, expression: string) => void;
  onRemove: (id: number) => void;
  canRemove: boolean;
}

const FunctionItem: React.FC<FunctionItemProps> = ({
  func,
  onToggle,
  onUpdateColor,
  onUpdateExpression,
  onRemove,
  canRemove
}) => {
  return (
    <div className="function-item">
      <input
        type="checkbox"
        checked={func.visible}
        onChange={() => onToggle(func.id)}
        className="function-checkbox"
      />
      <input
        type="color"
        value={func.color}
        onChange={(e) => onUpdateColor(func.id, e.target.value)}
        className="color-picker"
      />
      <input
        type="text"
        value={func.expression}
        onChange={(e) => onUpdateExpression(func.id, e.target.value)}
        className="function-input"
        placeholder="函数表达式"
      />
      <button
        onClick={() => onRemove(func.id)}
        className="remove-button"
        disabled={!canRemove}
      >
        删除
      </button>
    </div>
  );
};

export default FunctionItem;