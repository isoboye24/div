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
      <Icon className="text-orange-500 w-8 h-8 mb-1" />
      <span>{itemTitle}</span>
      <span className="font-bold text-black mt-1">{amount}</span>
    </div>
  );
};

export default DownloadCardItem;
