import React from "react";
// import { NOTIFICATION_ICONS } from '../constants';
import type { NotificationsSectionProps } from '../interfaces/types';
import { BugIcon, NewUserIcon, SubscribedIcon } from "./Icons";

const NotificationsSection: React.FC<NotificationsSectionProps> = ({ notifications }) => {
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
        {notifications.map((notification) => {
          return (
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
              <div className="w-6 h-6 flex items-center justify-center">
                {notification.type==="bug" && <BugIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />}
                {notification.type==="user" && <NewUserIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />}
                {notification.type==="subscription" && <SubscribedIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 dark:text-white line-clamp-2 font-inter">
                  {notification.message}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-inter">
                  {notification.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotificationsSection;
