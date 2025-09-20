import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Home,
  FolderOpen,
  BarChart3,
  ShoppingCart,
  Users,
  Star,
  ChevronDown,
  Heart
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      category: 'Favourites',
      items: [
        { icon: Home, label: 'Overview', active: false, path: '/' },
        { icon: FolderOpen, label: 'Projects', active: false, path: '/projects' }
      ]
    },
    {
      category: 'Dashboards',
      items: [
        { icon: BarChart3, label: 'Default', active: location.pathname === '/', path: '/' },
        { icon: ShoppingCart, label: 'eCommerce', active: location.pathname === '/ecommerce', path: '/ecommerce' },
        { icon: FolderOpen, label: 'Projects', active: false, path: '/projects' },
        { icon: Users, label: 'Online Courses', active: false, path: '/courses' }
      ]
    },
    {
      category: 'Pages',
      items: [
        { icon: Users, label: 'User Profile', active: false, path: '/profile' },
        { icon: FolderOpen, label: 'Account', active: false, path: '/account' },
        { icon: Star, label: 'Corporate', active: false, path: '/corporate' },
        { icon: FolderOpen, label: 'Blog', active: false, path: '/blog' },
        { icon: Heart, label: 'Social', active: false, path: '/social' }
      ]
    }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <motion.aside
      animate={{ width: isOpen ? 256 : 64 }}
      className="fixed left-0 top-0 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-50"
    >
      <div className="p-6">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          {isOpen && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-semibold text-lg text-gray-900 dark:text-white"
            >
              ByeWind
            </motion.span>
          )}
        </div>

        {/* Menu Items */}
        <nav className="space-y-6">
          {menuItems.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {isOpen && (
                <h3 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  {category.category}
                </h3>
              )}

              <ul className="space-y-1">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className={clsx(
                        'w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group',
                        {
                          'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400': item.active,
                          'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700': !item.active
                        }
                      )}
                    >
                      <item.icon className={clsx('w-5 h-5 flex-shrink-0', {
                        'text-blue-600 dark:text-blue-400': item.active,
                        'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300': !item.active
                      })} />
                      {isOpen && (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-sm font-medium"
                        >
                          {item.label}
                        </motion.span>
                      )}
                      {isOpen && item.label === 'Projects' && (
                        <ChevronDown className="w-4 h-4 ml-auto text-gray-400" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </motion.aside>
  );
};

export default Sidebar;