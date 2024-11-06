import { useState } from "react";
import { Icon } from "@iconify/react";

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab = ({ label, isActive, onClick }: TabProps) => (
  <button
    onClick={onClick}
    className={`pb-2 px-1 text-xs lg:text-base ${
      isActive
        ? "text-primary-500 border-b-2 border-primary-500 font-semibold"
        : "text-gray-500 hover:text-primary-500"
    }`}
  >
    {label}
  </button>
);

export default function Settings() {
  const [activeTab, setActiveTab] = useState("Edit Profile");
  const tabs = ["Edit Profile", "Preferences", "Security"];

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-lg p-4 md:p-6 shadow-sm">
      <div className="space-x-4 md:space-x-8 border-b border-gray-200 mb-6 md:mb-8 overflow-x-auto whitespace-nowrap">
        {tabs.map((tab) => (
          <Tab
            key={tab}
            label={tab}
            isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>

      {activeTab === "Edit Profile" && (
        <div className="flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8">
          <div className="w-full md:col-span-3 flex justify-center md:block">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <img
                src="/avatars/profile.jpg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
              <button className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50">
                <Icon icon="heroicons:pencil-square" className="w-5 h-5" />
              </button>
            </div>
          </div>

          <form className="w-full md:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  defaultValue="Charlene Reed"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  User Name
                </label>
                <input
                  type="text"
                  defaultValue="Charlene Reed"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="charlenereed@gmail.com"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  defaultValue="**********"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth
                </label>
                <input
                  type="text"
                  defaultValue="25 January 1990"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Present Address
                </label>
                <input
                  type="text"
                  defaultValue="San Jose, California, USA"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Permanent Address
                </label>
                <input
                  type="text"
                  defaultValue="San Jose, California, USA"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  defaultValue="San Jose"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Postal Code
                </label>
                <input
                  type="text"
                  defaultValue="45962"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <input
                  type="text"
                  defaultValue="USA"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                />
              </div>

              <div className="col-span-1 md:col-span-2 flex justify-end mt-4">
                <button className="w-full md:w-auto px-8 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
