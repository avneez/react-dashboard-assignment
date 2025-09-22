import type { MarkerType, LocationData } from '../interfaces/types';

// World map geo data URL
export const GEO_URL: string = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Map markers for major cities
export const MAP_MARKERS: MarkerType[] = [
  { name: "New York", coordinates: [-74.006, 40.7128] },      // New York City
  { name: "San Francisco", coordinates: [-122.4194, 37.7749] }, // San Francisco
  { name: "Singapore", coordinates: [103.8198, 1.3521] },       // Singapore
  { name: "Australia", coordinates: [151.2093, -33.8688] },    // Sydney
];

// Location data with revenue information
export const LOCATION_DATA: LocationData[] = [
  {
    id: 1,
    city: "New York",
    country: "USA",
    revenue: 72000,
    coordinates: { lng: -74.006, lat: 40.7128 },
  },
  {
    id: 2,
    city: "San Francisco",
    country: "USA",
    revenue: 39000,
    coordinates: { lng: -122.4194, lat: 37.7749 },
  },
  {
    id: 3,
    city: "Sydney",
    country: "Australia",
    revenue: 25000,
    coordinates: { lng: 151.2093, lat: -33.8688 },
  },
  {
    id: 4,
    city: "Singapore",
    country: "Singapore",
    revenue: 61000,
    coordinates: { lng: 103.8198, lat: 1.3521 },
  },
];

// Maximum revenue for scaling calculations
export const MAX_REVENUE = 100000; // 100K