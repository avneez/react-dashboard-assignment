import React from 'react';
import { useLocation } from 'react-router-dom';
import { BellIcon, MacSearchIcon, SearchIcon, SidebarOpenIcon, StarIcon, SunIcon, SunIconDark, TimeIcon } from './Icons';
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
      className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 fixed top-0 z-30 transition-all duration-300 h-[68px] px-7 py-5"
      style={{
        width: isNotificationsOpen
          ? (isSidebarOpen ? 'calc(100vw - 212px - 280px)' : 'calc(100vw - 64px - 280px)')
          : (isSidebarOpen ? 'calc(100vw - 212px)' : 'calc(100vw - 64px)'),
        left: isSidebarOpen ? '212px' : '64px'
      }}
    >
      <div className="flex items-center justify-between h-full">
        {/* Left side - Grouped Icons and Breadcrumb */}
        <div className="flex items-center gap-2">
          {/* Grouped Sidebar and Star Icons */}
          <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <button
              onClick={onToggleSidebar}
              className="hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors"
            >
              <SidebarOpenIcon />
            </button>
            <StarIcon />
          </div>

          {/* Breadcrumb Container */}
          <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 rounded-lg w-[184px] h-7 px-3">
            <span className="font-inter text-gray-600 dark:text-gray-300 text-sm font-normal leading-5">
              Dashboards /
            </span>
            <span className="font-inter text-gray-900 dark:text-white text-sm font-normal leading-5">
              {getCurrentDashboard()}
            </span>
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center gap-3">
          <div className="flex items-center px-2 py-2 w-80 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm gap-1">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search"
              className="text-gray-900 dark:text-gray-100 bg-transparent placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none min-w-0 flex-1"
            />
            <MacSearchIcon />
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            title={isDarkMode ? 'Light mode' : 'Dark mode'}
          >
            {isDarkMode ? (
              <SunIconDark />
            ) : (
              <SunIcon />
            )}
          </button>

          <TimeIcon />

          <BellIcon />

          <button
            onClick={onToggleNotifications}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <SidebarOpenIcon/>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;