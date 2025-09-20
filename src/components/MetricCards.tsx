import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  delay?: number;
  bgColor?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  isPositive,
  delay = 0,
  bgColor
}) => {
  // For cards with custom background colors (Customers and Growth), keep text black in dark mode
  const hasCustomBg = !!bgColor;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 min-w-[200px] w-full h-fit flex flex-col gap-2 group hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
      style={{
        minWidth: '200px',
        backgroundColor: bgColor
      }}
    >
      <div className="flex flex-col">
        <p className={`text-sm font-medium mb-2 ${
          hasCustomBg
            ? 'text-gray-600'
            : 'text-gray-600 dark:text-gray-400'
        }`}>
          {title}
        </p>
        <p className={`text-2xl font-bold mb-2 ${
          hasCustomBg
            ? 'text-gray-900'
            : 'text-gray-900 dark:text-white'
        }`}>
          {value}
        </p>
        <div className="flex items-center gap-1">
          <span className={`text-sm font-medium ${
            hasCustomBg
              ? 'text-gray-800'
              : 'text-gray-800 dark:text-gray-300'
          }`}>
            {change}
          </span>
          {isPositive ? (
            <TrendingUp className={`w-4 h-4 ${
              hasCustomBg
                ? 'text-gray-800'
                : 'text-gray-800 dark:text-gray-300'
            }`} />
          ) : (
            <TrendingDown className={`w-4 h-4 ${
              hasCustomBg
                ? 'text-gray-800'
                : 'text-gray-800 dark:text-gray-300'
            }`} />
          )}
        </div>
      </div>
    </motion.div>
  );
};

const MetricCards: React.FC = () => {
  const metrics = [
    {
      title: 'Customers',
      value: '3,781',
      change: '+11.01%',
      isPositive: true,
      bgColor: '#E3F5FF',
    },
    {
      title: 'Orders',
      value: '1,219',
      change: '-0.03%',
      isPositive: false,
    },
    {
      title: 'Revenue',
      value: '$695',
      change: '+15.03%',
      isPositive: true,
    },
    {
      title: 'Growth',
      value: '30.1%',
      change: '+6.08%',
      isPositive: true,
      bgColor: '#E5ECF6',
    },
  ];

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
      style={{
        width: '432px',
        height: '252px',
        opacity: 1,
        gap: '28px'
      }}
    >
      {metrics.map((metric, index) => (
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