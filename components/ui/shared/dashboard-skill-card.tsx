'use client';

import { useEffect, useState } from 'react';
import { Globe2Icon, Code2Icon, DatabaseIcon, ImageMinus } from 'lucide-react';
import DownloadCardItem from './download-card-item';

const DashboardSkillCard = () => {
  const [frontendCount, setFrontendCount] = useState<number>(0);
  const [backendCount, setBackendCount] = useState<number>(0);
  const [uxUiDesignCount, setUxUiDesignCount] = useState<number>(0);
  const [databaseCount, setDatabaseCount] = useState<number>(0);

  const ux = 'UX-UI Design';

  useEffect(() => {
    const fetchCounts = async () => {
      const frontendRes = await fetch('/api/dashboard/skills/Frontend');
      const frontendData = await frontendRes.json();
      setFrontendCount(frontendData.total);

      const backendRes = await fetch('/api/dashboard/skills/Backend');
      const backendData = await backendRes.json();
      setBackendCount(backendData.total);

      const databaseRes = await fetch('/api/dashboard/skills/Database');
      const databaseData = await databaseRes.json();
      setDatabaseCount(databaseData.total);

      const uiuxDesignRes = await fetch(`/api/dashboard/skills/${ux}`);
      const uiuxDesignData = await uiuxDesignRes.json();
      setUxUiDesignCount(uiuxDesignData.total);
    };

    fetchCounts();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full mx-auto">
      <h2 className="text-center text-lg font-semibold text-gray-700 mb-4">
        Skills
      </h2>
      <div className="flex lg:hidden 2xl:flex justify-around text-center text-sm text-gray-700">
        <div className="flex flex-col items-center">
          <DownloadCardItem
            icon={Globe2Icon}
            itemTitle="Frontend"
            amount={frontendCount}
          />
        </div>
        <div className="flex flex-col items-center">
          <DownloadCardItem
            icon={Code2Icon}
            itemTitle="Backend"
            amount={backendCount}
          />
        </div>
        <div className="flex flex-col items-center">
          <DownloadCardItem
            icon={DatabaseIcon}
            itemTitle="Database"
            amount={databaseCount}
          />
        </div>
        <div className="flex flex-col items-center">
          <DownloadCardItem
            icon={ImageMinus}
            itemTitle="UI/UX Design"
            amount={uxUiDesignCount}
          />
        </div>
      </div>
      <div className="hidden lg:flex 2xl:hidden justify-around text-center text-sm text-gray-700">
        <div className="flex flex-col items-center">
          <DownloadCardItem icon={Globe2Icon} itemTitle="Front" amount={5} />
        </div>
        <div className="flex flex-col items-center">
          <DownloadCardItem icon={Code2Icon} itemTitle="Back" amount={8} />
        </div>
        <div className="flex flex-col items-center">
          <DownloadCardItem icon={DatabaseIcon} itemTitle="DB" amount={3} />
        </div>
        <div className="flex flex-col items-center">
          <DownloadCardItem icon={ImageMinus} itemTitle="UI/UX" amount={3} />
        </div>
      </div>
    </div>
  );
};

export default DashboardSkillCard;
