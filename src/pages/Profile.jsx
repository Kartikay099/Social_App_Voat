import React from 'react';
import { Settings, Edit3, Heart, MessageSquare, MapPin } from 'lucide-react';
import Card from '../components/Card.jsx';

const Profile = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="pt-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-amber-800">Profile</h1>
        <button className="p-2 hover:bg-amber-100 rounded-full transition-colors">
          <Settings size={20} className="text-amber-600" />
        </button>
      </div>

      {/* Profile Info */}
      <Card className="p-6 text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-white font-bold text-2xl">JD</span>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-1">John Doe</h2>
        <p className="text-gray-600 mb-2">@johndoe_voat</p>
        <p className="text-sm text-gray-500 mb-4">Coffee enthusiast & community connector</p>
        
        <button className="bg-amber-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-amber-900 transition-colors duration-200 flex items-center space-x-2 mx-auto">
          <Edit3 size={16} />
          <span>Edit Profile</span>
        </button>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="p-4 text-center">
          <h3 className="text-2xl font-bold text-amber-800">24</h3>
          <p className="text-sm text-gray-600">Posts</p>
        </Card>
        <Card className="p-4 text-center">
          <h3 className="text-2xl font-bold text-amber-800">156</h3>
          <p className="text-sm text-gray-600">Followers</p>
        </Card>
        <Card className="p-4 text-center">
          <h3 className="text-2xl font-bold text-amber-800">89</h3>
          <p className="text-sm text-gray-600">Following</p>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="p-6">
        <h3 className="font-semibold text-gray-800 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <Heart size={14} className="text-red-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-800">Liked Coffee Paradise's post</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <MessageSquare size={14} className="text-blue-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-800">Commented on Alex's photo</p>
              <p className="text-xs text-gray-500">5 hours ago</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <MapPin size={14} className="text-green-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-800">Added Sunset Cafe to favorites</p>
              <p className="text-xs text-gray-500">1 day ago</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;