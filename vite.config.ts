import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks - split by major dependencies
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('react-router')) {
              return 'router-vendor';
            }
            if (id.includes('framer-motion')) {
              return 'animation-vendor';
            }
            if (id.includes('lucide-react')) {
              return 'icons-vendor';
            }
            if (id.includes('recharts') || id.includes('chart')) {
              return 'charts-vendor';
            }
            // All other node_modules
            return 'vendor';
          }

          // Feature-based chunks for our code
          if (id.includes('components/')) {
            if (id.includes('Chart') || id.includes('Pie') || id.includes('Revenue') || id.includes('Projections')) {
              return 'charts';
            }
            if (id.includes('OrderTable') || id.includes('Order')) {
              return 'orders';
            }
            if (id.includes('Sidebar') || id.includes('Layout') || id.includes('Header')) {
              return 'layout';
            }
            return 'components';
          }

          if (id.includes('pages/')) {
            if (id.includes('Ecommerce')) {
              return 'dashboard-page';
            }
            if (id.includes('Order')) {
              return 'orders-page';
            }
          }

          if (id.includes('utils/')) {
            return 'utils';
          }
        }
      }
    },
    chunkSizeWarningLimit: 600,
    // Enable source maps for better debugging
    sourcemap: false,
    // Minimize bundle size
    minify: 'esbuild',
    // Target modern browsers for smaller bundles
    target: 'es2015'
  }
})
