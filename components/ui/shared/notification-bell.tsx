'use client';
import { Bell } from 'lucide-react';
import { useEffect, useState } from 'react';

const NotificationBell = () => {
  const [contactCount, setContactCount] = useState(0);
  const [downloadCount, setDownloadCount] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const storedContact = parseInt(
      localStorage.getItem('contactCount') || '0',
      10
    );
    const storedDownload = parseInt(
      localStorage.getItem('downloadCount') || '0',
      10
    );

    setContactCount(storedContact);
    setDownloadCount(storedDownload);

    const handler = (event: Event) => {
      const customEvent = event as CustomEvent;
      const { type, count = 1 } = customEvent.detail;

      console.log('[NotificationBell] Event received:', type, count);

      if (type === 'contact') {
        setContactCount(count);
      } else if (type === 'download') {
        setDownloadCount(count);
      }
    };

    window.addEventListener('notify', handler);
    return () => window.removeEventListener('notify', handler);
  }, []);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);

    // Clear counts
    localStorage.setItem('contactCount', '0');
    localStorage.setItem('downloadCount', '0');
    setContactCount(0);
    setDownloadCount(0);
  };

  const totalCount = contactCount + downloadCount;

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="relative p-2 text-gray-300 hover:text-gray-100">
        <Bell className="w-6 h-6" />
        {totalCount > 0 && (
          <span className="absolute top-0.5 right-0.5 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {totalCount}
          </span>
        )}
      </button>

      {showDropdown && totalCount > 0 && (
        <div className="absolute right-0 mt-2 w-64 bg-white text-gray-800 text-sm rounded-lg shadow-lg p-4 z-50">
          {contactCount > 0 && (
            <div className="mb-2">
              <p className="font-semibold">New Contact Message</p>
              <p className="text-gray-600 mt-1">
                You’ve received {contactCount} new message
                {contactCount > 1 ? 's' : ''} via the contact form.
              </p>
            </div>
          )}
          {downloadCount > 0 && (
            <div>
              <p className="font-semibold">CV Downloaded</p>
              <p className="text-gray-600 mt-1">
                Your CV is downloaded {downloadCount} time
                {downloadCount > 1 ? 's' : ''}.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
