import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { useLocation } from 'react-router-dom';
import { CaretRightIcon, DefaultIcon, EcommerceIcon, ProjectIcon, OnlineCoursesIcon } from './Icons';

interface SubItem {
  label: string;
  path: string;
}

interface MenuItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active: boolean;
  path: string;
  hasSubItems?: boolean;
  subItems?: SubItem[];
}

interface SidebarDashboardsProps {
  isOpen: boolean;
  onNavigate: (path: string) => void;
}

const SidebarDashboards: React.FC<SidebarDashboardsProps> = ({ isOpen, onNavigate }) => {
  const location = useLocation();

  const dashboardItems: MenuItem[] = [
    { icon: DefaultIcon, label: 'Default', active: location.pathname === '/', path: '/' },
    { icon: EcommerceIcon, label: 'eCommerce', active: location.pathname === '/ecommerce', path: '/ecommerce' },
    { icon: ProjectIcon, label: 'Projects', active: false, path: '/projects' },
    { icon: OnlineCoursesIcon, label: 'Online Courses', active: false, path: '/courses' }
  ];

  return (
    <div className="pb-3">
      {isOpen && (
        <h3 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          Dashboards
        </h3>
      )}

      <ul className="space-y-1">
        {dashboardItems.map((item, itemIndex) => (
          <li key={itemIndex}>
            <button
              onClick={() => onNavigate(item.path)}
              className={clsx(
                'w-full flex items-center rounded-lg transition-colors group',
                isOpen ? 'px-3 py-2' : 'px-2 py-2 justify-center',
                {
                  'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400': item.active,
                  'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700': !item.active
                }
              )}
            >
              {/* Always render caret space for consistent alignment when open */}
              {isOpen && (
                <div className="flex-shrink-0 w-4 h-4">
                  <CaretRightIcon />
                </div>
              )}
              <item.icon className={clsx('w-5 h-5 flex-shrink-0', isOpen ? 'ml-3' : '', {
                'text-blue-600 dark:text-blue-400': item.active,
                'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300': !item.active
              })} />
              {isOpen && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="font-inter font-normal text-[14px] leading-[20px] text-[#1C1C1C] dark:text-white ml-3"
                  style={{
                    fontStyle: 'normal',
                    letterSpacing: '0%'
                  }}
                >
                  {item.label}
                </motion.span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarDashboards;