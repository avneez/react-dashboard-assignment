import React from 'react';

// Order related types
export interface Order {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  project: string;
  address: string;
  date: string;
  status: "In Progress" | "Complete" | "Pending" | "Approved" | "Rejected";
  orderId: string;
}

// OrderTable component interfaces
export interface OrderTableProps {
  orders: Order[];
  checkedItems: Set<string>;
  allChecked: boolean;
  handleMasterCheckbox: () => void;
  handleItemCheckbox: (orderId: string) => void;
}

export interface OrderTableHeaderProps {
  allChecked: boolean;
  handleMasterCheckbox: () => void;
}

export interface OrderTableBodyProps {
  orders: Order[];
  checkedItems: Set<string>;
  handleItemCheckbox: (orderId: string) => void;
  page: number;
}

// Pagination component interface
export interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  totalItems: number;
  itemsPerPage?: number;
  paginationPages: number[];
}

// Checkbox component interface
export interface CustomCheckboxProps {
  checked?: boolean;
  onChange?: () => void;
}

// Header component interface
export interface HeaderProps {
  isSidebarOpen: boolean;
  isNotificationsOpen: boolean;
  onToggleSidebar: () => void;
  onToggleNotifications: () => void;
}

// Sidebar component interfaces
export interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export interface SubItem {
  label: string;
  path: string;
}

export interface MenuItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active: boolean;
  path: string;
  hasSubItems?: boolean;
  subItems?: SubItem[];
}

export interface SidebarPagesProps {
  isOpen: boolean;
  onNavigate: (path: string) => void;
}

export interface SidebarDashboardsProps {
  isOpen: boolean;
  onNavigate: (path: string) => void;
}

export interface SidebarFavouritesProps {
  isOpen: boolean;
  onNavigate: (path: string) => void;
}

// MetricCard component interface
export interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  delay?: number;
  bgColor?: string;
}

// Notification related interfaces
export interface Notification {
  id: number;
  type: string;
  message: string;
  time: string;
}

export interface NotificationsSectionProps {
  notifications: Array<{
    id: number;
    type: string;
    message: string;
    time: string;
  }>;
}

export interface NotificationsPanelProps {
  onClose?: () => void;
}

// Contact related interfaces
export interface Contact {
  id: number;
  name: string;
  avatar: string;
}

export interface ContactsSectionProps {
  contacts: Contact[];
}

// Activity related interfaces
export interface Activity {
  id: number;
  message: string;
  time: string;
  avatar: string;
}

export interface ActivitiesSectionProps {
  activities: Activity[];
}

// Layout component interface
export interface LayoutProps {
  children: React.ReactNode;
}

// Location data interface
export interface LocationData {
  id: number;
  city: string;
  country: string;
  revenue: number;
  coordinates: {
    lng: number; // longitude
    lat: number; // latitude
  };
}

// PieChart related interfaces
export type PieSlice = {
  name: string;
  value: number;
  color: string;
};

export interface CustomPieChartProps {
  innerRadius?: number;
  outerRadius?: number;
  gapAngle?: number; // Gap between slices in degrees
  data: PieSlice[];
}

export type MarkerType = {
  name: string;
  coordinates: [number, number]; // [longitude, latitude]
};

export type Product = {
  name: string;
  price: number;
  quantity: number;
  amount: number;
};