import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface LocationData {
  id: number;
  city: string;
  country: string;
  revenue: number;
  coordinates: {
    lng: number; // longitude
    lat: number; // latitude
  };
}

const RevenueByLocation: React.FC = () => {
  const [locationData] = useState<LocationData[]>([
    {
      id: 1,
      city: 'New York',
      country: 'USA',
      revenue: 72000,
      coordinates: { lng: -74.006, lat: 40.7128 }
    },
    {
      id: 2,
      city: 'San Francisco',
      country: 'USA',
      revenue: 39000,
      coordinates: { lng: -122.4194, lat: 37.7749 }
    },
    {
      id: 3,
      city: 'Sydney',
      country: 'Australia',
      revenue: 25000,
      coordinates: { lng: 151.2093, lat: -33.8688 }
    },
    {
      id: 4,
      city: 'Singapore',
      country: 'Singapore',
      revenue: 61000,
      coordinates: { lng: 103.8198, lat: 1.3521 }
    }
  ]);

  // Calculate the maximum revenue for scaling bars (assume 100K as total width reference)
  const maxRevenue = 100000; // 100K

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 font-inter overflow-hidden"
      style={{
        width: '202px',
        height: '318px',
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
      <div className="mb-2 flex-shrink-0">
        <h3 className="text-[14px] font-semibold leading-[20px] text-gray-800 dark:text-white">
          Revenue by Location
        </h3>
      </div>      {/* World Map Container */}
      <div
        className="relative bg-gray-50 dark:bg-gray-700 rounded-lg mb-2 flex-shrink-0 border border-gray-200 dark:border-gray-600 overflow-hidden"
        style={{
          width: '154px',
          height: '82px',
          borderRadius: '8px'
        }}
      >
        {/* World Map PNG Image */}
        <img
          src="/World Map.png"
          alt="World Map"
          className="w-full h-full object-cover"
          style={{
            filter: 'grayscale(100%) brightness(1.1) contrast(0.9)',
            opacity: 0.7
          }}
        />
      </div>

      {/* City List with Progress Bars */}
      <div className="flex-1 overflow-hidden">
        <div className="space-y-2">
          {locationData.map((location, index) => {
            // Calculate bar width as percentage of max revenue (100K)
            const barWidth = (location.revenue / maxRevenue) * 114; // 114px max width as specified

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
                  <span className="text-gray-900 dark:text-white font-medium text-sm">
                    {location.city}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                    {(location.revenue / 1000).toFixed(0)}K
                  </span>
                </div>

                {/* Progress Bar Container */}
                <div className="relative">
                  {/* Background Bar */}
                  <div
                    className="bg-gray-200 dark:bg-gray-600"
                    style={{
                      width: '114px',
                      height: '2px',
                      borderRadius: '80px'
                    }}
                  />
                  {/* Progress Bar */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${barWidth}px` }}
                    transition={{ delay: 0.3 * index + 0.8, duration: 0.6, ease: "easeOut" }}
                    className="absolute top-0 left-0"
                    style={{
                      height: '2px',
                      borderRadius: '80px',
                      backgroundColor: '#A8C5DA'
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