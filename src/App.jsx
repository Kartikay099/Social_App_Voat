import React, { useState } from 'react';
import BottomNav from './components/BottomNav.jsx';
import Home from './pages/Home.jsx';
import AddPost from './pages/AddPost.jsx';
import Explore from './pages/Explore.jsx';
import Profile from './pages/Profile.jsx';
import Notifications from './pages/Notifications.jsx';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showNotifications, setShowNotifications] = useState(false);

  const handleShowNotifications = () => {
    setShowNotifications(true);
  };

  const handleHideNotifications = () => {
    setShowNotifications(false);
  };

  const renderPage = () => {
    if (showNotifications) {
      return <Notifications onBack={handleHideNotifications} />;
    }

    switch (activeTab) {
      case 'home':
        return <Home onNotificationClick={handleShowNotifications} />;
      case 'explore':
        return <Explore />;
      case 'add':
        return <AddPost />;
      case 'map':
        return <Explore />;
      case 'profile':
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-black max-w-md mx-auto relative">
      <div className="pb-20">
        {renderPage()}
      </div>
      {!showNotifications && <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />}
    </div>
  );
}

export default App;