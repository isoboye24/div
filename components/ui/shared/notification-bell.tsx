'use client';
import { Bell } from 'lucide-react';
import { useEffect, useState } from 'react';

const NotificationBell = () => {
  const [newMessageCount, setNewMessageCount] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Check message count on mount
  useEffect(() => {
    const storedCount = parseInt(
      localStorage.getItem('newMessageCount') || '0',
      10
    );
    if (storedCount > 0) {
      setNewMessageCount(storedCount);
      setShowContent(true);
    }
  }, []);

  const handleMouseEnter = () => {
    setShowDropdown(true);
    setNewMessageCount(0);
    localStorage.setItem('newMessageCount', '0');
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
    setShowContent(false);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="relative p-2 text-gray-300 hover:text-gray-100">
        <Bell className="w-6 h-6" />
        {newMessageCount > 0 && (
          <span className="absolute top-0.5 right-0.5 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {newMessageCount}
          </span>
        )}
      </button>

      {showDropdown && showContent && (
        <div className="absolute right-0 mt-2 w-64 bg-white text-gray-800 text-sm rounded-lg shadow-lg p-4 z-50">
          <p className="font-semibold">New Contact Message</p>
          <p className="text-gray-600 mt-1">
            You’ve received {newMessageCount} new message
            {newMessageCount > 1 ? 's' : ''} via the contact form.
          </p>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
