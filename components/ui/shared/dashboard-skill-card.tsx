import { Globe2Icon, Code2Icon, DatabaseIcon, ImageMinus } from 'lucide-react';
import DownloadCardItem from './download-card-item';

const DashboardSkillCard = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full mx-auto">
      <h2 className="text-center text-lg font-semibold text-gray-700 mb-4">
        Skills
      </h2>
      <div className="flex lg:hidden 2xl:flex justify-around text-center text-sm text-gray-700">
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
        <div className="flex flex-col items-center">
          <DownloadCardItem
            icon={ImageMinus}
            itemTitle="UI/UX Design"
            amount={3}
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
