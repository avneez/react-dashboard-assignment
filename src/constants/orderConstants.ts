// Order status options for filtering
export const STATUS_OPTIONS = ['In Progress', 'Complete', 'Pending', 'Approved', 'Rejected'];

// Pagination constants
export const PAGINATION_PAGES = Array.from({ length: 5 }, (_, i) => i + 1);

// Table column definitions
export const ORDER_TABLE_COLUMNS = [
  { key: 'id', label: 'Order ID', width: '100px' },
  { key: 'user', label: 'User', width: '150px' },
  { key: 'project', label: 'Project', width: '200px' },
  { key: 'address', label: 'Address', width: '180px' },
  { key: 'date', label: 'Date', width: '120px' },
  { key: 'status', label: 'Status', width: '100px' }
];