const TableLoader = () => (
  <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
    <div className="animate-pulse">
      {/* Table header skeleton */}
      <div className="flex space-x-4 mb-4">
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/6"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/6"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/6"></div>
      </div>

      {/* Table rows skeleton */}
      {[...Array(8)].map((_, i) => (
        <div key={i} className="flex space-x-4 mb-3">
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/6"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/6"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/6"></div>
        </div>
      ))}
    </div>
  </div>
);

export default TableLoader;