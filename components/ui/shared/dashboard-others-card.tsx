import { Boxes, Download } from 'lucide-react';
import DownloadCardItem from './download-card-item';

const DashboardOthersCard = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md mx-auto">
      <h2 className="text-center text-lg font-semibold text-gray-700 mb-4">
        Others
      </h2>
      <div className="flex justify-around text-center text-sm text-gray-700">
        <div className="flex flex-col items-center">
          <DownloadCardItem icon={Boxes} itemTitle="Categories" amount={5} />
        </div>
        <div className="flex flex-col items-center">
          <DownloadCardItem
            icon={Download}
            itemTitle="CV Downloads"
            amount={8}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardOthersCard;
