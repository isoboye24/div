import React from 'react';
import { default as MobileMenu } from './menu';
import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import { MainNav } from './navbar';
import logoWhite from '@/public/images/logo-white.png';
import logoDark from '@/public/images/logo-dark.png';

const Header = () => {
  return (
    <header className="w-full ">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="ml-2 flex-start">
            <Image
              priority={true}
              src={logoWhite}
              width={50}
              height={20}
              alt={`${APP_NAME} logo`}
              className="block dark:hidden"
            />
            {/* <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span> */}
          </Link>
          <Link href="/" className="ml-2 flex-start">
            <Image
              priority={true}
              src={logoDark}
              width={50}
              height={20}
              alt={`${APP_NAME} logo`}
              className="hidden dark:block"
            />
            {/* <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span> */}
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
