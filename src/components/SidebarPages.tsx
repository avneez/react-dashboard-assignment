import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { CaretDownIcon, CaretRightIcon, UserProfileIcon, AccountIcon, CorporateIcon, BlogIcon, SocialIcon } from './Icons';

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

interface SidebarPagesProps {
  isOpen: boolean;
  onNavigate: (path: string) => void;
}

const SidebarPages: React.FC<SidebarPagesProps> = ({ isOpen, onNavigate }) => {
  const [isUserProfileExpanded, setIsUserProfileExpanded] = useState(false);

  const pagesItems: MenuItem[] = [
    {
      icon: UserProfileIcon,
      label: 'User Profile',
      active: false,
      path: '/profile',
      hasSubItems: true,
      subItems: [
        { label: 'Overview', path: '/profile/overview' },
        { label: 'Projects', path: '/profile/projects' },
        { label: 'Campaigns', path: '/profile/campaigns' },
        { label: 'Documents', path: '/profile/documents' },
        { label: 'Followers', path: '/profile/followers' }
      ]
    },
    { icon: AccountIcon, label: 'Account', active: false, path: '/account' },
    { icon: CorporateIcon, label: 'Corporate', active: false, path: '/corporate' },
    { icon: BlogIcon, label: 'Blog', active: false, path: '/blog' },
    { icon: SocialIcon, label: 'Social', active: false, path: '/social' }
  ];

  const getWrapperHeight = () => {
    return isUserProfileExpanded ? 'h-[360px]' : 'h-auto';
  };

  return (
    <div className={clsx('pb-3', isOpen ? getWrapperHeight() : '')}>
      {isOpen && (
        <p className="text-[#1C1C1C66] text-[14px] px-3 py-1 dark:text-gray-400 tracking-wider mb-1">
          Pages
        </p>
      )}

      <ul className="space-y-1">
        {pagesItems.map((item, itemIndex) => (
          <li key={itemIndex}>
            <button
              onClick={() => {
                if (item.hasSubItems && item.label === 'User Profile' && isOpen) {
                  setIsUserProfileExpanded(!isUserProfileExpanded);
                } else if (!item.hasSubItems) {
                  onNavigate(item.path);
                }
              }}
              className={clsx(
                'w-full flex items-center rounded-[8px] transition-colors group',
                isOpen ? 'px-2 py-1' : 'px-2 py-2 justify-center',
                {
                  'bg-blue-50 dark:bg-[#ffffff1a]': item.active,
                  'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#ffffff1a]': !item.active
                }
              )}
            >
              {/* Always render caret space for consistent alignment when open */}
              {isOpen && (
                <div className="flex-shrink-0 w-4 h-4 mr-1">
                  {item.hasSubItems ? (
                    isUserProfileExpanded ? <CaretDownIcon className="text-gray-500 dark:text-white" /> : <CaretRightIcon className="text-gray-500 dark:text-white" />
                  ) : (
                    <CaretRightIcon className="text-gray-500 dark:text-white" />
                  )}
                </div>
              )}
              <item.icon className={clsx('w-5 h-5 flex-shrink-0', {
                'text-blue-600 dark:text-blue-400': item.active,
                'text-black dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300': !item.active
              })} />
              {isOpen && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`font-inter ${isOpen ? 'ml-1' : ''} font-normal text-[14px] leading-[20px] text-[#1C1C1C] dark:text-white`}
                  style={{
                    fontStyle: 'normal',
                    letterSpacing: '0%'
                  }}
                >
                  {item.label}
                </motion.span>
              )}
            </button>

            {/* Nested items for User Profile */}
            {item.hasSubItems && isUserProfileExpanded && isOpen && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="ml-12 mt-1 mb-1 space-y-1"
              >
                {item.subItems?.map((subItem: SubItem, subIndex: number) => (
                  <li key={subIndex}>
                    <button
                      onClick={() => onNavigate(subItem.path)}
                      className="w-full text-left px-2 py-1 font-inter font-normal text-[14px] leading-[20px] text-[#1C1C1C] dark:text-white hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-[#ffffff1a] rounded-lg transition-colors"
                      style={{
                        fontStyle: 'normal',
                        letterSpacing: '0%'
                      }}
                    >
                      {subItem.label}
                    </button>
                  </li>
                ))}
              </motion.ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarPages;