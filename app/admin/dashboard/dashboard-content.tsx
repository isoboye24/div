import DashboardMessagesCard from '@/components/ui/shared/dashboard-messages-card';
import DashboardOthersCard from '@/components/ui/shared/dashboard-others-card';
import DashboardProjectsCard from '@/components/ui/shared/dashboard-project-card';
import DashboardSkillCard from '@/components/ui/shared/dashboard-skill-card';
import React from 'react';

const DashboardContent = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr_1fr] gap-5 mb-10">
        <div className="">
          <DashboardSkillCard />
        </div>
        <div className="">
          <DashboardProjectsCard />
        </div>
        <div className="">
          <DashboardOthersCard />
        </div>
        <div className="block lg:hidden">
          <DashboardMessagesCard />
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="w-[70%]">
          <DashboardMessagesCard />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
