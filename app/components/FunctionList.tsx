import React from 'react';
import FunctionItem from './FunctionItem';

interface FunctionData {
  id: number;
  expression: string;
  color: string;
  visible: boolean;
}

interface FunctionListProps {
  functions: FunctionData[];
  onToggleFunction: (id: number) => void;
  onUpdateFunctionColor: (id: number, color: string) => void;
  onUpdateFunction: (id: number, expression: string) => void;
  onRemoveFunction: (id: number) => void;
}

const FunctionList: React.FC<FunctionListProps> = ({
  functions,
  onToggleFunction,
  onUpdateFunctionColor,
  onUpdateFunction,
  onRemoveFunction
}) => {
  return (
    <div className="functions-list">
      <h3>函数列表:</h3>
      {functions.map(func => (
        <FunctionItem
          key={func.id}
          func={func}
          onToggle={onToggleFunction}
          onUpdateColor={onUpdateFunctionColor}
          onUpdateExpression={onUpdateFunction}
          onRemove={onRemoveFunction}
          canRemove={functions.length > 1}
        />
      ))}
    </div>
  );
};

export default FunctionList;