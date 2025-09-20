import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Filter, Search, MoreHorizontal } from 'lucide-react';

interface Order {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  project: string;
  address: string;
  date: string;
  status: 'In Progress' | 'Complete' | 'Pending' | 'Approved' | 'Rejected';
}

const orders: Order[] = [
  {
    id: '#CM9801',
    user: { name: 'Natali Craig', avatar: '/api/placeholder/32/32' },
    project: 'Landing Page',
    address: 'Meadow Lane Oakland',
    date: 'Just now',
    status: 'In Progress'
  },
  {
    id: '#CM9802',
    user: { name: 'Kate Morrison', avatar: '/api/placeholder/32/32' },
    project: 'CRM Admin pages',
    address: 'Larry San Francisco',
    date: 'A minute ago',
    status: 'Complete'
  },
  {
    id: '#CM9803',
    user: { name: 'Drew Cano', avatar: '/api/placeholder/32/32' },
    project: 'Client Project',
    address: 'Bagwell Avenue Ocala',
    date: '1 hour ago',
    status: 'Pending'
  },
  {
    id: '#CM9804',
    user: { name: 'Orlando Diggs', avatar: '/api/placeholder/32/32' },
    project: 'Admin Dashboard',
    address: 'Washburn Baton Rouge',
    date: 'Yesterday',
    status: 'Approved'
  },
  {
    id: '#CM9805',
    user: { name: 'Andi Lane', avatar: '/api/placeholder/32/32' },
    project: 'App Landing Page',
    address: 'Nest Lane Olivette',
    date: 'Feb 2, 2023',
    status: 'Rejected'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'In Progress':
      return 'bg-blue-100 text-blue-800';
    case 'Complete':
      return 'bg-green-100 text-green-800';
    case 'Pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'Approved':
      return 'bg-green-100 text-green-800';
    case 'Rejected':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const EcommercePage: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Order List
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage and track all orders
          </p>
        </div>
      </div>

      {/* Order List Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card p-6"
      >
        {/* Table Header Actions */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Order List
          </h2>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <Plus className="w-4 h-4" />
              Add
            </button>

            <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <Filter className="w-4 h-4" />
              Filter
            </button>

            <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <Search className="w-4 h-4" />
              Search
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border-0 rounded-lg text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400 text-sm">
                  Order ID
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400 text-sm">
                  User
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400 text-sm">
                  Project
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400 text-sm">
                  Address
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400 text-sm">
                  Date
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400 text-sm">
                  Status
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400 text-sm">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <motion.tr
                  key={order.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {order.id}
                    </span>
                  </td>

                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          {order.user.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {order.user.name}
                      </span>
                    </div>
                  </td>

                  <td className="py-4 px-4">
                    <span className="text-gray-700 dark:text-gray-300">
                      {order.project}
                    </span>
                  </td>

                  <td className="py-4 px-4">
                    <span className="text-gray-700 dark:text-gray-300">
                      {order.address}
                    </span>
                  </td>

                  <td className="py-4 px-4">
                    <span className="text-gray-700 dark:text-gray-300">
                      {order.date}
                    </span>
                  </td>

                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>

                  <td className="py-4 px-4">
                    <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
                      <MoreHorizontal className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center mt-6 gap-2">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
            <span className="text-gray-500 dark:text-gray-400">‹</span>
          </button>

          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-8 h-8 rounded transition-colors ${
                page === 1
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {page}
            </button>
          ))}

          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
            <span className="text-gray-500 dark:text-gray-400">›</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default EcommercePage;