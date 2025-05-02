'use client';

import { User } from '@/types';
import React from 'react';

const DashboardContent = ({ user }: { user: User }) => {
  return (
    <>
      return <div>Welcome, {user?.email}</div>
    </>
  );
};

export default DashboardContent;
