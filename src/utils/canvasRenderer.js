import { formatLabel } from './labelFormatter';

export class CanvasRenderer {
  constructor(canvas, config) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.config = config;
  }

  // 坐标转换函数
  toCanvasX = (x) => {
    const { xMin, xMax, canvasWidth } = this.config;
    return ((x - xMin) / (xMax - xMin)) * canvasWidth;
  };

  toCanvasY = (y) => {
    const { yMin, yMax, canvasHeight } = this.config;
    return canvasHeight - ((y - yMin) / (yMax - yMin)) * canvasHeight;
  };

  // 清空画布
  clear() {
    const { canvasWidth, canvasHeight } = this.config;
    this.ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  }

  // 绘制坐标系
  drawAxes() {
    const { xMax, yMax, xUnitValue, yUnitValue, canvasWidth, canvasHeight } = this.config;
    
    this.ctx.strokeStyle = '#ddd';
    this.ctx.lineWidth = 1;

    // 绘制网格 - 按单位长度
    const xStep = xUnitValue;
    const yStep = yUnitValue;

    // X方向网格线
    for (let x = 0; x <= xMax; x += xStep) {
      const canvasX = this.toCanvasX(x);
      this.ctx.beginPath();
      this.ctx.moveTo(canvasX, 0);
      this.ctx.lineTo(canvasX, canvasHeight);
      this.ctx.stroke();

      if (x !== 0) {
        const canvasXNeg = this.toCanvasX(-x);
        this.ctx.beginPath();
        this.ctx.moveTo(canvasXNeg, 0);
        this.ctx.lineTo(canvasXNeg, canvasHeight);
        this.ctx.stroke();
      }
    }

    // Y方向网格线
    for (let y = 0; y <= yMax; y += yStep) {
      const canvasY = this.toCanvasY(y);
      this.ctx.beginPath();
      this.ctx.moveTo(0, canvasY);
      this.ctx.lineTo(canvasWidth, canvasY);
      this.ctx.stroke();

      if (y !== 0) {
        const canvasYNeg = this.toCanvasY(-y);
        this.ctx.beginPath();
        this.ctx.moveTo(0, canvasYNeg);
        this.ctx.lineTo(canvasWidth, canvasYNeg);
        this.ctx.stroke();
      }
    }

    // 绘制坐标轴
    this.ctx.strokeStyle = '#333';
    this.ctx.lineWidth = 2;

    // X轴
    const yAxisPos = this.toCanvasY(0);
    this.ctx.beginPath();
    this.ctx.moveTo(0, yAxisPos);
    this.ctx.lineTo(canvasWidth, yAxisPos);
    this.ctx.stroke();

    // Y轴
    const xAxisPos = this.toCanvasX(0);
    this.ctx.beginPath();
    this.ctx.moveTo(xAxisPos, 0);
    this.ctx.lineTo(xAxisPos, canvasHeight);
    this.ctx.stroke();

    // 添加刻度标签
    this.drawLabels(xStep, yStep, xAxisPos, yAxisPos);
  }

  // 绘制标签
  drawLabels(xStep, yStep, xAxisPos, yAxisPos) {
    const { xMax, yMax, xUnitValue, yUnitValue, canvasWidth, canvasHeight } = this.config;
    
    this.ctx.fillStyle = '#333';
    this.ctx.font = '12px Arial';
    this.ctx.textAlign = 'center';

    // X轴标签 - 只在网格线位置显示标签
    for (let i = -Math.floor(xMax / xStep); i <= Math.floor(xMax / xStep); i++) {
      if (i !== 0) {
        const x = i * xStep;
        const canvasX = this.toCanvasX(x);
        if (canvasX >= 0 && canvasX <= canvasWidth) {
          const label = formatLabel(x, xUnitValue);
          this.ctx.fillText(label, canvasX, yAxisPos + 15);
        }
      }
    }

    // Y轴标签 - 只在网格线位置显示标签
    this.ctx.textAlign = 'right';
    for (let i = -Math.floor(yMax / yStep); i <= Math.floor(yMax / yStep); i++) {
      if (i !== 0) {
        const y = i * yStep;
        const canvasY = this.toCanvasY(y);
        if (canvasY >= 0 && canvasY <= canvasHeight) {
          const label = formatLabel(y, yUnitValue);
          this.ctx.fillText(label, xAxisPos - 5, canvasY + 4);
        }
      }
    }
  }

  // 绘制单个函数图像
  plotFunction(evaluateFunction, expression, color) {
    const { xMin, xMax, yMin, yMax, canvasWidth } = this.config;
    
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();

    let firstPoint = true;
    const step = (xMax - xMin) / canvasWidth;

    for (let x = xMin; x <= xMax; x += step) {
      try {
        const y = evaluateFunction(expression, x);

        if (isFinite(y) && y >= yMin && y <= yMax) {
          const canvasX = this.toCanvasX(x);
          const canvasY = this.toCanvasY(y);

          if (firstPoint) {
            this.ctx.moveTo(canvasX, canvasY);
            firstPoint = false;
          } else {
            this.ctx.lineTo(canvasX, canvasY);
          }
        } else {
          firstPoint = true;
        }
      } catch (e) {
        firstPoint = true;
      }
    }

    this.ctx.stroke();
  }
}