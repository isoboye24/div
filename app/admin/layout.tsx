'use client';

import { useState, useEffect } from 'react';
import AdminSidebar from '@/components/ui/admin/admin-sidebar';
import MainAdminNav from './main-admin-nav';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
        <AdminSidebar />
      </div>

      {/* Right side */}
      <div className="flex-1 flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
        <MainAdminNav
          toggleSidebar={toggleSidebar}
          toggleDarkMode={toggleDarkMode}
        />
        <main className="p-6 flex-1 text-gray-900 dark:text-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}
