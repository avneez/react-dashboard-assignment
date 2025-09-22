const ChartLoader = ({ width = '100%', height = '200px' }: { width?: string; height?: string }) => (
  <div
    className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center animate-pulse"
    style={{ width, height }}
  >
    <div className="flex flex-col items-center space-y-2">
      <div className="w-8 h-8 border-2 border-gray-300 dark:border-gray-600 border-t-blue-500 rounded-full animate-spin"></div>
      <span className="text-sm text-gray-500 dark:text-gray-400">Loading chart...</span>
    </div>
  </div>
);

export default ChartLoader;