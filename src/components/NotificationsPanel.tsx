import React from "react";
import { motion } from "framer-motion";
import NotificationsSection from "./NotificationsSection";
import ActivitiesSection from "./ActivitiesSection";
import ContactsSection from "./ContactsSection";
import { BugIcon, NewUserIcon, SubscribedIcon } from "./Icons";

interface NotificationsPanelProps {
  onClose?: () => void;
}

const NotificationsPanel: React.FC<NotificationsPanelProps> = () => {
  const notifications = [
    {
      id: 1,
      type: "bug",
      message: "You have a bug that needs...",
      time: "Just now",
      avatar: <BugIcon />,
    },
    {
      id: 2,
      type: "user",
      message: "New user registered",
      time: "59 minutes ago",
      avatar: <NewUserIcon />,
    },
    {
      id: 3,
      type: "bug",
      message: "You have a bug that needs...",
      time: "12 hours ago",
      avatar: <BugIcon />,
    },
    {
      id: 4,
      type: "subscription",
      message: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
      avatar: <SubscribedIcon />,
    },
  ];

  const activities = [
    {
      id: 1,
      message: "You have a bug that needs...",
      time: "Just now",
      avatar: "/3D05.png",
    },
    {
      id: 2,
      message: "Released a new version",
      time: "59 minutes ago",
      avatar: "/Female05.png",
    },
    {
      id: 3,
      message: "Submitted a bug",
      time: "12 hours ago",
      avatar: "/3D08.png",
    },
    {
      id: 4,
      message: "Modified A data in Page X",
      time: "Today, 11:59 AM",
      avatar: "/Male07.png",
    },
    {
      id: 5,
      message: "Deleted a page in Project X",
      time: "Feb 2, 2023",
      avatar: "/Male11.png",
    },
  ];

  const contacts = [
    { id: 1, name: "Natali Craig", avatar: "/Female15.png" },
    { id: 2, name: "Drew Cano", avatar: "/Male08.png" },
    { id: 3, name: "Orlando Diggs", avatar: "/Male06.png" },
    { id: 4, name: "Andi Lane", avatar: "/Female05.png" },
    { id: 5, name: "Kate Morrison", avatar: "/Female09.png" },
    { id: 6, name: "Koray Okumus", avatar: "/Male07.png" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.4 }}
      className="hidden xl:flex xl:flex-col border-l border-gray-300 dark:border-gray-700 bg-white dark:bg-black font-inter"
      style={{
        width: "280px",
        height: "100vh",
        position: "fixed",
        top: "0px",
        right: "0px",
        zIndex: 60,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Scrollable content area with hidden scrollbar */}
      <div
        className="flex-1 px-4 space-y-6 pb-6"
        style={{
          overflowY: "auto",
          scrollbarWidth: "none" /* Firefox */,
          msOverflowStyle: "none" /* IE and Edge */,
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
        <NotificationsSection notifications={notifications} />

        {/* Activities Section */}
        <ActivitiesSection activities={activities} />

        {/* Contacts Section */}
        <ContactsSection contacts={contacts} />
      </div>
    </motion.div>
  );
};

export default NotificationsPanel;
