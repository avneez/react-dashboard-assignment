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
      className="fixed left-0 top-0 h-full bg-white dark:bg-black border-r border-gray-200 dark:border-gray-700 z-50 font-inter overflow-hidden"
      style={{ minWidth: '64px' }}
    >
      <div className={isOpen ? "px-4 py-5" : "p-3"}>
        <div className="flex items-center gap-2 mb-4 p-1">
          <img
            src='/ByeWindAvatar.png'
            alt="ByeWind Logo"
            className="w-6 h-6 rounded-lg object-cover"
          />
          {isOpen && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-inter font-normal text-[14px] leading-5 text-[#1C1C1C] dark:text-white"
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
        <nav className="flex gap-4 pb-3 flex-col">
          <SidebarFavourites isOpen={isOpen} onNavigate={handleNavigation} />
          <SidebarDashboards isOpen={isOpen} onNavigate={handleNavigation} />
          <SidebarPages isOpen={isOpen} onNavigate={handleNavigation} />
        </nav>
      </div>
    </motion.aside>
  );
};

export default Sidebar;