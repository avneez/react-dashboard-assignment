import React from 'react';
import MetricCards from '../components/MetricCards';
import ProjectionsChart from '../components/ProjectionsChart';
import RevenueChart from '../components/RevenueChart';
import TopSellingProducts from '../components/TopSellingProducts';
import TotalSales from '../components/TotalSales';
import RevenueByLocation from '../components/RevenueByLocation';

const Dashboard: React.FC = () => {
  return (
    <div className="flex dark:bg-black">
      {/* Main Content Container */}
      <div className="flex-1 xl:pr-[300px] ml-[30px] ">
        {/* Page Header */}
        <div className="flex items-center justify-between space-y-6 mb-6">
          <div>
            <h1 className="text-[14px] font-semibold text-gray-900 dark:text-white">
              eCommerce
            </h1>
          </div>
        </div>

        {/* Main Container for all 6 components */}
        <div
          style={{
            width: '892px',
            height: '970px',
            gap: '28px',
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '96px'
          }}
        >
          {/* 1st Row: MetricCards (50%) + ProjectionsChart (50%) */}
          <div style={{ display: 'flex', gap: '28px' }}>
            {/* MetricCards */}
            <div style={{
              width: '432px',
              height: '252px'
            }}>
              <MetricCards />
            </div>

            {/* ProjectionsChart */}
            <ProjectionsChart />
          </div>

          {/* 2nd Row: Revenue + Revenue by Location */}
          <div style={{ display: 'flex', gap: '28px' }}>
            {/* Revenue Chart */}
            <RevenueChart />

            {/* Revenue by Location */}
            <RevenueByLocation />
          </div>

          {/* 3rd Row: Top Selling Products + Total Sales */}
          <div style={{ display: 'flex', gap: '28px' }}>
            {/* Top Selling Products */}
            <TopSellingProducts />

            {/* Total Sales */}
            <TotalSales />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;