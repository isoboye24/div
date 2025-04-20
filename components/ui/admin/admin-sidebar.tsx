// components/AdminSidebar.tsx
import Link from 'next/link';
// import { cn } from '@/lib/utils';
import {
  Home,
  Users,
  Settings,
  LogOut,
  FolderGit2,
  Brain,
  Boxes,
  MailCheck,
} from 'lucide-react';

const links = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: <Home size={20} /> },
  { href: '/admin/users', label: 'Users', icon: <Users size={20} /> },
  {
    href: '/admin/categories',
    label: 'Categories',
    icon: <Boxes size={20} />,
  },
  {
    href: '/admin/projects',
    label: 'Projects',
    icon: <FolderGit2 size={20} />,
  },
  { href: '/admin/skills', label: 'Skills', icon: <Brain size={20} /> },
  { href: '/admin/messages', label: 'Messages', icon: <MailCheck size={20} /> },
];

export default function AdminSidebar() {
  return (
    <aside className="h-screen w-64 bg-teal-900 text-white p-4 flex flex-col border-r border-teal-800">
      <a
        href="/admin/dashboard"
        className="text-4xl text-center font-bold mb-6 text-amber-500"
      >
        D-OIV
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
      </nav>
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
