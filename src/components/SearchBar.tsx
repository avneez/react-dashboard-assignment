import React, { useState } from "react";
import { SearchIcon } from "./Icons";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="flex items-center bg-white dark:bg-black border-gray-300 dark:border-gray-600 w-[160px] h-[28px] gap-[4px] rounded-[8px] pt-[4px] pr-[8px] pb-[4px] pl-[8px] border-[1px]">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearch}
        className="text-gray-900 dark:text-gray-100 bg-transparent placeholder-[#1C1C1C33] dark:placeholder-gray-400 focus:outline-none min-w-0 flex-1 text-sm"
      />
    </div>
  );
};

export default SearchBar;