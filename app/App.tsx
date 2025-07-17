"use client"
import React, {useState, useRef, useEffect, RefObject} from 'react';
import FunctionInput from './components/FunctionInput';
import AxisControls from './components/AxisControls';
import FunctionList from './components/FunctionList';
import Canvas from './components/Canvas';
import ExampleButtons from './components/ExampleButtons';
import { useMathParser } from './hooks/useMathParser';
import { CanvasRenderer } from './utils/canvasRenderer';
import './App.css';

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
    functions?: FunctionData[];
    settings?: ExampleSettings;
}

const FunctionPlotter: React.FC = () => {
    const canvasRef:RefObject<HTMLCanvasElement|null> = useRef<HTMLCanvasElement>(null);
    const [functions, setFunctions] = useState<FunctionData[]>([
        { id: 1, expression: 'sin(x)', color: '#007bff', visible: true }
    ]);
    const [newExpression, setNewExpression] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [xUnit, setXUnit] = useState<string>('1');
    const [yUnit, setYUnit] = useState<string>('1');
    const [xRange, setXRange] = useState<string>('10');
    const [yRange, setYRange] = useState<string>('10');

    // 预定义颜色
    const colors: string[] = ['#007bff', '#dc3545', '#28a745', '#ffc107', '#6f42c1', '#fd7e14', '#20c997', '#e83e8c'];

    // 坐标系参数
    const canvasWidth = 800;
    const canvasHeight = 600;

    const { parseUnit, evaluateFunction } = useMathParser();

    const xUnitValue = parseUnit(xUnit);
    const yUnitValue = parseUnit(yUnit);
    const xRangeValue = parseFloat(xRange) || 10;
    const yRangeValue = parseFloat(yRange) || 10;

    const xMin = -xRangeValue;
    const xMax = xRangeValue;
    const yMin = -yRangeValue;
    const yMax = yRangeValue;

    // 重新绘制画布
    const redraw = (): void => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const config = {
            canvasWidth,
            canvasHeight,
            xMin,
            xMax,
            yMin,
            yMax,
            xUnitValue,
            yUnitValue
        };

        const renderer = new CanvasRenderer(canvas, config);
        renderer.clear();
        renderer.drawAxes();

        let hasError = false;
        let errorMessage = '';

        // 绘制所有可见的函数
        functions.forEach(func => {
            if (func.visible && func.expression.trim()) {
                try {
                    renderer.plotFunction(evaluateFunction, func.expression, func.color);
                } catch (e) {
                    hasError = true;
                    errorMessage = e instanceof Error ? e.message : 'Unknown error';
                }
            }
        });

        setError(hasError ? errorMessage : '');
    };

    useEffect(() => {
        redraw();
    }, [functions, xUnit, yUnit, xRange, yRange, redraw]);

    // 添加新函数
    const addFunction = (): void => {
        if (!newExpression.trim()) return;

        const newId = Math.max(...functions.map(f => f.id), 0) + 1;
        const colorIndex = functions.length % colors.length;

        setFunctions([...functions, {
            id: newId,
            expression: newExpression,
            color: colors[colorIndex],
            visible: true
        }]);
        setNewExpression('');
    };

    // 删除函数
    const removeFunction = (id: number): void => {
        setFunctions(functions.filter(f => f.id !== id));
    };

    // 切换函数可见性
    const toggleFunction = (id: number): void => {
        setFunctions(functions.map(f =>
            f.id === id ? { ...f, visible: !f.visible } : f
        ));
    };

    // 更新函数表达式
    const updateFunction = (id: number, expression: string): void => {
        setFunctions(functions.map(f =>
            f.id === id ? { ...f, expression } : f
        ));
    };

    // 更新函数颜色
    const updateFunctionColor = (id: number, color: string): void => {
        setFunctions(functions.map(f =>
            f.id === id ? { ...f, color } : f
        ));
    };

    // 处理示例选择
    const handleExampleSelect = (example: Example): void => {
        if (example.functions) {
            setFunctions(example.functions);
        }
        if (example.settings) {
            const { xUnit: newXUnit, yUnit: newYUnit, xRange: newXRange, yRange: newYRange } = example.settings;
            if (newXUnit !== undefined) setXUnit(newXUnit);
            if (newYUnit !== undefined) setYUnit(newYUnit);
            if (newXRange !== undefined) setXRange(newXRange);
            if (newYRange !== undefined) setYRange(newYRange);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        redraw();
    };

    return (
        <div className="function-plotter">
            <h1>函数图像绘制器</h1>

            <form onSubmit={handleSubmit} className="input-form">
                <FunctionInput
                    newExpression={newExpression}
                    setNewExpression={setNewExpression}
                    onAddFunction={addFunction}
                />

                <AxisControls
                    xUnit={xUnit}
                    setXUnit={setXUnit}
                    xRange={xRange}
                    setXRange={setXRange}
                    yUnit={yUnit}
                    setYUnit={setYUnit}
                    yRange={yRange}
                    setYRange={setYRange}
                />

                {error && <div className="error">{error}</div>}
            </form>

            <FunctionList
                functions={functions}
                onToggleFunction={toggleFunction}
                onUpdateFunctionColor={updateFunctionColor}
                onUpdateFunction={updateFunction}
                onRemoveFunction={removeFunction}
            />

            <Canvas
                canvasRef={canvasRef}
                width={canvasWidth}
                height={canvasHeight}
            />

            <ExampleButtons onSelectExample={handleExampleSelect} />
        </div>
    );
};

export default FunctionPlotter;