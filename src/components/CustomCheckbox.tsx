import React from "react";
import type { CustomCheckboxProps } from "../interfaces/types";

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ checked = false, onChange }) => {
  return (
    <div
      onClick={onChange}
      className={`w-[14px] h-[14px] rounded-[4px] border cursor-pointer flex items-center justify-center transition-all duration-200 ${
        checked
          ? "bg-black dark:bg-[#c6c7f8] border-black dark:border-[#6c67f8]"
          : "bg-gray-100 border-gray-300 dark:bg-black dark:border-[#FFFFFF33]"
      }`}
    >
      {checked && (
        <svg
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" stroke-white dark:stroke-black"
        >
          <path
            d="M8.5 1.5L3.5 6.5L1.5 4.5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

export default CustomCheckbox;