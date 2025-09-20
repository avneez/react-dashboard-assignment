import React from 'react';
import { motion } from 'framer-motion';
// import { X } from 'lucide-react';

interface NotificationsPanelProps {
  onClose?: () => void;
}

const NotificationsPanel: React.FC<NotificationsPanelProps> = () => {
  const notifications = [
    {
      id: 1,
      type: 'bug',
      message: 'You have a bug that needs...',
      time: 'Just now',
      avatar: '/placeholder-user.jpg'
    },
    {
      id: 2,
      type: 'user',
      message: 'New user registered',
      time: '59 minutes ago',
      avatar: '/placeholder-user.jpg'
    },
    {
      id: 3,
      type: 'bug',
      message: 'You have a bug that needs...',
      time: '12 hours ago',
      avatar: '/placeholder-user.jpg'
    },
    {
      id: 4,
      type: 'subscription',
      message: 'Andi Lane subscribed to you',
      time: 'Today, 11:59 AM',
      avatar: '/placeholder-user.jpg'
    }
  ];

  const activities = [
    {
      id: 1,
      message: 'You have a bug that needs...',
      time: 'Just now',
      avatar: '/placeholder-user.jpg'
    },
    {
      id: 2,
      message: 'Released a new version',
      time: '59 minutes ago',
      avatar: '/placeholder-user.jpg'
    },
    {
      id: 3,
      message: 'Submitted a bug',
      time: '12 hours ago',
      avatar: '/placeholder-user.jpg'
    },
    {
      id: 4,
      message: 'Modified A data in Page X',
      time: 'Today, 11:59 AM',
      avatar: '/placeholder-user.jpg'
    },
    {
      id: 5,
      message: 'Deleted a page in Project X',
      time: 'Feb 2, 2023',
      avatar: '/placeholder-user.jpg'
    }
  ];

  const contacts = [
    { id: 1, name: 'Natali Craig', avatar: '/placeholder-user.jpg' },
    { id: 2, name: 'Drew Cano', avatar: '/placeholder-user.jpg' },
    { id: 3, name: 'Orlando Diggs', avatar: '/placeholder-user.jpg' },
    { id: 4, name: 'Andi Lane', avatar: '/placeholder-user.jpg' },
    { id: 5, name: 'Kate Morrison', avatar: '/placeholder-user.jpg' },
    { id: 6, name: 'Koray Okumus', avatar: '/placeholder-user.jpg' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.4 }}
      className="hidden xl:flex xl:flex-col border-l border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 font-inter"
      style={{
        width: '280px',
        height: '100vh',
        position: 'fixed',
        top: '0px',
        right: '0px',
        zIndex: 60,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Header with close button - no border */}
      {/* <div className="flex items-center justify-between p-4 bg-white">
        <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
        {onClose && (
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        )}
      </div> */}

      {/* Scrollable content area with hidden scrollbar */}
      <div
        className="flex-1 px-4 space-y-6 pb-6"
        style={{
          overflowY: 'auto',
          scrollbarWidth: 'none', /* Firefox */
          msOverflowStyle: 'none'  /* IE and Edge */
        }}
      >
        <style>
          {`
            div::-webkit-scrollbar {
              display: none; /* Chrome, Safari, Opera */
            }
          `}
        </style>

        {/* Notifications Section */}
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 font-inter">Notifications</h3>
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div key={notification.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 dark:text-white line-clamp-2 font-inter">{notification.message}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-inter">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities Section */}
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 font-inter">Activities</h3>
          <div className="space-y-3">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 dark:text-white line-clamp-2 font-inter">{activity.message}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-inter">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contacts Section */}
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 font-inter">Contacts</h3>
          <div className="space-y-3">
            {contacts.map((contact) => (
              <div key={contact.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex-shrink-0"></div>
                <p className="text-sm text-gray-900 dark:text-white font-medium font-inter">{contact.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NotificationsPanel;