import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DownloadCardItemProps {
  icon: LucideIcon;
  itemTitle: string;
  amount?: number;
}

const DownloadCardItem = ({
  icon: Icon,
  itemTitle,
  amount = 0,
}: DownloadCardItemProps) => {
  return (
    <div className="flex flex-col items-center">
      <Icon className="text-amber-500 w-5 h-5 md:w-6 md:h-6 xl:w-8 xl:h-8 mb-1" />
      <span className="text-xs md:text-base">{itemTitle}</span>
      <span className="font-bold text-lg md:text-2xl text-black dark:text-gray-200 mt-1">
        {amount}
      </span>
    </div>
  );
};

export default DownloadCardItem;
