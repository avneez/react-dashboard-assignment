import React from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { GrayDotBoldIcon } from "./Icons";

interface SubItem {
  label: string;
  path: string;
}

interface MenuItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active: boolean;
  path: string;
  hasSubItems?: boolean;
  subItems?: SubItem[];
}

interface SidebarFavouritesProps {
  isOpen: boolean;
  onNavigate: (path: string) => void;
}

const SidebarFavourites: React.FC<SidebarFavouritesProps> = ({
  isOpen,
  onNavigate,
}) => {
  const favouriteItems: MenuItem[] = [
    { icon: GrayDotBoldIcon, label: "Overview", active: false, path: "/" },
    {
      icon: GrayDotBoldIcon,
      label: "Projects",
      active: false,
      path: "/projects",
    },
  ];

  return (
    <div className="pb-3">
      {isOpen && (
        <div className="text-[14px] mb-1 flex">
          <p className="text-[#1C1C1C66] dark:text-gray-400 px-2 py-1">Favourites</p>  <p className="text-[#1C1C1C33] dark:text-gray-500 ml-2 px-2 py-1">Recently</p>
        </div>

      )}

      <div>
        <ul className="space-y-1">
          {favouriteItems.map((item, itemIndex) => (
            <li key={itemIndex}>
              <button
                onClick={() => onNavigate(item.path)}
                className={clsx(
                  "w-full flex items-center rounded-[8px] transition-colors group",
                  isOpen ? "px-2 py-1" : "px-2 py-2 justify-center",
                  {
                    "bg-gray-100 dark:bg-[#ffffff1a]":
                      item.active,
                    "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#ffffff1a]":
                      !item.active,
                  }
                )}
              >

                <item.icon
                  className={clsx("w-5 h-5 flex-shrink-0", {
                    "text-blue-600 dark:text-blue-400": item.active,
                    "text-gray-500 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300":
                      !item.active,
                  })}
                />
                {isOpen && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-inter font-normal text-[14px] leading-[20px] text-[#1C1C1C] dark:text-white ml-1"
                    style={{
                      fontStyle: "normal",
                      letterSpacing: "0%",
                    }}
                  >
                    {item.label}
                  </motion.span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarFavourites;
