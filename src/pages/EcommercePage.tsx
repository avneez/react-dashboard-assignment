import React, { Suspense } from 'react';
import MetricCards from '../components/MetricCards';
import ChartLoader from '../components/ChartLoader';

// Lazy load heavy chart components
const ProjectionsChart = React.lazy(() => import('../components/ProjectionsChart'));
const RevenueChart = React.lazy(() => import('../components/RevenueChart'));
const TopSellingProducts = React.lazy(() => import('../components/TopSellingProducts'));
const TotalSales = React.lazy(() => import('../components/TotalSales'));
const RevenueByLocation = React.lazy(() => import('../components/RevenueByLocation'));

const EcommercePage: React.FC = () => {
  return (
    <div className="flex dark:bg-black ml-8">
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
            <Suspense fallback={<ChartLoader width="432px" height="252px" />}>
                <ProjectionsChart />
              </Suspense>
          </div>

          {/* 2nd Row: Revenue + Revenue by Location */}
          <div style={{ display: 'flex', gap: '28px' }}>
            {/* Revenue Chart */}
            <Suspense fallback={<ChartLoader width="432px" height="348px" />}>
                <RevenueChart />
              </Suspense>

            {/* Revenue by Location */}
            <Suspense fallback={<ChartLoader width="432px" height="348px" />}>
                <RevenueByLocation />
              </Suspense>
          </div>

          {/* 3rd Row: Top Selling Products + Total Sales */}
          <div style={{ display: 'flex', gap: '28px' }}>
            {/* Top Selling Products */}
            <Suspense fallback={<ChartLoader width="432px" height="322px" />}>
                <TopSellingProducts />
              </Suspense>

            {/* Total Sales */}
            <Suspense fallback={<ChartLoader width="432px" height="322px" />}>
                <TotalSales />
              </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommercePage;
