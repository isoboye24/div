'use client';

import DashboardOthersCard from '@/components/ui/shared/dashboard-others-card';
import DashboardProjectsCard from '@/components/ui/shared/dashboard-project-card';
import DashboardSkillCard from '@/components/ui/shared/dashboard-skill-card';
// import { User } from '@/types';
import React from 'react';

const DashboardContent = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="">
          <DashboardSkillCard />
        </div>
        <div className="">
          <DashboardProjectsCard />
        </div>
        <div className="">
          <DashboardOthersCard />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
