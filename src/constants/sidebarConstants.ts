import { DefaultIcon, EcommerceIcon, OrderListsIcon, ProjectIcon, OnlineCoursesIcon } from '../components/Icons';
import type { MenuItem } from '../interfaces/types';

// Dashboard menu items with proper icon components
export const DASHBOARD_ITEMS: MenuItem[] = [
  { icon: DefaultIcon, label: 'Default', active: true, path: '/' },
  { icon: EcommerceIcon, label: 'eCommerce', active: false, path: '/ecommerce' },
  { icon: OrderListsIcon, label: 'Order Lists', active: false, path: '/orders' },
  { icon: ProjectIcon, label: 'Projects', active: false, path: '/projects' },
  { icon: OnlineCoursesIcon, label: 'Online Courses', active: false, path: '/courses' }
];