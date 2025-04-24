'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Home,
  Users,
  Settings,
  LogOut,
  FolderGit2,
  Brain,
  Boxes,
  MailCheck,
  LayoutDashboard,
  ChevronDown,
  ChevronRight,
  ReceiptText,
  UserPen,
  Newspaper,
} from 'lucide-react';

const links = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: <Home size={20} /> },
  { href: '/admin/users', label: 'Users', icon: <Users size={20} /> },
  { href: '/admin/categories', label: 'Categories', icon: <Boxes size={20} /> },
  {
    href: '/admin/projects',
    label: 'Projects',
    icon: <FolderGit2 size={20} />,
  },
  { href: '/admin/skills', label: 'Skills', icon: <Brain size={20} /> },
  { href: '/admin/messages', label: 'Messages', icon: <MailCheck size={20} /> },
];

const frontendLinks = [
  {
    href: '/admin/about',
    label: 'About',
    icon: <UserPen size={20} />,
  },
  {
    href: '/admin/contact',
    label: 'Contact',
    icon: <ReceiptText size={20} />,
  },
  {
    href: '/admin/blog',
    label: 'Blog',
    icon: <Newspaper size={20} />,
  },
];

export default function AdminSidebar() {
  const [isFrontendOpen, setIsFrontendOpen] = useState(false);

  return (
    <aside className="h-screen w-64 bg-teal-900 text-white p-4 flex flex-col border-r border-teal-800">
      <a
        href="/admin/dashboard"
        className="text-4xl text-center font-bold mb-6 text-amber-500"
      >
        DIV
      </a>

      <nav className="flex-1 space-y-2">
        {links.map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center space-x-3 p-2 rounded hover:bg-teal-800 transition"
          >
            {icon}
            <span>{label}</span>
          </Link>
        ))}

        {/* Frontend Dropdown */}
        <div className="border my-5 border-amber-500"></div>
        <div>
          <button
            onClick={() => setIsFrontendOpen(!isFrontendOpen)}
            className="flex w-full items-center justify-between p-2 rounded hover:bg-teal-800 transition"
          >
            <div className="flex items-center space-x-3">
              <LayoutDashboard size={20} />
              <span>Frontend Pages</span>
            </div>
            {isFrontendOpen ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </button>

          <div
            className={`ml-8 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${
              isFrontendOpen ? 'max-h-40' : 'max-h-0'
            }`}
          >
            {frontendLinks.map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center space-x-3 p-2 rounded hover:bg-teal-800 transition"
              >
                {icon}
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Footer */}
      <a href="/admin/settings">
        <button className="flex items-center space-x-2 p-2 rounded hover:bg-teal-800 transition">
          <Settings size={20} />
          <span>Settings</span>
        </button>
      </a>
      <button className="flex items-center space-x-2 p-2 rounded hover:bg-teal-800 transition">
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </aside>
  );
}
