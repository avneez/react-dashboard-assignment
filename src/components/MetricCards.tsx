import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import type { MetricCardProps } from "../interfaces/types";
import { METRICS } from "../constants";

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  isPositive,
  delay = 0,
  bgColor,
}) => {
  // For cards with custom background colors (Customers and Growth), keep text black in dark mode
  const hasCustomBg = !!bgColor;
  const isOrdersOrRevenue = title === "Orders" || title === "Revenue";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className={`rounded-2xl p-6 min-w-[200px] w-full h-fit flex flex-col gap-2 group hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 font-inter ${
        isOrdersOrRevenue
          ? "bg-[#F7F9FB] dark:bg-[#18181b]"
          : "bg-white dark:bg-gray-800"
      }`}
      style={{
        minWidth: "200px",
        ...(bgColor && !isOrdersOrRevenue ? { backgroundColor: bgColor } : {}),
      }}
    >
      <div className="flex flex-col">
        <p
          className={`text-[14px] text-[#000] font-semibold mb-2 ${
            hasCustomBg
              ? "text-gray-600"
              : isOrdersOrRevenue
              ? "text-gray-600 dark:text-white"
              : "text-gray-600 dark:text-gray-400"
          }`}
        >
          {title}
        </p>
        <div className="flex items-center justify-between gap-4">
          <p
            className={`text-2xl font-semibold ${
              hasCustomBg
                ? "text-gray-900"
                : isOrdersOrRevenue
                ? "text-gray-900 dark:text-white"
                : "text-gray-900 dark:text-white"
            }`}
          >
            {value}
          </p>
          <div className="flex items-center gap-1">
            <span
              className={`text-sm font-medium ${
                hasCustomBg
                  ? "text-gray-800"
                  : isOrdersOrRevenue
                  ? "text-gray-800 dark:text-white"
                  : "text-gray-800 dark:text-gray-300"
              }`}
            >
              {change}
            </span>
            {isPositive ? (
              <TrendingUp
                className={`w-4 h-4 ${
                  hasCustomBg
                    ? "text-gray-800"
                    : isOrdersOrRevenue
                    ? "text-gray-800 dark:text-white"
                    : "text-gray-800 dark:text-gray-300"
                }`}
              />
            ) : (
              <TrendingDown
                className={`w-4 h-4 ${
                  hasCustomBg
                    ? "text-gray-800"
                    : isOrdersOrRevenue
                    ? "text-gray-800 dark:text-white"
                    : "text-gray-800 dark:text-gray-300"
                }`}
              />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MetricCards: React.FC = () => {

  return (
    <div className="w-[432px] h-[252px] gap-7 opacity-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 font-inter">
      {METRICS.map((metric, index) => (
        <MetricCard
          key={metric.title}
          title={metric.title}
          value={metric.value}
          change={metric.change}
          isPositive={metric.isPositive}
          bgColor={metric.bgColor}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
};

export default MetricCards;