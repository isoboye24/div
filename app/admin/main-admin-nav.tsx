// app/admin/main-admin-nav.tsx
import { Menu, Bell, UserCircle, Sun, Moon } from 'lucide-react';

type MainAdminNavProps = {
  toggleSidebar: () => void;
  toggleDarkMode: () => void;
};

export default function MainAdminNav({
  toggleSidebar,
  toggleDarkMode,
}: MainAdminNavProps) {
  return (
    <header className="w-full bg-white dark:bg-gray-800 shadow-sm px-6 py-4 flex justify-between items-center border-b dark:border-gray-700">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="md:hidden p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
        </button>

        <a
          href="https://div-mu.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="text-green-500">Site</h3>
        </a>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleDarkMode}
          className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <Sun className="w-5 h-5 text-gray-800 dark:hidden" />
          <Moon className="w-5 h-5 text-gray-200 hidden dark:block" />
        </button>
        <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        <UserCircle className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      </div>
    </header>
  );
}
