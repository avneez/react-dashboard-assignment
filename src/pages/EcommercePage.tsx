import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  PlusIcon,
  SortIcon,
  FilterIcon,
  SearchIcon,
} from "../components/Icons";
import OrderTable from "../components/OrderTable";

export interface Order {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  project: string;
  address: string;
  date: string;
  status: "In Progress" | "Complete" | "Pending" | "Approved" | "Rejected";
  orderId: string;
}

const orders: Order[] = [
  {
    id: "1",
    user: { name: "Natali Craig", avatar: "/Female15.png" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    orderId: "#CM9801",
  },
  {
    id: "2",
    user: { name: "Kate Morrison", avatar: "/Female09.png" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    orderId: "#CM9802",
  },
  {
    id: "3",
    user: { name: "Drew Cano", avatar: "/Male08.png" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    orderId: "#CM9803",
  },
  {
    id: "4",
    user: { name: "Orlando Diggs", avatar: "/Male06.png" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    orderId: "#CM9804",
  },
  {
    id: "5",
    user: { name: "Andi Lane", avatar: "/Female08.png" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    orderId: "#CM9805",
  },
  {
    id: "6",
    user: { name: "Natali Craig", avatar: "/Female15.png" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    orderId: "#CM9801",
  },
  {
    id: "7",
    user: { name: "Kate Morrison", avatar: "/Female09.png" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    orderId: "#CM9802",
  },
  {
    id: "8",
    user: { name: "Drew Cano", avatar: "/Male08.png" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    orderId: "#CM9803",
  },
  {
    id: "9",
    user: { name: "Orlando Diggs", avatar: "/Male06.png" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    orderId: "#CM9804",
  },
  {
    id: "10",
    user: { name: "Andi Lane", avatar: "/Female08.png" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    orderId: "#CM9805",
  },
  {
    id: "11",
    user: { name: "Andi Lane", avatar: "/Female08.png" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    orderId: "#CM9805",
  },
  {
    id: "12",
    user: { name: "Natali Craig", avatar: "/Female15.png" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    orderId: "#CM9801",
  },
  {
    id: "13",
    user: { name: "Kate Morrison", avatar: "/Female09.png" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    orderId: "#CM9802",
  },
  {
    id: "14",
    user: { name: "Drew Cano", avatar: "/Male08.png" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    orderId: "#CM9803",
  },
  {
    id: "15",
    user: { name: "Orlando Diggs", avatar: "/Male06.png" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    orderId: "#CM9804",
  },
  {
    id: "16",
    user: { name: "Andi Lane", avatar: "/Female08.png" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    orderId: "#CM9805",
  },
  {
    id: "17",
    user: { name: "Natali Craig", avatar: "/Female15.png" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    orderId: "#CM9801",
  },
  {
    id: "18",
    user: { name: "Kate Morrison", avatar: "/Female09.png" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    orderId: "#CM9802",
  },
  {
    id: "19",
    user: { name: "Drew Cano", avatar: "/Male08.png" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    orderId: "#CM9803",
  },
  {
    id: "20",
    user: { name: "Orlando Diggs", avatar: "/Male06.png" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    orderId: "#CM9804",
  },
  {
    id: "21",
    user: { name: "Andi Lane", avatar: "/Female08.png" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    orderId: "#CM9805",
  },
  {
    id: "22",
    user: { name: "Natali Craig", avatar: "/Female15.png" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    orderId: "#CM9801",
  },
  {
    id: "23",
    user: { name: "Kate Morrison", avatar: "/Female09.png" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    orderId: "#CM9802",
  },
  {
    id: "24",
    user: { name: "Drew Cano", avatar: "/Male08.png" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    orderId: "#CM9803",
  },
  {
    id: "26",
    user: { name: "Andi Lane", avatar: "/Female08.png" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    orderId: "#CM9805",
  },
  {
    id: "27",
    user: { name: "Natali Craig", avatar: "/Female15.png" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    orderId: "#CM9801",
  },
  {
    id: "28",
    user: { name: "Kate Morrison", avatar: "/Female09.png" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    orderId: "#CM9802",
  },
  {
    id: "29",
    user: { name: "Drew Cano", avatar: "/Male08.png" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    orderId: "#CM9803",
  },
  {
    id: "25",
    user: { name: "Orlando Diggs", avatar: "/Male06.png" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    orderId: "#CM9804",
  },

  {
    id: "30",
    user: { name: "Orlando Diggs", avatar: "/Male06.png" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    orderId: "#CM9804",
  },
  {
    id: "31",
    user: { name: "Andi Lane", avatar: "/Female08.png" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    orderId: "#CM9805",
  },
  {
    id: "32",
    user: { name: "Natali Craig", avatar: "/Female15.png" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    orderId: "#CM9801",
  },
  {
    id: "33",
    user: { name: "Kate Morrison", avatar: "/Female09.png" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    orderId: "#CM9802",
  },
  {
    id: "34",
    user: { name: "Drew Cano", avatar: "/Male08.png" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    orderId: "#CM9803",
  },

  {
    id: "37",
    user: { name: "Natali Craig", avatar: "/Female15.png" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    orderId: "#CM9801",
  },
  {
    id: "35",
    user: { name: "Orlando Diggs", avatar: "/Male06.png" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    orderId: "#CM9804",
  },
  {
    id: "36",
    user: { name: "Andi Lane", avatar: "/Female08.png" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    orderId: "#CM9805",
  },
  {
    id: "38",
    user: { name: "Kate Morrison", avatar: "/Female09.png" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    orderId: "#CM9802",
  },
  {
    id: "39",
    user: { name: "Drew Cano", avatar: "/Male08.png" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    orderId: "#CM9803",
  },
  {
    id: "40",
    user: { name: "Orlando Diggs", avatar: "/Male06.png" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    orderId: "#CM9804",
  },
  {
    id: "41",
    user: { name: "Andi Lane", avatar: "/Female08.png" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    orderId: "#CM9805",
  },
  {
    id: "42",
    user: { name: "Natali Craig", avatar: "/Female15.png" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    orderId: "#CM9801",
  },
];

const ActionsBar = () => {
  return (
    <div className="flex items-center flex-1 h-[28px] gap-[8px] rounded-[8px] max-w-[900px]">
      <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors">
        <PlusIcon />
      </button>
      <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors">
        <FilterIcon />
      </button>
      <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors">
        <SortIcon />
      </button>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="flex items-center bg-white dark:bg-black border-gray-300 dark:border-gray-600 w-[160px] h-[28px] gap-[4px] rounded-[8px] pt-[4px] pr-[8px] pb-[4px] pl-[8px] border-[1px]">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search"
        className="text-gray-900 dark:text-gray-100 bg-transparent placeholder-[#1C1C1C33] dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none min-w-0 flex-1 text-sm"
      />
    </div>
  );
};

const EcommercePage: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [allChecked, setAllChecked] = useState(false);

  const handleMasterCheckbox = () => {
    if (allChecked) {
      setCheckedItems(new Set());
      setAllChecked(false);
    } else {
      setCheckedItems(new Set(orders.map((order) => order.id)));
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
    setAllChecked(newCheckedItems.size === orders.length);
  };

  return (
    <div className="w-full transition-all duration-300 ease-in-out">
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
        <div className="flex items-center justify-between bg-[#F7F9FB] dark:bg-black opacity-100 w-[calc(100%-24px)] h-[44px] rounded-[8px] p-[8px] mx-[12px] mt-[12px] transition-all duration-300 ease-in-out">
          <ActionsBar />
          <SearchBar />
        </div>

        {/* Order Table Container */}
        <div className="overflow-auto mx-[12px] mb-[12px] transition-all duration-300 ease-in-out min-h-[480px]">
          <OrderTable
            orders={orders}
            checkedItems={checkedItems}
            allChecked={allChecked}
            handleMasterCheckbox={handleMasterCheckbox}
            handleItemCheckbox={handleItemCheckbox}
          />
        </div>
      </motion.div>

    </div>
  );
};

export default EcommercePage;
