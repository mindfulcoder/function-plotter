# CSS到Tailwind CSS样式映射文档

## 概述
本文档详细记录了App.css中每个样式类到Tailwind CSS的转换映射，确保迁移过程中保持完全一致的视觉效果。

## 主要容器样式

### .function-plotter
```css
/* 原始CSS */
.function-plotter {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

/* Tailwind CSS */
className="max-w-4xl mx-auto p-5 font-sans"
```

### h1 (全局标题)
```css
/* 原始CSS */
h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 2.5em;
  font-weight: bold;
}

/* Tailwind CSS */
className="text-center text-gray-700 mb-8 text-4xl font-bold"
```

## 表单相关样式

### .input-form
```css
/* 原始CSS */
.input-form {
  margin-bottom: 20px;
}

/* Tailwind CSS */
className="mb-5"
```

### .input-group
```css
/* 原始CSS */
.input-group {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

/* Tailwind CSS */
className="flex items-center gap-2.5 mb-2.5"

/* 响应式版本 */
className="flex items-center gap-2.5 mb-2.5 md:flex-row flex-col md:items-center items-stretch"
```

### .input-group label
```css
/* 原始CSS */
.input-group label {
  font-weight: bold;
  min-width: 120px;
  margin-right: 10px;
}

/* Tailwind CSS */
className="font-bold min-w-[120px] mr-2.5 md:min-w-[120px] min-w-auto md:mb-0 mb-1.5"
```

### .input-group input
```css
/* 原始CSS */
.input-group input {
  flex: 1;
  padding: 8px 12px;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  min-width: 100px;
}
.input-group input:focus {
  outline: none;
  border-color: #007bff;
}

/* Tailwind CSS */
className="flex-1 px-3 py-2 border-2 border-gray-300 rounded text-base min-w-[100px] focus:outline-none focus:border-blue-600"
```

### .input-group button
```css
/* 原始CSS */
.input-group button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
.input-group button:hover {
  background-color: #0056b3;
}

/* Tailwind CSS */
className="px-4 py-2 bg-blue-600 text-white border-none rounded cursor-pointer text-base hover:bg-blue-700"
```

## 错误提示样式

### .error
```css
/* 原始CSS */
.error {
  color: #dc3545;
  font-weight: bold;
  padding: 10px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
}

/* Tailwind CSS */
className="text-red-600 font-bold p-2.5 bg-red-100 border border-red-300 rounded"
```

## 画布相关样式

### .canvas-container
```css
/* 原始CSS */
.canvas-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  border: 2px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

/* Tailwind CSS */
className="flex justify-center my-5 border-2 border-gray-300 rounded-lg overflow-hidden md:overflow-hidden overflow-x-auto"
```

### canvas
```css
/* 原始CSS */
canvas {
  display: block;
  background-color: white;
}

/* Tailwind CSS */
className="block bg-white"
```

## 示例按钮相关样式

### .examples
```css
/* 原始CSS */
.examples {
  margin-top: 30px;
}

/* Tailwind CSS */
className="mt-8"
```

### .examples h3
```css
/* 原始CSS */
.examples h3 {
  margin-bottom: 15px;
  color: #333;
}

/* Tailwind CSS */
className="mb-4 text-gray-700"
```

### .example-buttons
```css
/* 原始CSS */
.example-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

/* Tailwind CSS */
className="flex flex-wrap gap-2.5 md:justify-start justify-center"
```

### .example-buttons button
```css
/* 原始CSS */
.example-buttons button {
  padding: 8px 12px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}
.example-buttons button:hover {
  background-color: #545b62;
}

/* Tailwind CSS */
className="px-3 py-2 bg-gray-600 text-white border-none rounded cursor-pointer text-sm hover:bg-gray-700"
```

## 函数列表相关样式

### .functions-list
```css
/* 原始CSS */
.functions-list {
  margin: 20px 0;
  padding: 15px;
  border: 2px solid #ddd;
  border-radius: 8px;
  background-color: #f8f9fa;
}

/* Tailwind CSS */
className="my-5 p-4 border-2 border-gray-300 rounded-lg bg-gray-50"
```

