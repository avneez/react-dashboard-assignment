import React, { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { CalendarIcon } from "./Icons";
import { getStatusColor } from "../utils/helpers";
import Pagination from "./Pagination";
import CustomCheckbox from "./CustomCheckbox";
import { ORDER_TABLE_COLUMNS, PAGINATION_PAGES } from "../constants";
import type {
  OrderTableProps,
  OrderTableHeaderProps,
  OrderTableBodyProps,
} from "../interfaces/types";

const OrderTableHeader: React.FC<OrderTableHeaderProps> = ({
  allChecked,
  handleMasterCheckbox,
}) => {
  return (
    <thead>
      <tr className="border-b border-gray-200 dark:border-gray-700">
        {ORDER_TABLE_COLUMNS.map((column, index) => (
          <th
            key={index}
            className={`text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400 text-sm ${column.width}`}
          >
            {column.isCheckbox ? (
              <CustomCheckbox
                checked={allChecked}
                onChange={handleMasterCheckbox}
              />
            ) : column.isActions ? null : ( // Actions column is empty
              column.label
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const OrderTableBody: React.FC<OrderTableBodyProps> = ({
  orders,
  checkedItems,
  handleItemCheckbox,
  page,
}) => {
  return (
    <tbody>
      {orders.slice((page - 1) * 10, page * 10).map((order) => (
        <tr
          key={order.id}
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
              <CalendarIcon className="text-gray-700 dark:text-white" />
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
            <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors opacity-0 group-hover:opacity-100">
              <MoreHorizontal className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const OrderTable: React.FC<OrderTableProps> = ({
  orders,
  checkedItems,
  allChecked,
  handleMasterCheckbox,
  handleItemCheckbox,
}) => {
  const [page, setPage] = useState(1);
  return (
    <>
      {/* Table */}
      <div className="overflow-x-auto transition-all duration-300 ease-in-out">
        <table className="w-full transition-all duration-300 ease-in-out">
          <OrderTableHeader
            allChecked={allChecked}
            handleMasterCheckbox={handleMasterCheckbox}
          />
          <OrderTableBody
            orders={orders}
            checkedItems={checkedItems}
            handleItemCheckbox={handleItemCheckbox}
            page={page}
          />
        </table>
      </div>
      <Pagination
        page={page}
        setPage={setPage}
        totalItems={orders.length}
        paginationPages={PAGINATION_PAGES}
      />
    </>
  );
};

export default OrderTable;
