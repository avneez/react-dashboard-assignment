// Order status options for filtering
export const STATUS_OPTIONS = ['In Progress', 'Complete', 'Pending', 'Approved', 'Rejected'];

// Pagination constants
export const PAGINATION_PAGES = [1, 2, 3, 4, 5];

// Table column definitions
export const ORDER_TABLE_COLUMNS = [
    { label: "", width: "w-6", isCheckbox: true },
    { label: "Order ID", width: "w-[100px]" },
    { label: "User", width: "w-[214.5px]" },
    { label: "Project", width: "w-[214.5px]" },
    { label: "Address", width: "w-[270px]" },
    { label: "Date", width: "w-[191px]" },
    { label: "Status", width: "w-[110px]" },
    { label: "", width: "w-12", isActions: true }
];