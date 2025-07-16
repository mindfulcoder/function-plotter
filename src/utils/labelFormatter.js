// 格式化刻度标签 - 根据网格点的实际值来显示
export const formatLabel = (value, unitValue) => {
  if (Math.abs(value) < 0.001) return '0';

  // 首先检查是否是π的整数倍（优先显示最简形式）
  const piRatio = value / Math.PI;
  if (Math.abs(piRatio - Math.round(piRatio)) < 0.001) {
    const intRatio = Math.round(piRatio);
    if (intRatio === 1) return 'π';
    if (intRatio === -1) return '-π';
    if (intRatio !== 0) return `${intRatio}π`;
  }

  // 检查是否是π/2的倍数
  const piHalfRatio = value / (Math.PI / 2);
  if (Math.abs(piHalfRatio - Math.round(piHalfRatio)) < 0.001) {
    const intRatio = Math.round(piHalfRatio);
    // 如果是偶数倍，显示为π的倍数
    if (intRatio % 2 === 0) {
      const piMultiple = intRatio / 2;
      if (piMultiple === 1) return 'π';
      if (piMultiple === -1) return '-π';
      return `${piMultiple}π`;
    }
    // 奇数倍显示为π/2的倍数
    if (intRatio === 1) return 'π/2';
    if (intRatio === -1) return '-π/2';
    return `${intRatio}π/2`;
  }

  // 检查是否是π/4的倍数
  const piQuarterRatio = value / (Math.PI / 4);
  if (Math.abs(piQuarterRatio - Math.round(piQuarterRatio)) < 0.001) {
    const intRatio = Math.round(piQuarterRatio);
    // 如果是4的倍数，显示为π的倍数
    if (intRatio % 4 === 0) {
      const piMultiple = intRatio / 4;
      if (piMultiple === 1) return 'π';
      if (piMultiple === -1) return '-π';
      return `${piMultiple}π`;
    }
    // 如果是2的倍数但不是4的倍数，显示为π/2的倍数
    if (intRatio % 2 === 0) {
      const piHalfMultiple = intRatio / 2;
      if (piHalfMultiple === 1) return 'π/2';
      if (piHalfMultiple === -1) return '-π/2';
      return `${piHalfMultiple}π/2`;
    }
    // 其他情况显示为π/4的倍数
    if (intRatio === 1) return 'π/4';
    if (intRatio === -1) return '-π/4';
    return `${intRatio}π/4`;
  }

  // 检查是否是π/3的倍数
  const piThirdRatio = value / (Math.PI / 3);
  if (Math.abs(piThirdRatio - Math.round(piThirdRatio)) < 0.001) {
    const intRatio = Math.round(piThirdRatio);
    // 如果是3的倍数，显示为π的倍数
    if (intRatio % 3 === 0) {
      const piMultiple = intRatio / 3;
      if (piMultiple === 1) return 'π';
      if (piMultiple === -1) return '-π';
      return `${piMultiple}π`;
    }
    // 其他情况显示为π/3的倍数
    if (intRatio === 1) return 'π/3';
    if (intRatio === -1) return '-π/3';
    return `${intRatio}π/3`;
  }

  // 检查是否是π/6的倍数
  const piSixthRatio = value / (Math.PI / 6);
  if (Math.abs(piSixthRatio - Math.round(piSixthRatio)) < 0.001) {
    const intRatio = Math.round(piSixthRatio);
    // 如果是6的倍数，显示为π的倍数
    if (intRatio % 6 === 0) {
      const piMultiple = intRatio / 6;
      if (piMultiple === 1) return 'π';
      if (piMultiple === -1) return '-π';
      return `${piMultiple}π`;
    }
    // 如果是3的倍数但不是6的倍数，显示为π/2的倍数
    if (intRatio % 3 === 0) {
      const piHalfMultiple = intRatio / 3;
      if (piHalfMultiple === 1) return 'π/2';
      if (piHalfMultiple === -1) return '-π/2';
      return `${piHalfMultiple}π/2`;
    }
    // 如果是2的倍数但不是3的倍数，显示为π/3的倍数
    if (intRatio % 2 === 0) {
      const piThirdMultiple = intRatio / 2;
      if (piThirdMultiple === 1) return 'π/3';
      if (piThirdMultiple === -1) return '-π/3';
      return `${piThirdMultiple}π/3`;
    }
    // 其他情况显示为π/6的倍数
    if (intRatio === 1) return 'π/6';
    if (intRatio === -1) return '-π/6';
    return `${intRatio}π/6`;
  }

  // 普通数值
  return value.toFixed(2);
};