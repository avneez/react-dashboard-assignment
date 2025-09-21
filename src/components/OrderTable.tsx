import React from "react";
import { motion } from "framer-motion";
import { MoreHorizontal } from "lucide-react";
import { CalendarIcon } from "./Icons";
import type { Order } from "../pages/EcommercePage";

interface OrderTableProps {
  orders: Order[];
  checkedItems: Set<string>;
  allChecked: boolean;
  handleMasterCheckbox: () => void;
  handleItemCheckbox: (orderId: string) => void;
}

const CustomCheckbox: React.FC<{
  checked?: boolean;
  onChange?: () => void;
}> = ({ checked = false, onChange }) => {
  return (
    <div
      onClick={onChange}
      className={`w-[14px] h-[14px] rounded border cursor-pointer flex items-center justify-center transition-all duration-200 ${
        checked
          ? "bg-black border-black"
          : "bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
      }`}
    >
      {checked && (
        <svg
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5 1.5L3.5 6.5L1.5 4.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "In Progress":
      return { dot: "bg-[#95A4FC]", text: "text-[#8A8CD9]" };
    case "Complete":
      return { dot: "bg-[#A1E3CB]", text: "text-[#4AA785]" };
    case "Pending":
      return { dot: "bg-[#B1E3FF]", text: "text-[#59A8D4]" };
    case "Approved":
      return { dot: "bg-[#FFE999]", text: "text-[#FFC555]" };
    case "Rejected":
      return { dot: "bg-[#1C1C1C66]", text: "text-[#1C1C1C66]" };
    default:
      return { dot: "bg-gray-500", text: "text-gray-600 dark:text-gray-400" };
  }
};

const OrderTable: React.FC<OrderTableProps> = ({
  orders,
  checkedItems,
  allChecked,
  handleMasterCheckbox,
  handleItemCheckbox,
}) => {
  return (
    <>
      {/* Table */}
      <div className="overflow-x-auto transition-all duration-300 ease-in-out">
        <table className="w-full transition-all duration-300 ease-in-out">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400 text-sm w-6">
                <CustomCheckbox
                  checked={allChecked}
                  onChange={handleMasterCheckbox}
                />
              </th>
              <th className="text-left w-[100px] py-3 px-4 font-medium text-gray-500 dark:text-gray-400 text-sm">
                Order ID
              </th>
              <th className="text-left w-[214.5px] py-3 px-4 font-medium text-gray-500 dark:text-gray-400 text-sm">
                User
              </th>
              <th className="text-left w-[214.5px] py-3 px-4 font-medium text-gray-500 dark:text-gray-400 text-sm">
                Project
              </th>
              <th className="text-left w-[270px] py-3 px-4 font-medium text-gray-500 dark:text-gray-400 text-sm">
                Address
              </th>
              <th className="text-left w-[191px] py-3 px-4 font-medium text-gray-500 dark:text-gray-400 text-sm">
                Date
              </th>
              <th className="text-left w-[110px] py-3 px-4 font-medium text-gray-500 dark:text-gray-400 text-sm">
                Status
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400 text-sm w-12">
                {/* Actions column */}
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
                className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
              >
                <td className="py-1 px-4">
                  <div
                    className={`${
                      checkedItems.has(order.id)
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    } transition-opacity`}
                  >
                    <CustomCheckbox
                      checked={checkedItems.has(order.id)}
                      onChange={() => handleItemCheckbox(order.id)}
                    />
                  </div>
                </td>
                <td className="py-1 px-4">
                  <span className="font-inter font-normal text-[12px] leading-[18px] tracking-[0%] text-gray-900 dark:text-white">
                    {order.orderId}
                  </span>
                </td>

                <td className="py-1 px-4">
                  <div className="w-[190.5px] h-6 flex items-center gap-3">
                    {order.user.avatar &&
                    !order.user.avatar.includes("placeholder") ? (
                      <img
                        src={order.user.avatar}
                        alt={order.user.name}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-medium">
                          {order.user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    )}
                    <span className="font-inter font-normal text-[12px] leading-[18px] tracking-[0%] text-gray-900 dark:text-white">
                      {order.user.name}
                    </span>
                  </div>
                </td>

                <td className="py-1 px-4">
                  <span className="font-inter font-normal text-[12px] leading-[18px] tracking-[0%] text-gray-700 dark:text-gray-300">
                    {order.project}
                  </span>
                </td>

                <td className="py-1 px-4">
                  <span className="font-inter font-normal text-[12px] leading-[18px] tracking-[0%] text-gray-700 dark:text-gray-300">
                    {order.address}
                  </span>
                </td>

                <td className="py-1 px-4">
                  <div className="flex items-center gap-2">
                    <CalendarIcon />
                    <span className="font-inter font-normal text-[12px] leading-[18px] tracking-[0%] text-gray-700 dark:text-gray-300">
                      {order.date}
                    </span>
                  </div>
                </td>

                <td className="py-1 px-4">
                  <div className="flex items-center gap-2 min-w-[100px]">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        getStatusColor(order.status).dot
                      }`}
                    ></div>
                    <span
                      className={`font-inter font-normal text-[12px] leading-[18px] tracking-[0%] whitespace-nowrap ${
                        getStatusColor(order.status).text
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </td>

                <td className="py-1 px-4">
                  <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100">
                    <MoreHorizontal className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderTable;
