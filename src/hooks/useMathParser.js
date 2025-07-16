import { evaluate } from 'mathjs';

export const useMathParser = () => {
  // 解析单位值（支持π表达式）
  const parseUnit = (unitStr) => {
    try {
      // 替换π符号和pi为Math.PI
      const processed = unitStr.toLowerCase()
        .replace(/π/g, 'pi')
        .replace(/pi/g, Math.PI.toString());
      return evaluate(processed);
    } catch (e) {
      return 1;
    }
  };

  // 计算函数值
  const evaluateFunction = (expression, x) => {
    try {
      return evaluate(expression, { x });
    } catch (e) {
      throw new Error(`函数表达式错误: ${e.message}`);
    }
  };

  return { parseUnit, evaluateFunction };
};