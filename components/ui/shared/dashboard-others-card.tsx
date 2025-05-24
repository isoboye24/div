import { Globe2Icon, Code2Icon, DatabaseIcon } from 'lucide-react';
import DownloadCardItem from './download-card-item';

const DashboardOthersCard = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md mx-auto">
      <h2 className="text-center text-lg font-semibold text-gray-700 mb-4">
        Others
      </h2>
      <div className="flex justify-around text-center text-sm text-gray-700">
        <div className="flex flex-col items-center">
          <DownloadCardItem icon={Globe2Icon} itemTitle="Frontend" amount={5} />
        </div>
        <div className="flex flex-col items-center">
          <DownloadCardItem icon={Code2Icon} itemTitle="Backend" amount={8} />
        </div>
        <div className="flex flex-col items-center">
          <DownloadCardItem
            icon={DatabaseIcon}
            itemTitle="Database"
            amount={3}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardOthersCard;
