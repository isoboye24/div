'use client';
import { Bell } from 'lucide-react';
import { useEffect, useState } from 'react';

const NotificationBell = () => {
  const [hasNotification, setHasNotification] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Initial check for notification
  useEffect(() => {
    const hasNewMessage = localStorage.getItem('hasNewMessage');
    if (hasNewMessage === 'true') {
      setHasNotification(true);
    }
  }, []);

  // Hide notification when dropdown is closed
  const handleMouseLeave = () => {
    setShowDropdown(false);
    setHasNotification(false);
    localStorage.setItem('hasNewMessage', 'false');
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => {
        setShowDropdown(true);
        setHasNotification(false);
        localStorage.setItem('hasNewMessage', 'false');
      }}
      onMouseLeave={() => {
        setShowDropdown(false);
        handleMouseLeave();
      }}
    >
      <button className="relative p-2 text-gray-300 hover:text-gray-100">
        <Bell className="w-6 h-6" />
        {hasNotification && (
          <span className="absolute top-1.5 right-1.5 inline-block w-2.5 h-2.5 bg-red-500 rounded-full" />
        )}
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-64 bg-white text-gray-800 text-sm rounded-lg shadow-lg p-4 z-50">
          <p className="font-semibold">New Contact Message</p>
          <p className="text-gray-600 mt-1">
            You’ve received a new message via the contact form.
          </p>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
