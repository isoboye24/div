'use client';

import { Boxes, Download } from 'lucide-react';
import DownloadCardItem from './download-card-item';
import { useEffect, useState } from 'react';

const DashboardOthersCard = () => {
  const [categoryCount, setCategoryCount] = useState<number>(0);
  const [cvDownloadCount, setCvDownloadCount] = useState<number>(0);

  useEffect(() => {
    const fetchCounts = async () => {
      const categoryRes = await fetch('/api/dashboard/others/category');
      const categoryData = await categoryRes.json();
      setCategoryCount(categoryData.total);

      const cvDownloaderRes = await fetch(
        '/api/dashboard/others/cv-downloader'
      );
      const cvDownloaderData = await cvDownloaderRes.json();
      setCvDownloadCount(cvDownloaderData.total);
    };

    fetchCounts();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md mx-auto">
      <h2 className="text-center text-lg font-semibold text-gray-700 mb-4">
        Others
      </h2>
      <div className="flex justify-around text-center text-sm text-gray-700">
        <div className="flex flex-col items-center">
          <DownloadCardItem
            icon={Boxes}
            itemTitle="Categories"
            amount={categoryCount}
          />
        </div>
        <div className="flex flex-col items-center">
          <DownloadCardItem
            icon={Download}
            itemTitle="CV Downloads"
            amount={cvDownloadCount}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardOthersCard;
