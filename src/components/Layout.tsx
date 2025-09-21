import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import Sidebar from './Sidebar';
import Header from './Header';
import NotificationsPanel from './NotificationsPanel';
import type { LayoutProps } from '../interfaces/types';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors relative font-inter">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      {/* Main Content */}
      <div className={clsx('transition-all duration-300 relative', {
        'ml-[212px]': isSidebarOpen,
        'ml-16': !isSidebarOpen
      })}>
        {/* Header */}
        <Header
          isSidebarOpen={isSidebarOpen}
          isNotificationsOpen={isNotificationsOpen}
          onToggleSidebar={toggleSidebar}
          onToggleNotifications={toggleNotifications}
        />

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