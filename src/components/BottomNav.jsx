import React from 'react';
import { Home, Search, Plus, Map, User } from 'lucide-react';

const BottomNav = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'explore', icon: Search, label: 'Explore' },
    { id: 'add', icon: Plus, label: 'Add' },
    { id: 'map', icon: Map, label: 'Map' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-[94%] max-w-md z-50">
      <div className="relative bg-gray-800 border border-gray-700 shadow-lg rounded-2xl px-6 py-3 flex justify-between items-center">

        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isAdd = tab.id === 'add';
          const isActive = activeTab === tab.id;

          if (isAdd) {
            return (
              <div key={tab.id} className="relative">
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className="absolute -top-7 left-1/2 -translate-x-1/2 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
                >
                  <Icon size={28} />
                </button>
              </div>
            );
          }

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`transition-all duration-300 ease-in-out p-3 rounded-xl ${
                  isActive
                    ? 'bg-gray-700 scale-110'
                    : 'text-gray-400 hover:text-white'
                }`}
            >
              <Icon size={22} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
