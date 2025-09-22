import React, { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import ActionsBar from "../components/ActionsBar";
import SearchBar from "../components/SearchBar";
import TableLoader from "../components/TableLoader";
import { OrdersAPI } from "../services/ordersAPI";
import { searchOrderFields } from "../utils/helpers";
import type { Order } from "../interfaces/types";

// Lazy load the heavy OrderTable component
const OrderTable = React.lazy(() => import("../components/OrderTable"));

const OrderLists: React.FC = () => {
  const [originalOrders, setOriginalOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [allChecked, setAllChecked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'none'>('none');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Apply filters to orders
  const applyFilters = (orders: Order[], filters: string[]) => {
    if (filters.length === 0) {
      return orders;
    }
    return orders.filter(order => filters.includes(order.status));
  };

  // Handle filter changes
  const handleFilter = (statuses: string[]) => {
    setActiveFilters(statuses);

    let ordersToFilter;
    if (searchQuery.trim() === "") {
      ordersToFilter = originalOrders;
    } else {
      ordersToFilter = originalOrders.filter(order => searchOrderFields(order, searchQuery));
    }

    const filtered = applyFilters(ordersToFilter, statuses);

    let finalOrders = filtered;
    if (sortOrder !== 'none') {
      finalOrders = OrdersAPI.sortOrdersByDate(filtered, sortOrder);
    }

    setFilteredOrders(finalOrders);
    setCheckedItems(new Set());
    setAllChecked(false);
  };

  // Enhanced sort function with reset capability
  const handleSort = () => {
    let newSortOrder: 'asc' | 'desc' | 'none';
    let sortedOrders: Order[];

    switch (sortOrder) {
      case 'none':
        newSortOrder = 'desc';
        sortedOrders = OrdersAPI.sortOrdersByDate(filteredOrders, 'desc');
        break;
      case 'desc':
        newSortOrder = 'asc';
        sortedOrders = OrdersAPI.sortOrdersByDate(filteredOrders, 'asc');
        break;
      case 'asc':
        newSortOrder = 'none';
        if (searchQuery.trim() === "") {
          sortedOrders = [...originalOrders];
        } else {
          sortedOrders = originalOrders.filter(order => searchOrderFields(order, searchQuery));
        }
        sortedOrders = applyFilters(sortedOrders, activeFilters);
        break;
      default:
        newSortOrder = 'none';
        sortedOrders = [...filteredOrders];
    }

    setSortOrder(newSortOrder);
    setFilteredOrders(sortedOrders);
    setCheckedItems(new Set());
    setAllChecked(false);
  };

  // Fetch orders on component mount
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const ordersData = await OrdersAPI.fetchOrders();
        setOriginalOrders([...ordersData]);
        setFilteredOrders(ordersData);
      } catch (err) {
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Handle search functionality
  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    setSortOrder('none');

    try {
      let searchResults;
      if (query.trim() === "") {
        searchResults = originalOrders;
      } else {
        searchResults = await OrdersAPI.searchOrders(query);
      }

      const filteredResults = applyFilters(searchResults, activeFilters);
      setFilteredOrders(filteredResults);
      setCheckedItems(new Set());
      setAllChecked(false);
    } catch (err) {
      console.error("Search error:", err);
      const filtered = originalOrders.filter(order => searchOrderFields(order, query));

      const filteredResults = applyFilters(filtered, activeFilters);
      setFilteredOrders(filteredResults);
    }
  };

  const handleMasterCheckbox = () => {
    if (allChecked) {
      setCheckedItems(new Set());
      setAllChecked(false);
    } else {
      setCheckedItems(new Set(filteredOrders.map((order) => order.id)));
      setAllChecked(true);
    }
  };

  const handleItemCheckbox = (orderId: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(orderId)) {
      newCheckedItems.delete(orderId);
    } else {
      newCheckedItems.add(orderId);
    }
    setCheckedItems(newCheckedItems);
    setAllChecked(
      newCheckedItems.size === filteredOrders.length &&
        filteredOrders.length > 0
    );
  };

  // Loading state
  if (loading) {
    return (
      <div className="w-full transition-all duration-300 ease-in-out ml-7">
        <div className="space-y-6">
          <div className="w-[83px] h-[28px] top-[96px] left-[240px] rounded-[8px] pt-[4px] pr-[8px] pb-[4px] pl-[8px] flex items-center">
            <h1 className="font-inter font-semibold text-[14px] leading-[20px] tracking-[0%] text-gray-900 dark:text-white">
              Order List
            </h1>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white dark:bg-black w-full max-w-[1172px] min-h-[600px] mt-[16px] flex flex-col gap-[12px] p-0 rounded-lg transition-all duration-300 ease-in-out"
        >
          <div className="flex items-center justify-center h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white"></div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full transition-all duration-300 ease-in-out ml-7">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="w-[83px] h-[28px] top-[96px] left-[240px] rounded-[8px] pt-[4px] pr-[8px] pb-[4px] pl-[8px] flex items-center">
          <h1 className="font-inter font-semibold text-[14px] leading-[20px] tracking-[0%] text-gray-900 dark:text-white">
            Order List
          </h1>
        </div>
      </div>

      {/* Order List Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white dark:bg-black w-full max-w-[1172px] min-h-[600px] mt-[16px] flex flex-col gap-[12px] p-0 rounded-lg transition-all duration-300 ease-in-out"
      >
        {/* Table Header Actions */}
        <div className="flex items-center justify-between bg-[#F7F9FB] dark:bg-[#18181b] opacity-100 w-[calc(100%-24px)] h-[44px] rounded-[8px] p-[8px] mx-[12px] mt-[12px] transition-all duration-300 ease-in-out">
          <ActionsBar
            onSort={handleSort}
            sortOrder={sortOrder}
            onFilter={handleFilter}
            activeFilters={activeFilters}
            isFilterOpen={isFilterOpen}
            setIsFilterOpen={setIsFilterOpen}
          />
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Order Table Container */}
        <div className="overflow-auto mx-[12px] mb-[12px] transition-all duration-300 ease-in-out min-h-[480px]">
          {filteredOrders.length === 0 && searchQuery ? (
            <div className="flex items-center justify-center h-[400px]">
              <div className="text-center">
                <div className="text-gray-500 text-lg mb-2">🔍</div>
                <div className="text-gray-600 dark:text-gray-400">
                  No orders found for "{searchQuery}"
                </div>
              </div>
            </div>
          ) : (
            <Suspense fallback={<TableLoader />}>
              <OrderTable
                orders={filteredOrders}
                checkedItems={checkedItems}
                allChecked={allChecked}
                handleMasterCheckbox={handleMasterCheckbox}
                handleItemCheckbox={handleItemCheckbox}
              />
            </Suspense>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default OrderLists;