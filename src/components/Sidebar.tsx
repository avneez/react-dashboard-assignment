import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SidebarFavourites from './SidebarFavourites';
import SidebarDashboards from './SidebarDashboards';
import SidebarPages from './SidebarPages';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <motion.aside
      animate={{ width: isOpen ? 212 : 64 }}
      className="fixed left-0 top-0 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-50 font-inter overflow-hidden"
      style={{ minWidth: '64px' }}
    >
      <div className={isOpen ? "p-6" : "p-3"}>
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <img
            src='/ByeWindAvatar.png'
            alt="ByeWind Logo"
            className="w-8 h-8 rounded-lg object-cover"
          />
          {isOpen && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-inter font-normal text-[14px] leading-5 text-gray-900 dark:text-white"
              style={{
              fontStyle: 'normal',
              letterSpacing: '0%',
              }}
            >
              ByeWind
            </motion.span>
          )}
        </div>

        {/* Menu Items */}
        <nav className="flex gap-1 pb-3 flex-col">
          <SidebarFavourites isOpen={isOpen} onNavigate={handleNavigation} />
          <SidebarDashboards isOpen={isOpen} onNavigate={handleNavigation} />
          <SidebarPages isOpen={isOpen} onNavigate={handleNavigation} />
        </nav>
      </div>
    </motion.aside>
  );
};

export default Sidebar;