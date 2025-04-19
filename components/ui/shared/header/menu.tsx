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

const Menu = () => {
  return (
    <>
      <div className="flex justify-center gap-3">
        <Globe size={16} className="mt-2.5" />
        <ModeToggle />
        <nav className="md:hidden">
          <Sheet>
            <SheetTrigger className="align-middle">
              <MenuIcon />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-center pt-2">
              <SheetTitle></SheetTitle>
              <SheetTitle></SheetTitle>
              <MobileNav />
              <SheetDescription></SheetDescription>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </>
  );
};

export default Menu;
