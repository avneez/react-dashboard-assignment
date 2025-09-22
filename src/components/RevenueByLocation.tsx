import React from "react";
import { motion } from "framer-motion";
import MapWithMarkers from "./MapWithMarkers";
import { LOCATION_DATA, MAP_MARKERS, MAX_REVENUE } from '../constants';

const RevenueByLocation: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="bg-[#F7F9FB] dark:bg-[#18181b] shadow-sm border border-gray-100 dark:border-gray-700 font-inter overflow-hidden"
      style={{
        width: "202px",
        height: "318px",
        minWidth: "200px",
        maxWidth: "272px",
        padding: "24px",
        gap: "16px",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div className="mb-2 flex-shrink-0">
        <h3 className="text-[14px] font-semibold leading-[20px] text-gray-800 dark:text-white">
          Revenue by Location
        </h3>
      </div>
      {/* World Map Container */}
      <div
        className="relative rounded-lg mb-2 flex-shrink-0 border-gray-200 dark:border-gray-600 overflow-hidden"
        style={{
          width: "154px",
          height: "82px",
          borderRadius: "8px",
        }}
      >
        {/* World Map */}
        <MapWithMarkers markers={MAP_MARKERS} />
      </div>

      {/* City List with Progress Bars */}
      <div className="flex-1">
        <div className="space-y-4">
          {LOCATION_DATA.map((location, index) => {
            // Calculate bar width as percentage of max revenue (100K)
            const barWidth = (location.revenue / MAX_REVENUE) * 114; // 114px max width as specified

            return (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index + 0.6, duration: 0.3 }}
                className="flex flex-col space-y-1"
              >
                {/* City Name and Revenue */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 dark:text-white text-[12px]">
                    {location.city}
                  </span>
                  <span className="text-[#1C1C1C] dark:text-white text-[12px]">
                    {(location.revenue / 1000).toFixed(0)}K
                  </span>
                </div>

                {/* Progress Bar Container */}
                <div className="relative mt-0" style={{ marginTop: 0 }}>
                  {/* Background Bar */}
                  <div
                    className="bg-gray-200 dark:bg-gray-600"
                    style={{
                      width: "114px",
                      height: "2px",
                      borderRadius: "80px",
                    }}
                  />
                  {/* Progress Bar */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${barWidth}px` }}
                    transition={{
                      delay: 0.3 * index + 0.8,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    className="absolute top-0 left-0"
                    style={{
                      height: "2px",
                      borderRadius: "80px",
                      backgroundColor: "#A8C5DA",
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default RevenueByLocation;
