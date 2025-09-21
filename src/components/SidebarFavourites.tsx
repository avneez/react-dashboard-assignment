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
    <div className="w-[180px] h-[104px] pb-3">
      {isOpen && (
        <h3 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          Favourites
        </h3>
      )}

      <div>
        <ul className="space-y-1">
          {favouriteItems.map((item, itemIndex) => (
            <li key={itemIndex}>
              <button
                onClick={() => onNavigate(item.path)}
                className={clsx(
                  "w-full flex items-center px-3 py-2 rounded-lg transition-colors group",
                  {
                    "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400":
                      item.active,
                    "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700":
                      !item.active,
                  }
                )}
              >

                <item.icon
                  className={clsx("w-5 h-5 flex-shrink-0 ml-3", {
                    "text-blue-600 dark:text-blue-400": item.active,
                    "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300":
                      !item.active,
                  })}
                />
                {isOpen && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-inter font-normal text-[14px] leading-[20px] text-[#1C1C1C] dark:text-white ml-3"
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
