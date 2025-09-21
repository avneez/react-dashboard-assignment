import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

const TotalSales: React.FC = () => {
  const [rawSalesData] = useState([
    { name: 'Direct', amount: 300.56, color: '#2F3349' },     // Black - largest
    { name: 'E-mail', amount: 48.96, color: '#7DD3FC' },      // Blue - smallest
    { name: 'Affilliate', amount: 135.18, color: '#95D3AE' }, // Green
    { name: 'Sponsored', amount: 154.02, color: '#8B9CF5' }   // Purple
  ]);

  // Calculate total amount and percentages
  const totalAmount = rawSalesData.reduce((sum, item) => sum + item.amount, 0);
  const salesData = rawSalesData.map(item => ({
    ...item,
    value: Number(((item.amount / totalAmount) * 100).toFixed(1))
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-gray-700 text-white px-2 py-1 rounded text-xs font-medium shadow-lg">
          {data.value}%
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      className="bg-[#F7F9FB] dark:bg-[#18181b] shadow-sm border border-gray-100 dark:border-gray-700 font-inter overflow-hidden"
      style={{
        width: '202px',
        height: '344px',
        minWidth: '200px',
        maxWidth: '272px',
        padding: '24px',
        gap: '16px',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Header */}
      <div className="mb-4 flex-shrink-0">
        <h3 className="text-[14px] font-semibold leading-[20px] text-gray-800 dark:text-white">
          Total Sales
        </h3>
      </div>

      {/* Chart Container */}
      <div className="flex justify-center mb-3 flex-shrink-0" style={{ width: '120px', height: '120px', margin: '0 auto' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={salesData}
              cx="50%"
              cy="50%"
              startAngle={-90}
              endAngle={270}
              innerRadius={35}
              outerRadius={50}
              paddingAngle={-20}
              cornerRadius={30}
              dataKey="value"
            >
              {salesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-2">
          {salesData.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index + 0.5, duration: 0.3 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-2">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs font-medium text-gray-900 dark:text-white truncate">
                  {item.name}
                </span>
              </div>
              <span className="text-xs font-medium text-gray-900 dark:text-white flex-shrink-0">
                ${item.amount.toFixed(2)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TotalSales;