/**
 * Get status color classes for order status badges
 * @param status - The order status string
 * @returns Object with dot and text color classes
 */
export const getStatusColor = (status: string) => {
  switch (status) {
    case "In Progress":
      return { dot: "bg-[#95A4FC]", text: "text-[#8A8CD9]" };
    case "Complete":
      return { dot: "bg-[#A1E3CB]", text: "text-[#4AA785]" };
    case "Pending":
      return { dot: "bg-[#B1E3FF]", text: "text-[#59A8D4]" };
    case "Approved":
      return { dot: "bg-[#FFE999]", text: "text-[#FFC555]" };
    case "Rejected":
      return { dot: "bg-[#1C1C1C66] dark:bg-[#FFFFFF66]", text: "text-[#1C1C1C66] dark:text-[#FFFFFF66]" };
    default:
      return { dot: "bg-gray-500", text: "text-gray-600 dark:text-gray-400" };
  }
};

/**
 * Get simple status color for filter UI (just the background color)
 * @param status - The order status string
 * @returns Background color class string
 */
export const getSimpleStatusColor = (status: string): string => {
  switch (status) {
    case "In Progress":
      return "bg-[#95A4FC]";
    case "Complete":
      return "bg-[#A1E3CB]";
    case "Pending":
      return "bg-[#B1E3FF]";
    case "Approved":
      return "bg-[#FFE999]";
    case "Rejected":
      return "bg-[#1C1C1C66] dark:bg-[#FFFFFF66]";
    default:
      return "bg-gray-500";
  }
};

/**
 * Get current dashboard name based on route pathname
 * @param pathname - The current route pathname
 * @returns Dashboard name string
 */
export const getCurrentDashboard = (pathname: string) => {
  switch (pathname) {
    case '/':
      return 'Default';
    case '/ecommerce':
      return 'eCommerce';
    case '/orders':
      return 'Order Lists';
    case '/projects':
      return 'Projects';
    case '/courses':
      return 'Online Courses';
    default:
      return 'Default';
  }
};

/**
 * Get sort icon based on current sort order
 * @param sortOrder - Current sort order
 * @returns Sort icon string
 */
export const getSortIcon = (sortOrder: 'asc' | 'desc' | 'none'): string => {
  switch (sortOrder) {
    case 'asc':
      return '↑';
    case 'desc':
      return '↓';
    default:
      return '';
  }
};

/**
 * Get sort button title based on current sort order
 * @param sortOrder - Current sort order
 * @returns Sort button title string
 */
export const getSortTitle = (sortOrder: 'asc' | 'desc' | 'none'): string => {
  switch (sortOrder) {
    case 'asc':
      return 'Click to sort newest first';
    case 'desc':
      return 'Click to reset sort';
    default:
      return 'Click to sort oldest first';
  }
};