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
import { useTheme } from '../contexts/ThemeContext';

// The data structure - split current data into solid (Jan-Apr) and dashed (May-Jun) portions
const data = [
  { name: 'Jan', current: 15, previous: 10, currentDashed: null },
  { name: 'Feb', current: 10, previous: 18, currentDashed: null },
  { name: 'Mar', current: 12, previous: 17, currentDashed: null },
  { name: 'Apr', current: 18, previous: 12, currentDashed: 18 },
  { name: 'May', current: null, previous: 16, currentDashed: 22 },
  { name: 'Jun', current: null, previous: 25, currentDashed: 22 },
];

const RevenueChart: React.FC = () => {
  const { isDarkMode } = useTheme();

  // Dynamic stroke color based on theme
  const currentLineColor = isDarkMode ? '#C6C7F8' : '#000000';

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      // Get current value from either solid or dashed line
      const currentValue = payload.find((p: any) => p.dataKey === 'current')?.value ||
        payload.find((p: any) => p.dataKey === 'currentDashed')?.value;
      const previousValue = payload.find((p: any) => p.dataKey === 'previous')?.value;

      return (
        <div className="p-2 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-md">
          <p className="font-bold text-black dark:text-white">
            {`${label}`}
          </p>
          {currentValue && (
            <p className="text-gray-700 dark:text-gray-300">
              {`Current Week: $${(currentValue * 1000).toLocaleString()}`}
            </p>
          )}
          {previousValue && (
            <p className="text-gray-700 dark:text-gray-300">
              {`Previous Week: $${(previousValue * 1000).toLocaleString()}`}
            </p>
          )}
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
      className="bg-[#F7F9FB] dark:bg-[#18181b] shadow-sm border border-gray-100 dark:border-gray-700 font-inter"
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
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <h2 className="text-[14px] font-semibold leading-[20px] text-gray-800 dark:text-white">Revenue</h2>
        <div className="h-4 w-px bg-gray-300 mx-2"></div>
        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <span className="w-[6px] h-[6px] bg-black rounded-full inline-block m-[5px]"></span>
          <span className="text-[12px] font-medium">Current Week</span>
          <span className="text-[12px] font-semibold text-gray-800 dark:text-white ml-2">$58,211</span>
        </div>
        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <span className="w-[6px] h-[6px] bg-blue-300 rounded-full inline-block m-[5px]"></span>
          <span className="text-[12px] font-medium">Previous Week</span>
          <span className="text-[12px] font-semibold text-gray-800 dark:text-white ml-2">$68,768</span>
        </div>
      </div>

      {/* Chart Container */}
      <div className="w-[614px] h-[232px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 18,
              left: 25,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280', fontFamily: 'Inter' }}
              tickMargin={10}
              interval={0}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
              tickFormatter={(value) => value !== 0 ? `${value}M` : `${value}`}
              tick={{ fontSize: 12, fill: '#6B7280', fontFamily: 'Inter' }}
              width={24}
              tickMargin={16}
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
            {/* Solid line for current data (Jan-Apr) */}
            <Line
              type="natural"
              dataKey="current"
              stroke={currentLineColor}
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 8 }}
              connectNulls={false}
            />
            {/* Dashed line for current data (May-Jun) */}
            <Line
              type="natural"
              dataKey="currentDashed"
              stroke={currentLineColor}
              strokeWidth={3}
              strokeDasharray="5 5"
              dot={false}
              activeDot={{ r: 8 }}
              connectNulls={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default RevenueChart;