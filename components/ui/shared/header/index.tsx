import React from 'react';
import { default as MobileMenu } from './menu';
import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import { MainNav } from './navbar';

const Header = () => {
  return (
    <header className="w-full ">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="ml-2 flex-start p-2">
            <Image
              priority={true}
              src="/images/logo.png"
              width={30}
              height={30}
              alt={`${APP_NAME} logo`}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