### .functions-list h3
```css
/* 原始CSS */
.functions-list h3 {
  margin-top: 0;
  margin-bottom: 15px;
  color: #333;
}

/* Tailwind CSS */
className="mt-0 mb-4 text-gray-700"
```

### .function-item
```css
/* 原始CSS */
.function-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
}

/* Tailwind CSS */
className="flex items-center gap-2.5 mb-2.5 p-2.5 bg-white border border-gray-300 rounded md:flex-row flex-col md:items-center items-stretch md:gap-2.5 gap-2"
```

### .function-checkbox
```css
/* 原始CSS */
.function-checkbox {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

/* Tailwind CSS */
className="w-[18px] h-[18px] cursor-pointer"
```

### .color-picker
```css
/* 原始CSS */
.color-picker {
  width: 40px;
  height: 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 0;
}

/* Tailwind CSS */
className="w-10 h-8 border-none rounded cursor-pointer p-0 md:self-auto self-start"
```

### .function-input
```css
/* 原始CSS */
.function-input {
  flex: 1;
  padding: 8px 12px;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  min-width: 200px;
}
.function-input:focus {
  outline: none;
  border-color: #007bff;
}

/* Tailwind CSS */
className="flex-1 px-3 py-2 border-2 border-gray-300 rounded text-sm min-w-[200px] focus:outline-none focus:border-blue-600 md:min-w-[200px] min-w-auto"
```

### .remove-button
```css
/* 原始CSS */
.remove-button {
  padding: 6px 12px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  min-width: 60px;
}
.remove-button:hover:not(:disabled) {
  background-color: #c82333;
}
.remove-button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
  opacity: 0.6;
}

/* Tailwind CSS */
className="px-3 py-1.5 bg-red-600 text-white border-none rounded cursor-pointer text-sm min-w-[60px] hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-60"
```

## 响应式断点映射

### 原始媒体查询
```css
@media (max-width: 768px) {
  /* 移动端样式 */
}
```

### Tailwind CSS响应式前缀
- `md:` - 对应768px及以上
- 默认样式 - 对应768px以下（移动端）

## 颜色映射表

| 原始颜色值 | Tailwind CSS类 | 用途 |
|-----------|----------------|------|
| #333 | text-gray-700 | 标题和文本 |
| #007bff | bg-blue-600, border-blue-600 | 主要按钮和焦点状态 |
| #0056b3 | hover:bg-blue-700 | 按钮悬停状态 |
| #dc3545 | bg-red-600, text-red-600 | 删除按钮和错误文本 |
| #c82333 | hover:bg-red-700 | 删除按钮悬停状态 |
| #6c757d | bg-gray-600 | 次要按钮和禁用状态 |
| #545b62 | hover:bg-gray-700 | 次要按钮悬停状态 |
| #f8f9fa | bg-gray-50 | 列表背景 |
| #ddd | border-gray-300 | 边框颜色 |
| #f8d7da | bg-red-100 | 错误背景 |
| #f5c6cb | border-red-300 | 错误边框 |
| white | bg-white | 白色背景 |

## 间距映射表

| 原始像素值 | Tailwind CSS类 | 说明 |
|-----------|----------------|------|
| 6px | p-1.5, py-1.5 | 小间距 |
| 8px | p-2, py-2 | 常用间距 |
| 10px | p-2.5, gap-2.5 | 中等间距 |
| 12px | px-3 | 水平内边距 |
| 15px | p-4 | 较大间距 |
| 16px | px-4 | 按钮水平内边距 |
| 18px | w-[18px], h-[18px] | 复选框尺寸 |
| 20px | p-5, my-5 | 大间距 |
| 30px | mb-8, mt-8 | 很大间距 |
| 40px | w-10 | 颜色选择器宽度 |
| 60px | min-w-[60px] | 按钮最小宽度 |
| 100px | min-w-[100px] | 输入框最小宽度 |
| 120px | min-w-[120px] | 标签最小宽度 |
| 200px | min-w-[200px] | 函数输入框最小宽度 |
| 1000px | max-w-4xl | 容器最大宽度 |