import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Bell, Sun, Menu, X, Grid3X3 } from 'lucide-react';
import { clsx } from 'clsx';
import Sidebar from './Sidebar';
import NotificationsPanel from './NotificationsPanel';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleNotifications = () => setIsNotificationsOpen(!isNotificationsOpen);

  return (
    <div className={clsx('min-h-screen bg-gray-50 transition-colors relative', {
      'dark bg-gray-900': isDarkMode
    })}>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      {/* Main Content */}
      <div className={clsx('transition-all duration-300 relative', {
        'ml-64': isSidebarOpen,
        'ml-16': !isSidebarOpen
      })}>
        {/* Header */}
        <header
          className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
          style={{
            width: isNotificationsOpen
              ? (isSidebarOpen ? 'calc(100vw - 256px - 280px)' : 'calc(100vw - 64px - 280px)')
              : (isSidebarOpen ? 'calc(100vw - 256px)' : 'calc(100vw - 64px)'),
            height: '68px',
            justifyContent: 'space-between',
            left: isSidebarOpen ? '256px' : '64px',
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
                {isSidebarOpen ? (
                  <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                )}
              </button>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 w-80 bg-gray-100 dark:bg-gray-700 border-0 rounded-lg text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Right side - Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleDarkMode}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                title={isDarkMode ? 'Light mode' : 'Dark mode'}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-white" />
                ) : (
                  <Sun className="w-5 h-5 text-gray-600" />
                )}
              </button>

              <div className="relative">
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </div>

              <button
                onClick={toggleNotifications}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Grid3X3 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>

              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">U</span>
              </div>
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