'use client';
import { APP_NAME } from '@/lib/constants';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import logoWhite from '@/public/images/logo-white.png';
import logoDark from '@/public/images/logo-dark.png';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Image
        priority={true}
        src={logoWhite}
        width={70}
        height={70}
        alt={`${APP_NAME} logo`}
        className="block dark:hidden"
      />
      <Image
        priority={true}
        src={logoDark}
        width={70}
        height={70}
        alt={`${APP_NAME} logo`}
        className="hidden dark:block"
      />
      <div className="p-6 rounded-lg shadow-md w-2/3 md:w-1/3 text-center">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">Could not find requested resource</p>
        <Button
          variant="outline"
          className="mt-4 ml-2"
          onClick={() => (window.location.href = '/')}
        >
          Back to home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
