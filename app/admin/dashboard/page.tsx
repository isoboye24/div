import { auth } from '@/auth';
import React from 'react';
import DashboardContent from './dashboard-content';
import { getUserById } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';
import NotFound from '@/app/not-found';

const Dashboard = async () => {
  const session = await auth();

  if (!session || !session.user?.id) {
    redirect('/sign-in');
  }
  const user = await getUserById(session.user.id);

  if (!user || !user.data) return NotFound();

  const userData = {
    ...user.data,
    image: user.data.image ?? '',
    name: user.data.name,
    email: user.data.email,
    password: user.data.password,
    role: user.data.role,
    confirmPassword: user.data.password,
  };

  return (
    <div>
      <DashboardContent user={userData} />
    </div>
  );
};

export default Dashboard;
