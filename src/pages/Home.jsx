import React from 'react';
import { Bell, MessageCircle, Plus, MapPin, MoreVertical, Pin, PlusCircle } from 'lucide-react';

const Home = ({ onNotificationClick }) => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">SOCIAL APP</h1>
        <div className="flex items-center space-x-4">
          <button onClick={onNotificationClick} className="relative">
            <Bell size={24} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <MessageCircle size={24} />
        </div>
      </header>

      {/* Stories */}
      <section className="p-4">
          <div className="flex space-x-3 overflow-x-auto no-scrollbar mb-2">
              <button className="bg-gray-800 border border-gray-600 rounded-full px-4 py-1 text-sm whitespace-nowrap">Travel Videos</button>
              <button className="bg-gray-800 border border-gray-600 rounded-full px-4 py-1 text-sm whitespace-nowrap">Informative videos</button>
              <button className="bg-gray-800 border border-gray-600 rounded-full px-4 py-1 text-sm whitespace-nowrap">Third Category</button>
          </div>
        <div className="flex space-x-4 overflow-x-auto no-scrollbar">
          {/* Add Story */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-lg bg-gray-300 border-2 border-orange-500 flex items-center justify-center">
                <Plus size={32} className="text-black" />
            </div>
          </div>
          {/* Other Stories */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-lg bg-gray-700 border-2 border-blue-500"></div>
          </div>
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-lg bg-gray-700 border-2 border-blue-500"></div>
          </div>
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-lg bg-gray-700 border-2 border-blue-500"></div>
          </div>
        </div>
      </section>

      {/* Main Content Card */}
      <main className="p-4">
        <div className="bg-gray-900 rounded-2xl overflow-hidden">
          {/* Card Header */}
          <div className="p-4 flex justify-between items-start">
            <div className="flex items-center space-x-2">
              <MapPin size={20} />
              <div>
                <p className="font-bold">Location</p>
                <p className="text-xs text-gray-400">Content Category</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
                <div className="flex flex-col items-center">
                    <button className="p-2 bg-gray-800 rounded-full"><Pin size={20} /></button>
                    <span className="text-xs mt-1">Pin to Map</span>
                </div>
                <div className="flex flex-col items-center">
                    <button className="p-2 bg-gray-800 rounded-full"><PlusCircle size={20} /></button>
                    <span className="text-xs mt-1">Add To list</span>
                </div>
            </div>
          </div>

          {/* Card Image */}
          <div className="relative">
            <img src="https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Beach view" className="w-full h-auto" />
            <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-5xl font-extrabold text-yellow-400 opacity-80" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>VOAT Network</h2>
            </div>
          </div>

          {/* Card Footer */}
          <div className="p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-yellow-400 rounded-full"></div>
              <div>
                <p className="font-bold">Page Name</p>
                <p className="text-xs text-gray-400">VOAT-ID / LOCATION</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="border border-gray-600 rounded-full px-6 py-2 text-sm font-semibold">Link Up</button>
              <MoreVertical size={24} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;