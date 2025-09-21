import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import type { LocationData } from '../interfaces/types';

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
      className="bg-[#F7F9FB] dark:bg-[#18181b] shadow-sm border border-gray-100 dark:border-gray-700 font-inter overflow-hidden"
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
        className="relative rounded-lg mb-2 flex-shrink-0 border-gray-200 dark:border-gray-600 overflow-hidden"
        style={{
          width: '154px',
          height: '82px',
          borderRadius: '8px'
        }}
      >
        {/* World Map */}
      <MapWithMarkers/>
      </div>

      {/* City List with Progress Bars */}
      <div className="flex-1">
        <div className="space-y-4">
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
                  <span className="text-gray-900 dark:text-white text-[12px]">
                    {location.city}
                  </span>
                  <span className="text-[#1C1C1C] dark:text-gray-400 text-[12px]">
                    {(location.revenue / 1000).toFixed(0)}K
                  </span>
                </div>

                {/* Progress Bar Container */}
                <div className="relative mt-0" style={{marginTop: 0}}>
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


const geoUrl: string =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

type MarkerType = {
  name: string;
  coordinates: [number, number]; // [longitude, latitude]
};

const markers: MarkerType[] = [
  { name: "New York", coordinates: [-74.006, 40.7128] },      // New York City
  { name: "San Francisco", coordinates: [-122.4194, 37.7749] }, // San Francisco
  { name: "Singapore", coordinates: [103.8198, 1.3521] },       // Singapore
  { name: "Australia", coordinates: [151.2093, -33.8688] },    // Sydney
];

const MapWithMarkers: React.FC = () => {
  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#A8C5DA"
              stroke="#A8C5DA"
              strokeWidth={0.5}
            />
          ))
        }
      </Geographies>

      {markers.map(({ name, coordinates }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle
            r={12}
            fill="#000000"
            stroke="#FFFFFF"
            strokeWidth={4}
          />
        </Marker>
      ))}
    </ComposableMap>
  );
};
