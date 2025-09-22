import React from "react";
import { motion } from "framer-motion";
import NotificationsSection from "./NotificationsSection";
import ActivitiesSection from "./ActivitiesSection";
import ContactsSection from "./ContactsSection";
import type { NotificationsPanelProps } from "../interfaces/types";
import { NOTIFICATIONS, ACTIVITIES, CONTACTS } from "../constants";

const NotificationsPanel: React.FC<NotificationsPanelProps> = () => {
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
        {/* Notifications Section */}
        <NotificationsSection notifications={NOTIFICATIONS} />

        {/* Activities Section */}
        <ActivitiesSection activities={ACTIVITIES} />

        {/* Contacts Section */}
        <ContactsSection contacts={CONTACTS} />
      </div>
    </motion.div>
  );
};

export default NotificationsPanel;
