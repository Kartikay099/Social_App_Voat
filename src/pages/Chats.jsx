import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import TabSwitcher from '../components/TabSwitcher.jsx';
import ChatItem from '../components/ChatItem.jsx';
import Card from '../components/Card.jsx';

const Chats = () => {
  const [activeTab, setActiveTab] = useState('chats');
  const [query, setQuery] = useState('');

  const tabs = [
    { id: 'chats', label: 'Chats' },
    { id: 'groups', label: 'Groups' },
    { id: 'communities', label: 'Communities' },
  ];

  const chats = [
    {
      name: 'Alex Johnson',
      lastMessage: 'Hey! Are you free for coffee later?',
      timestamp: '2:30 PM',
      status: 'read',
      unread: true,
    },
    {
      name: 'Sarah Wilson',
      lastMessage: 'Thanks for the recommendation!',
      timestamp: '1:45 PM',
      status: 'delivered',
      unread: false,
    },
    {
      name: 'Coffee Lovers Group',
      lastMessage: 'New cafe opened downtown',
      timestamp: '11:20 AM',
      status: 'sent',
      unread: true,
    },
    {
      name: 'Mike Chen',
      lastMessage: 'See you tomorrow at the meetup',
      timestamp: 'Yesterday',
      status: 'read',
      unread: false,
    },
  ];

  const filteredChats = chats.filter(
    (chat) =>
      chat.name.toLowerCase().includes(query.toLowerCase()) ||
      chat.lastMessage.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4 space-y-6 max-w-xl mx-auto">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-3xl font-bold text-amber-700 mb-4">Messages</h1>
        <TabSwitcher tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Search Bar */}
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search conversations..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-amber-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
          />
        </div>
        <button className="p-3 bg-white border border-amber-200 rounded-lg hover:bg-amber-50 transition">
          <Filter size={18} className="text-amber-600" />
        </button>
      </div>

      {/* Chat List */}
      <Card className="divide-y divide-amber-100 overflow-hidden rounded-xl shadow-sm">
        {filteredChats.length > 0 ? (
          filteredChats.map((chat, index) => (
            <ChatItem
              key={index}
              name={chat.name}
              lastMessage={chat.lastMessage}
              timestamp={chat.timestamp}
              status={chat.status}
              unread={chat.unread}
            />
          ))
        ) : (
          <div className="p-4 text-center text-sm text-gray-500">No conversations found.</div>
        )}
      </Card>
    </div>
  );
};

export default Chats;
