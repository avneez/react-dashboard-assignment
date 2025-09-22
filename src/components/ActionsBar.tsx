import React from "react";
import {
  PlusIcon,
  SortIcon,
  FilterIcon,
} from "./Icons";
import { getSimpleStatusColor, getSortIcon, getSortTitle } from "../utils/helpers";

interface ActionsBarProps {
  onSort: () => void;
  sortOrder: 'asc' | 'desc' | 'none';
  onFilter: (statuses: string[]) => void;
  activeFilters: string[];
  isFilterOpen: boolean;
  setIsFilterOpen: (open: boolean) => void;
}

const ActionsBar: React.FC<ActionsBarProps> = ({
  onSort,
  sortOrder,
  onFilter,
  activeFilters,
  isFilterOpen,
  setIsFilterOpen
}) => {
  const statusOptions = ['In Progress', 'Complete', 'Pending', 'Approved', 'Rejected'];

  const handleFilterChange = (status: string, checked: boolean) => {
    let newFilters;
    if (checked) {
      newFilters = [...activeFilters, status];
    } else {
      newFilters = activeFilters.filter(f => f !== status);
    }
    onFilter(newFilters);
  };

  const clearAllFilters = () => {
    onFilter([]);
  };

  const selectAllFilters = () => {
    onFilter(statusOptions);
  };

  return (
    <div className="flex items-center flex-1 h-[28px] gap-[8px] rounded-[8px] max-w-[900px]">
      <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors">
        <PlusIcon className="text-gray-700 dark:text-white" />
      </button>

      {/* Filter Button with Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className={`p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors relative ${
            activeFilters.length > 0 ? 'bg-blue-100 dark:bg-blue-900' : ''
          }`}
          title="Filter by status"
        >
          <FilterIcon className="text-gray-700 dark:text-white" />
          {activeFilters.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
              {activeFilters.length}
            </span>
          )}
        </button>

        {/* Filter Dropdown Modal */}
        {isFilterOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsFilterOpen(false)}
            />

            {/* Dropdown Content */}
            <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-20 p-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Filter by Status</h3>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  ×
                </button>
              </div>

              {/* Filter Actions */}
              <div className="flex gap-2 mb-3">
                <button
                  onClick={selectAllFilters}
                  className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                >
                  Select All
                </button>
                <button
                  onClick={clearAllFilters}
                  className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Clear All
                </button>
              </div>

              {/* Status Options */}
              <div className="space-y-2">
                {statusOptions.map((status) => (
                  <label key={status} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded transition-colors">
                    <input
                      type="checkbox"
                      checked={activeFilters.includes(status)}
                      onChange={(e) => handleFilterChange(status, e.target.checked)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <div className="flex items-center gap-2 flex-1">
                      <div className={`w-2 h-2 rounded-full ${getSimpleStatusColor(status)}`} />
                      <span className="text-sm text-gray-900 dark:text-white">{status}</span>
                    </div>
                  </label>
                ))}
              </div>

              {/* Active Filters Count */}
              {activeFilters.length > 0 && (
                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {activeFilters.length} status{activeFilters.length === 1 ? '' : 'es'} selected
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      <button
        onClick={onSort}
        className={`p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors relative ${
          sortOrder !== 'none' ? 'bg-blue-100 dark:bg-blue-900' : ''
        }`}
        title={getSortTitle(sortOrder)}
      >
        <SortIcon className="text-gray-700 dark:text-white" />
        {getSortIcon(sortOrder) && (
          <span className="absolute -top-1 -right-1 text-xs font-bold text-blue-600 dark:text-blue-400">
            {getSortIcon(sortOrder)}
          </span>
        )}
      </button>
    </div>
  );
};

export default ActionsBar;