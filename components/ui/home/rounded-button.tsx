import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import clsx from 'clsx';

const RoundedButtonWithLink = ({
  size,
  bgColor = 'bg-amber-900',
  textColor = 'white',
  hoverColor = 'bg-amber-700',
  url,
  text,
}: {
  size: number;
  bgColor?: string;
  textColor?: string;
  hoverColor?: string;
  url: string;
  text: string;
}) => {
  return (
    <Button
      asChild
      className={clsx(
        'rounded-full text-center flex items-center justify-center p-3',
        `${textColor} ${bgColor}`,
        `${hoverColor}`
      )}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <Link
        href={url}
        className="w-full h-full flex items-center justify-center"
      >
        {text}
      </Link>
    </Button>
  );
};

export default RoundedButtonWithLink;
