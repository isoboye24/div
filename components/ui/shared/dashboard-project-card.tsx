'use client';

import { PanelsTopLeft, MonitorStop, Smartphone } from 'lucide-react';
import DownloadCardItem from './download-card-item';
import { useEffect, useState } from 'react';

const DashboardProjectsCard = () => {
  const [webCount, setWebCount] = useState<number>(0);
  const [desktopCount, setDesktopCount] = useState<number>(0);
  const [androidCount, setAndroidCount] = useState<number>(0);

  useEffect(() => {
    const fetchCounts = async () => {
      const webRes = await fetch('/api/dashboard/projects/Web');
      const webData = await webRes.json();
      setWebCount(webData.total);

      const desktopRes = await fetch('/api/dashboard/projects/Desktop');
      const desktopData = await desktopRes.json();
      setDesktopCount(desktopData.total);

      const androidRes = await fetch('/api/dashboard/projects/Android');
      const androidData = await androidRes.json();
      setAndroidCount(androidData.total);
    };

    fetchCounts();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-700 shadow-md rounded-xl p-6 w-full max-w-md mx-auto">
      <h2 className="text-center text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
        Projects
      </h2>
      <div className="flex justify-around text-center text-sm text-gray-700 dark:text-gray-200">
        <div className="flex flex-col items-center">
          <DownloadCardItem
            icon={PanelsTopLeft}
            itemTitle="Web Apps"
            amount={webCount}
          />
        </div>
        <div className="flex flex-col items-center">
          <DownloadCardItem
            icon={MonitorStop}
            itemTitle="Desktop Apps"
            amount={desktopCount}
          />
        </div>
        <div className="flex flex-col items-center">
          <DownloadCardItem
            icon={Smartphone}
            itemTitle="Android Apps"
            amount={androidCount}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardProjectsCard;
