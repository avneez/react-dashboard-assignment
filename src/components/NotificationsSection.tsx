import React from "react";

interface Notification {
  id: number;
  type: string;
  message: string;
  time: string;
  avatar: React.ReactNode;
}

interface NotificationsSectionProps {
  notifications: Notification[];
}

const NotificationsSection: React.FC<NotificationsSectionProps> = ({
  notifications,
}) => {
  return (
    <div
      className="flex flex-col gap-2"
      style={{ width: "240px", height: "252px" }}
    >
      <div
        className="bg-transparent rounded-lg"
        style={{
          width: "240px",
          height: "36px",
          borderRadius: "8px",
          paddingTop: "8px",
          paddingRight: "4px",
          paddingBottom: "8px",
          paddingLeft: "4px",
        }}
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-inter">
          Notifications
        </h3>
      </div>
      <div className="flex flex-col gap-2">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors align-center"
            style={{
              width: "232px",
              height: "46px",
              gap: "8px",
              borderRadius: "8px",
              padding: "4px",
            }}
          >
            <div className="w-6 h-6">{notification.avatar}</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900 dark:text-white line-clamp-2 font-inter">
                {notification.message}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-inter">
                {notification.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsSection;
