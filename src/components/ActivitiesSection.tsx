import React from "react";

interface Activity {
  id: number;
  message: string;
  time: string;
  avatar: string;
}

interface ActivitiesSectionProps {
  activities: Activity[];
}

const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({
  activities,
}) => {
  return (
    <div
      className="flex flex-col gap-2"
      style={{ width: "240px", height: "306px" }}
    >
      <div
        className="bg-transparent rounded-lg"
        style={{
          width: "240px",
          height: "36px",
          borderRadius: "8px",
          paddingTop: "8px",
          paddingRight: "4px",
          paddingBottom: "8px",
          paddingLeft: "4px",
        }}
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-inter">
          Activities
        </h3>
      </div>
      <div className="flex flex-col gap-2 relative">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className="flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors relative"
            style={{
              width: "232px",
              height: "46px",
              gap: "8px",
              borderRadius: "8px",
              padding: "4px",
            }}
          >
            {/* Line connecting avatars */}
            {index !== activities.length - 1 && (
              <span
                className="absolute left-4 top-[36px] w-[1px] bg-[#1C1C1C1A] dark:bg-gray-600"
                style={{ height: "calc(100% - 32px)" }}
              />
            )}

            {/* Avatar */}
            <div className="w-6 h-6 relative z-10">
              <img
                className="w-full h-full rounded-full"
                src={activity.avatar}
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-[14px] text-[#1C1C1C] dark:text-white line-clamp-2 font-inter">
                {activity.message}
              </p>
              <p className="text-[12px] text-[#1C1C1C66] dark:text-gray-400 font-inter">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesSection;
