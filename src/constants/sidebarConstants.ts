import { DefaultIcon, EcommerceIcon, OrderListsIcon, ProjectIcon, OnlineCoursesIcon } from '../components/Icons';
import type { DashboardItemBase } from '../interfaces/types';

// Dashboard menu items with proper icon components (active state is determined dynamically)
export const DASHBOARD_ITEMS: DashboardItemBase[] = [
  { icon: DefaultIcon, label: 'Default', path: '/' },
  { icon: EcommerceIcon, label: 'eCommerce', path: '/ecommerce' },
  { icon: OrderListsIcon, label: 'Order Lists', path: '/orders' },
  { icon: ProjectIcon, label: 'Projects', path: '/projects' },
  { icon: OnlineCoursesIcon, label: 'Online Courses', path: '/courses' }
];