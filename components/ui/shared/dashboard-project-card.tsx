import { PanelsTopLeft, MonitorStop, Smartphone } from 'lucide-react';
import DownloadCardItem from './download-card-item';

const DashboardProjectsCard = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md mx-auto">
      <h2 className="text-center text-lg font-semibold text-gray-700 mb-4">
        Projects
      </h2>
      <div className="flex justify-around text-center text-sm text-gray-700">
        <div className="flex flex-col items-center">
          <DownloadCardItem
            icon={PanelsTopLeft}
            itemTitle="Web Apps"
            amount={5}
          />
        </div>
        <div className="flex flex-col items-center">
          <DownloadCardItem
            icon={MonitorStop}
            itemTitle="Desktop Apps"
            amount={8}
          />
        </div>
        <div className="flex flex-col items-center">
          <DownloadCardItem
            icon={Smartphone}
            itemTitle="Android Apps"
            amount={3}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardProjectsCard;
