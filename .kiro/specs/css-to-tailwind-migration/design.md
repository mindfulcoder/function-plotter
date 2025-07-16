# 设计文档

## 概述

本设计文档描述了将函数绘制器应用从传统CSS迁移到Tailwind CSS的技术方案。项目已经安装了Tailwind CSS v4，我们需要系统性地将App.css中的自定义样式转换为Tailwind CSS类，同时优化globals.css文件，确保视觉效果和功能完全一致。

## 架构

### 当前架构
- **App.css**: 包含所有组件的自定义样式（约200行CSS）
- **globals.css**: 包含全局样式和Tailwind CSS导入
- **组件**: 使用className引用App.css中的样式类

### 目标架构
- **globals.css**: 仅包含Tailwind CSS导入和必要的全局样式
- **组件**: 直接使用Tailwind CSS实用类
- **移除App.css**: 完全删除自定义CSS文件

## 组件和接口

### 样式映射策略

#### 1. 布局和容器样式
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

#### 2. 表单和输入样式
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
```

#### 3. 按钮样式
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

/* Tailwind CSS */
className="px-4 py-2 bg-blue-600 text-white border-none rounded cursor-pointer text-base hover:bg-blue-700"
```

### 响应式设计映射

#### 移动端适配
```css
/* 原始CSS */
@media (max-width: 768px) {
  .input-group {
    flex-direction: column;
    align-items: stretch;
  }
}

/* Tailwind CSS */
className="flex items-center gap-2.5 mb-2.5 md:flex-row flex-col md:items-center items-stretch"
```

### 组件更新计划

#### 1. App.jsx
- 移除App.css导入
- 更新主容器className
- 更新标题样式

#### 2. FunctionInput.jsx
- 转换input-group样式
- 转换输入框和按钮样式

#### 3. AxisControls.jsx
- 转换表单布局样式
- 转换标签和输入框样式

#### 4. FunctionList.jsx
- 转换functions-list容器样式
- 转换标题样式

#### 5. FunctionItem.jsx
- 转换function-item布局样式
- 转换各种输入控件样式
- 转换删除按钮样式

#### 6. Canvas.jsx
- 转换canvas-container样式
- 转换canvas样式

#### 7. ExampleButtons.jsx
- 转换examples容器样式
- 转换example-buttons布局样式
- 转换按钮样式

## 数据模型

### 样式转换映射表

| 原始CSS类 | Tailwind CSS类 | 说明 |
|-----------|----------------|------|
| .function-plotter | max-w-4xl mx-auto p-5 font-sans | 主容器 |
| .input-form | mb-5 | 表单容器 |
| .input-group | flex items-center gap-2.5 mb-2.5 | 输入组 |
| .error | text-red-600 font-bold p-2.5 bg-red-100 border border-red-300 rounded | 错误提示 |
| .canvas-container | flex justify-center my-5 border-2 border-gray-300 rounded-lg overflow-hidden | 画布容器 |
| .functions-list | my-5 p-4 border-2 border-gray-300 rounded-lg bg-gray-50 | 函数列表 |
| .function-item | flex items-center gap-2.5 mb-2.5 p-2.5 bg-white border border-gray-300 rounded | 函数项 |

### 颜色系统映射

| 原始颜色 | Tailwind CSS | 用途 |
|----------|--------------|------|
| #007bff | bg-blue-600, text-blue-600 | 主要按钮和链接 |
| #dc3545 | bg-red-600, text-red-600 | 删除按钮和错误 |
| #28a745 | bg-green-600 | 成功状态 |
| #6c757d | bg-gray-600 | 次要按钮 |
| #f8f9fa | bg-gray-50 | 背景色 |
| #ddd | border-gray-300 | 边框色 |

## 错误处理

### 样式兼容性
- **问题**: Tailwind CSS类可能与现有全局样式冲突
- **解决方案**: 清理globals.css中的冲突样式，保留必要的全局设置

### 响应式断点
- **问题**: Tailwind CSS的断点可能与原始CSS不完全匹配
- **解决方案**: 使用Tailwind CSS的标准断点（sm: 640px, md: 768px, lg: 1024px）

### 精确像素值
- **问题**: 某些精确的像素值可能需要自定义
- **解决方案**: 使用Tailwind CSS的间距系统，必要时使用任意值语法 `[10px]`

## 测试策略

### 视觉回归测试
1. **截图对比**: 在迁移前后对每个组件进行截图对比
2. **响应式测试**: 在不同屏幕尺寸下验证布局
3. **交互状态测试**: 验证hover、focus、disabled状态

### 功能测试
1. **组件渲染**: 确保所有组件正常渲染
2. **用户交互**: 验证所有用户交互功能正常
3. **样式应用**: 确保所有Tailwind CSS类正确应用

### 性能测试
1. **CSS文件大小**: 对比迁移前后的CSS文件大小
2. **构建时间**: 验证构建时间没有显著增加
3. **运行时性能**: 确保样式应用不影响运行时性能

### 测试环境
- **桌面浏览器**: Chrome, Firefox, Safari
- **移动设备**: iOS Safari, Android Chrome
- **屏幕尺寸**: 320px, 768px, 1024px, 1440px

### 验证清单
- [ ] 所有组件视觉效果与原始版本一致
- [ ] 响应式行为在所有断点正常工作
- [ ] 所有交互状态（hover、focus、disabled）正常
- [ ] 没有控制台错误或警告
- [ ] App.css文件已完全移除
- [ ] 所有组件不再引用自定义CSS类