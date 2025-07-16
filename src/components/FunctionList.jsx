import React from 'react';
import FunctionItem from './FunctionItem.jsx';

const FunctionList = ({
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