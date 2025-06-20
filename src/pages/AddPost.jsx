import React from 'react';
import { Plus, MapPin, Briefcase, Camera, ImagePlus } from 'lucide-react';
import Card from '../components/Card.jsx';

const AddPost = () => {
  return (
    <div className="p-4 space-y-6 max-w-xl mx-auto">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-3xl font-bold text-amber-700">Create a Post</h1>
        <p className="text-gray-500 mt-1">What would you like to share today?</p>
      </div>

      {/* Action Cards */}
      <div className="space-y-4">
        {/* Missing Place */}
        <Card
          className="p-5 hover:shadow-md transition-all duration-200 cursor-pointer"
          onClick={() => console.log('Add Missing Place')}
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center shadow">
              <MapPin size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">Add A Missing Place</h3>
              <p className="text-sm text-gray-600">Help others discover new locations.</p>
            </div>
            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
              <Plus size={16} className="text-amber-700" />
            </div>
          </div>
        </Card>

        {/* Post Work / Support */}
        <Card
          className="p-5 hover:shadow-md transition-all duration-200 cursor-pointer"
          onClick={() => console.log('Post Work/Support')}
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center shadow">
              <Briefcase size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">Post a Work / Get Support</h3>
              <p className="text-sm text-gray-600">Share jobs or ask for help from your network.</p>
            </div>
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
              <Plus size={16} className="text-orange-600" />
            </div>
          </div>
        </Card>

        {/* Custom Post */}
        <Card
          className="p-5 border-2 border-dashed border-amber-300 bg-amber-50 hover:shadow-inner cursor-pointer"
          onClick={() => console.log('Custom Post')}
        >
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
              <Plus size={24} className="text-gray-400" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-700">Create Custom Post</h3>
              <p className="text-sm text-gray-500">Share anything else with your community</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Scrollable Quick Actions like Stories */}
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-4 space-x-4">
          {[
            { label: 'Take Photo', icon: Camera, color: 'green' },
            { label: 'Add Story', icon: ImagePlus, color: 'purple' },
            { label: 'Add Job', icon: Briefcase, color: 'blue' },
            { label: 'Location', icon: MapPin, color: 'amber' }
          ].map(({ label, icon: Icon, color }, i) => (
            <div
              key={i}
              onClick={() => console.log(label)}
              className={`flex-shrink-0 w-20 h-20 rounded-full bg-${color}-100 flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition`}
            >
              <Icon size={22} className={`text-${color}-600`} />
              <span className="text-xs text-gray-700 mt-1">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddPost;
