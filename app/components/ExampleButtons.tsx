import React from 'react';

interface FunctionData {
  id: number;
  expression: string;
  color: string;
  visible: boolean;
}

interface ExampleSettings {
  xUnit?: string;
  yUnit?: string;
  xRange?: string;
  yRange?: string;
}

interface Example {
  name?: string;
  functions?: FunctionData[];
  settings?: ExampleSettings;
}

interface ExampleButtonsProps {
  onSelectExample: (example: Example) => void;
}

const ExampleButtons: React.FC<ExampleButtonsProps> = ({ onSelectExample }) => {
  const examples: Example[] = [
    {
      name: 'x²',
      functions: [{ id: 1, expression: 'x^2', color: '#007bff', visible: true }],
      settings: { xUnit: '1', yUnit: '1', xRange: '5', yRange: '10' }
    },
    {
      name: 'sin(x) & cos(x)',
      functions: [
        { id: 1, expression: 'sin(x)', color: '#007bff', visible: true },
        { id: 2, expression: 'cos(x)', color: '#dc3545', visible: true }
      ],
      settings: { xUnit: 'π/4', yUnit: '0.5', xRange: '8', yRange: '2' }
    },
    {
      name: '多项式对比',
      functions: [
        { id: 1, expression: 'x^2', color: '#007bff', visible: true },
        { id: 2, expression: 'x^3', color: '#dc3545', visible: true },
        { id: 3, expression: 'sqrt(x)', color: '#28a745', visible: true }
      ],
      settings: { xUnit: '1', yUnit: '1', xRange: '3', yRange: '5' }
    },
    {
      name: '频率对比',
      functions: [
        { id: 1, expression: 'sin(x)', color: '#007bff', visible: true },
        { id: 2, expression: 'sin(2*x)', color: '#dc3545', visible: true },
        { id: 3, expression: 'sin(x/2)', color: '#28a745', visible: true }
      ],
      settings: { xUnit: 'π/2', yUnit: '0.5', xRange: '8', yRange: '2' }
    },
    {
      name: '对数 & 指数',
      functions: [
        { id: 1, expression: 'log(x)', color: '#007bff', visible: true },
        { id: 2, expression: 'exp(x)', color: '#dc3545', visible: true }
      ],
      settings: { xUnit: '1', yUnit: '1', xRange: '5', yRange: '5' }
    }
  ];

  const unitExamples: Example[] = [
    { name: 'X轴: π/2', settings: { xUnit: 'π/2', yUnit: '1' } },
    { name: 'X轴: π/4', settings: { xUnit: 'π/4', yUnit: '0.5' } },
    { name: 'X轴: π', settings: { xUnit: 'π', yUnit: '1' } },
    { name: '精细网格', settings: { xUnit: '0.5', yUnit: '0.5' } },
    { name: '粗糙网格', settings: { xUnit: '2', yUnit: '2' } }
  ];

  return (
    <div className="examples">
      <h3>示例函数:</h3>
      <div className="example-buttons">
        {examples.map((example, index) => (
          <button
            key={index}
            onClick={() => onSelectExample(example)}
          >
            {example.name}
          </button>
        ))}
      </div>

      <h3>单位设置示例:</h3>
      <div className="example-buttons">
        {unitExamples.map((example, index) => (
          <button
            key={index}
            onClick={() => onSelectExample(example)}
          >
            {example.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExampleButtons;