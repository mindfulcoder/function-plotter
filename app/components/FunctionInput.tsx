import React from 'react';

interface FunctionInputProps {
  newExpression: string;
  setNewExpression: (value: string) => void;
  onAddFunction: () => void;
}

const FunctionInput: React.FC<FunctionInputProps> = ({ 
  newExpression, 
  setNewExpression, 
  onAddFunction 
}) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onAddFunction();
    }
  };

  return (
    <div className="input-group">
      <label htmlFor="newExpression">添加新函数:</label>
      <input
        type="text"
        id="newExpression"
        value={newExpression}
        onChange={(e) => setNewExpression(e.target.value)}
        placeholder="例如: x^2, sin(x), log(x), sqrt(x)"
        onKeyPress={handleKeyPress}
      />
      <button type="button" onClick={onAddFunction}>
        添加函数
      </button>
    </div>
  );
};

export default FunctionInput;