import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import Sidebar from './Sidebar';
import NotificationsPanel from './NotificationsPanel';
import { BellIcon, MacSearchIcon, SearchIcon, SidebarOpenIcon, StarIcon, SunIcon, SunIconDark, TimeIcon } from './Icons';
import { useTheme } from '../contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleNotifications = () => setIsNotificationsOpen(!isNotificationsOpen);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors relative font-inter">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      {/* Main Content */}
      <div className={clsx('transition-all duration-300 relative', {
        'ml-[212px]': isSidebarOpen,
        'ml-16': !isSidebarOpen
      })}>
        {/* Header */}
        <header
          className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
          style={{
            width: isNotificationsOpen
              ? (isSidebarOpen ? 'calc(100vw - 212px - 280px)' : 'calc(100vw - 64px - 280px)')
              : (isSidebarOpen ? 'calc(100vw - 212px)' : 'calc(100vw - 64px)'),
            height: '68px',
            justifyContent: 'space-between',
            left: isSidebarOpen ? '212px' : '64px',
            borderBottomWidth: '1px',
            paddingTop: '20px',
            paddingRight: '28px',
            paddingBottom: '20px',
            paddingLeft: '28px',
            position: 'fixed',
            top: '0px',
            zIndex: 30,
            transition: 'all 0.3s ease'
          }}
        >
          <div className="flex items-center justify-between h-full">
            {/* Left side - Toggle and Search */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleSidebar}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <SidebarOpenIcon />
              </button>
              <StarIcon />
              <p className="text-gray-900 dark:text-white">Dashboards / Default</p>
            </div>

            {/* Right side - Actions */}
            <div className="flex items-center gap-3">
               <div className="flex items-center w-[160px] pl-2 pr-2 py-2 w-80 bg-gray-100 dark:bg-gray-700 border-0 rounded-lg text-sm gap-1">
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
                onClick={toggleNotifications}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <SidebarOpenIcon/>
              </button>

            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main
          className="p-6"
          style={{
            marginTop: '68px',
            marginRight: isNotificationsOpen ? '280px' : '0px',
            transition: 'all 0.3s ease'
          }}
        >
          {children}
        </main>

        {/* Notifications Panel - Positioned within main content area */}
        {isNotificationsOpen && <NotificationsPanel onClose={toggleNotifications} />}
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Layout;