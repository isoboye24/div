'use client';

import { Menu as MenuIcon, Globe } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import ModeToggle from './mode-toggle';
import { MobileNav } from './navbar';
import UserButton from '../../admin/user-button';
import { useEffect, useState } from 'react';

const Menu = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch('/api/auth/[...nextauth]');
      const data = await res.json();
      console.log('Session fetch result:', data); // DEBUG
      const userExists = !!data?.user;
      console.log('userExists:', userExists); // Should be true or false
      setIsSignedIn(userExists);
    };

    checkAuth();
  }, []);

  return (
    <div className="flex justify-center gap-3">
      <Globe size={16} className="mt-2.5" />
      <ModeToggle />

      {isSignedIn === null ? null : isSignedIn ? <UserButton /> : ''}

      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-center pt-2">
            <SheetTitle></SheetTitle>
            <MobileNav />
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};
export default Menu;
