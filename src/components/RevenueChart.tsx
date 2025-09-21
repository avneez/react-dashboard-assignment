import React from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

// The data structure now combines the solid and dotted lines under 'current' again.
const data = [
  { name: 'Jan', current: 15, previous: 10 },
  { name: 'Feb', current: 10, previous: 18 },
  { name: 'Mar', current: 12, previous: 16 },
  { name: 'Apr', current: 18, previous: 12 },
  { name: 'May', current: 21, previous: 15 },
  { name: 'Jun', current: 22, previous: 25 },
];

const RevenueChart: React.FC = () => {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-2 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-md">
          <p className="text-gray-700 dark:text-gray-300">
            {`Current Week: $${(payload[0].value * 1000).toLocaleString()}`}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            {`Previous Week: $${(payload[1].value * 1000).toLocaleString()}`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 font-inter"
      style={{
        width: '662px',
        height: '318px',
        minWidth: '662px',
        padding: '24px',
        gap: '16px',
        borderRadius: '16px'
      }}
    >
      {/* Header and Legend */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <h2 className="text-[14px] font-semibold leading-[20px] text-gray-800 dark:text-white">Revenue</h2>
          <div className="h-6 w-px bg-gray-300 mx-2"></div>
          <div className="flex items-center text-gray-600 dark:text-gray-400 space-x-1">
            <span className="w-2 h-2 bg-black rounded-full inline-block"></span>
            <span className="text-sm font-medium">Current Week</span>
            <span className="font-bold text-gray-800 dark:text-white">$58,211</span>
          </div>
        </div>
        <div className="flex items-center text-gray-600 dark:text-gray-400 space-x-1">
          <span className="w-2 h-2 bg-blue-300 rounded-full inline-block"></span>
          <span className="text-sm font-medium">Previous Week</span>
          <span className="font-bold text-gray-800 dark:text-white">$68,768</span>
        </div>
      </div>

      {/* Chart Container */}
      <div className="w-full h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280', fontFamily: 'Inter' }}
              padding={{left:15, right:15}}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
              tickFormatter={(value) => value!==0 ? `${value}M` : `${value}`}
              tick={{ fontSize: 12, fill: '#6B7280', fontFamily: 'Inter' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="natural"
              dataKey="previous"
              stroke="#A8C3E5"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 8 }}
            />
            <Line
              type="natural"
              dataKey="current"
              stroke="#000000"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 8 }}
            />
            <Line
              type="natural"
              dataKey="projected"
              stroke="#000000"
              strokeWidth={3}
              strokeDasharray="5 5"
              dot={false}
              activeDot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default RevenueChart;