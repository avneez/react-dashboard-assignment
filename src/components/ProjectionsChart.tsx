import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', actuals: 18, projections: 3 }, // 16M actual + 4M more to reach 20M projection
  { name: 'Feb', actuals: 20, projections: 5 },
  { name: 'Mar', actuals: 17, projections: 4 },
  { name: 'Apr', actuals: 21, projections: 6 },
  { name: 'May', actuals: 14, projections: 4 },
  { name: 'Jun', actuals: 20, projections: 5 },
];

const ProjectionsChart: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      className="bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 font-inter"
      style={{
        width: '432px',
        // height: '252px',
        minWidth: '400px',
        padding: '24px',
        gap: '16px',
        borderRadius: '16px'
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[14px] font-semibold leading-[20px] text-gray-800 dark:text-white">
          Projections vs Actuals
        </h3>
      </div>

      {/* Chart Container */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barCategoryGap="32px"
            maxBarSize={20}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: '#6B7280', fontFamily: 'Inter' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
              tickFormatter={(value) => `${value}M`}
              tick={{ fontSize: 12, fill: '#6B7280', fontFamily: 'Inter' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '12px',
                fontFamily: 'Inter'
              }}
            />
            <Bar dataKey="actuals" stackId="a" fill="#A8C5DA" name="Actuals" />
            <Bar dataKey="projections" stackId="a" fill="#C4D7E8" name="Projections" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ProjectionsChart;