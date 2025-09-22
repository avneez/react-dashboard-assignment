/**
 * Chart-related utility functions that can be lazy loaded
 */

/**
 * Generate chart data points with animation delays
 */
export const generateChartPoints = (data: number[], animationDelay = 100): { value: number; delay: number }[] => {
  return data.map((value, index) => ({
    value,
    delay: index * animationDelay
  }));
};