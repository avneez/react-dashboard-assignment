import React from 'react';
import { useLocation } from 'react-router-dom';
import { BellIcon, MacSearchIcon, NotificationsPanelIcon, SearchIcon, SidebarOpenIcon, StarIcon, SunIcon, SunIconDark, TimeIcon } from './Icons';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  isSidebarOpen: boolean;
  isNotificationsOpen: boolean;
  onToggleSidebar: () => void;
  onToggleNotifications: () => void;
}

const Header: React.FC<HeaderProps> = ({
  isSidebarOpen,
  isNotificationsOpen,
  onToggleSidebar,
  onToggleNotifications
}) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const location = useLocation();

  // Determine current dashboard based on route
  const getCurrentDashboard = () => {
    switch (location.pathname) {
      case '/':
        return 'Default';
      case '/ecommerce':
        return 'eCommerce';
      case '/projects':
        return 'Projects';
      case '/courses':
        return 'Online Courses';
      default:
        return 'Default';
    }
  };

  return (
    <header
      className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700 fixed top-0 z-30 transition-all duration-300 h-[68px] px-3 sm:px-7 py-5"
      style={{
        width: isNotificationsOpen
          ? (isSidebarOpen ? 'calc(100vw - 212px - 280px)' : 'calc(100vw - 64px - 280px)')
          : (isSidebarOpen ? 'calc(100vw - 212px)' : 'calc(100vw - 64px)'),
        left: isSidebarOpen ? '212px' : '64px'
      }}
    >
      <div className="flex items-center justify-between h-full">
        {/* Left side - Grouped Icons and Breadcrumb */}
        <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-1">
          {/* Grouped Sidebar and Star Icons */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onToggleSidebar();
            }}
            className="hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors p-1 flex-shrink-0"
            type="button"
          >
            <SidebarOpenIcon className="text-gray-700 dark:text-white" />
          </button>
          <button
            className="hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors p-1 flex-shrink-0"
          >
            <StarIcon className="text-gray-700 dark:text-white" />
          </button>

          {/* Breadcrumb Container - Hide on very small screens when notifications open */}
          <div className={`flex items-center gap-1 sm:gap-2 h-7 min-w-0 ${isNotificationsOpen ? 'hidden sm:flex' : 'flex'}`}>
            <span className="font-inter text-[#1C1C1C66] dark:text-gray-300 text-xs sm:text-sm font-normal leading-5 px-1 sm:px-2 py-1 truncate">
              Dashboards
            </span>
            <span className="font-inter text-[#1C1C1C66] dark:text-gray-300 text-xs sm:text-sm font-normal leading-5 px-1 sm:px-2 py-1 flex-shrink-0">
              /
            </span>
            <span className="font-inter text-[#1C1C1C] dark:text-white text-xs sm:text-sm font-normal leading-5 px-1 sm:px-2 py-1 truncate">
              {getCurrentDashboard()}
            </span>
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex flex-shrink-0">
          <div className={`items-center px-2 py-2 bg-[#1C1C1C0D] dark:bg-gray-700 rounded-[8px] text-[14px] gap-1 ${isNotificationsOpen ? 'hidden lg:flex w-32' : 'flex w-40'}`}>
            <SearchIcon className="text-gray-700 dark:text-white flex-shrink-0" />
            <input
              type="text"
              placeholder="Search"
              className="text-gray-900 dark:text-gray-100 bg-transparent placeholder-[#1C1C1C33] dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none min-w-0 flex-1"
            />
            <MacSearchIcon className="text-gray-700 dark:text-white flex-shrink-0" />
          </div>
          <div className={`flex items-center gap-1 ${isNotificationsOpen ? 'ml-2' : 'ml-[20px]'}`}>
            <button
              onClick={toggleDarkMode}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors flex-shrink-0"
              title={isDarkMode ? 'Light mode' : 'Dark mode'}
            >
              {isDarkMode ? (
                <SunIconDark />
              ) : (
                <SunIcon />
              )}
            </button>
            <button
              className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors flex-shrink-0 ${isNotificationsOpen ? 'hidden sm:block' : ''}`}
            >
              <TimeIcon className="text-gray-700 dark:text-white" />
            </button>

            <button
              className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors flex-shrink-0 ${isNotificationsOpen ? 'hidden sm:block' : ''}`}
            >
              <BellIcon className="text-gray-700 dark:text-white" />
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onToggleNotifications();
              }}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors flex-shrink-0"
              type="button"
            >
              <NotificationsPanelIcon className="text-gray-700 dark:text-white" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;