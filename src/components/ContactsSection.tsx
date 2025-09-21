import React from "react";
import type { ContactsSectionProps } from '../interfaces/types';

const ContactsSection: React.FC<ContactsSectionProps> = ({ contacts }) => {
  return (
    <div
      className="flex flex-col gap-2"
      style={{ width: "240px", height: "276px" }}
    >
      <div className="bg-transparent rounded-lg w-[240px] h-[36px] pt-2 pr-1 pb-2 pl-1">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-inter">
          Contacts
        </h3>
      </div>
      <div className="flex flex-col gap-2">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex items-center rounded-[8px] hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer w-[232px] gap-2 p-1"
          >
            <div className="w-6 h-6">
              <img
                className="w-full h-full rounded-full"
                src={contact.avatar}
                alt={contact.avatar}
              />
            </div>
            <p className="text-sm text-gray-900 dark:text-white font-inter">
              {contact.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactsSection;
