import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TopSellingProducts: React.FC = () => {
  // Use state to hold the product data. This data is dynamic and can be
  // updated (e.g., from an API call).
  const [products] = useState([
    { name: 'ASOS Ridley High Waist', price: 79.49, quantity: 82, amount: 6518.18 },
    { name: 'Marco Lightweight Shirt', price: 128.50, quantity: 37, amount: 4754.50 },
    { name: 'Half Sleeve Shirt', price: 39.99, quantity: 64, amount: 2559.36 },
    { name: 'Lightweight Jacket', price: 20.00, quantity: 184, amount: 3680.00 },
    { name: 'Marco Shoes', price: 79.49, quantity: 64, amount: 1965.81 },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="bg-[#F7F9FB] dark:bg-[#18181b] p-6 rounded-2xl shadow-lg w-[662px] h-[336px] min-w-[662px] border border-gray-100 dark:border-gray-700"
    >
      {/* Component Title */}
      <h1 className="text-[14px] font-semibold leading-[20px] text-gray-800 dark:text-white mb-6">Top Selling Products</h1>

      {/* Table container with Tailwind CSS for styling */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-[12px] font-normal leading-[18px] text-gray-600 dark:text-gray-400">
              <th scope="col" className="w-[224px] h-10 min-h-10 p-2 pl-0 border-b border-gray-300 dark:border-gray-600">Name</th>
              <th scope="col" className="w-[130px] h-10 min-h-10 px-3 py-2 border-b border-gray-300 dark:border-gray-600">Price</th>
              <th scope="col" className="w-[130px] h-10 min-h-10 px-3 py-2 border-b border-gray-300 dark:border-gray-600">Quantity</th>
              <th scope="col" className="w-[130px] h-10 min-h-10 px-3 py-2 border-b border-gray-300 dark:border-gray-600 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="">
            {/* Map through the products array to render each row dynamically */}
            {products.map((product, index) => (
              <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-0 py-2 whitespace-nowrap text-[12px] font-normal leading-[18px] text-gray-900 dark:text-white">{product.name}</td>
                <td className="px-3 py-2 whitespace-nowrap text-[12px] font-normal leading-[18px] text-gray-600 dark:text-gray-300">${product.price.toFixed(2)}</td>
                <td className="px-3 py-2 whitespace-nowrap text-[12px] font-normal leading-[18px] text-gray-600 dark:text-gray-300">{product.quantity}</td>
                <td className="px-3 py-2 whitespace-nowrap text-[12px] font-normal leading-[18px] text-gray-600 dark:text-gray-300 text-right">${product.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default TopSellingProducts;