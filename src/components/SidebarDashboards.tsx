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
        <p className="text-[#1C1C1C66] text-[14px] px-3 py-1 dark:text-gray-400 mb-1">
          Dashboards
        </p>
      )}

      <ul className="space-y-1">
        {dashboardItems.map((item, itemIndex) => (
          <li key={itemIndex}>
            <button
              onClick={() => onNavigate(item.path)}
              className={clsx(
                'w-full flex items-center rounded-[8px] transition-colors group',
                isOpen ? 'px-2 py-1 pl-0' : 'px-2 py-2 justify-center',
                {
                  'bg-gray-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400': item.active,
                  'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800': !item.active
                }
              )}
            >
              {item.active && <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-[24px]'>
                <path d="M0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2V14C4 15.1046 3.10457 16 2 16C0.895431 16 0 15.1046 0 14V2Z" fill="#1C1C1C" />
              </svg>}

              {/* Always render caret space for consistent alignment when open */}
              {!item.active && isOpen && (
                <div className="flex-shrink-0 w-4 h-4 ml-2 mr-1">
                  <CaretRightIcon />
                </div>
              )}
              <item.icon className={clsx('w-5 h-5 flex-shrink-0', isOpen ? 'ml-3' : '', {
                'text-blue-600 dark:text-blue-400': item.active,
                'text-black dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300': !item.active
              })} />
              {isOpen && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="font-inter font-normal text-[14px] leading-[20px] text-[#1C1C1C] dark:text-white ml-3 text-nowrap"
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