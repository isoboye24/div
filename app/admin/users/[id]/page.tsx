import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getUserById } from '@/lib/actions/user.actions';
import UpdateUserForm from './update-user-form';

export const metadata: Metadata = {
  title: 'Update User',
};

const UpdateUser = async (props: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await props.params;
  const user = await getUserById(id);

  if (!user || !user.data) return notFound();

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <h1 className="h2-bold">Update User</h1>
      <UpdateUserForm
        register={{
          ...user.data,
          image: user.data.image ?? '',
          name: user.data.name ?? '',
          email: user.data.email ?? '',
          password: user.data.password ?? '',
          role: user.data.role ?? 'user',
          confirmPassword: user.data.password ?? '',
        }}
        id={user.data.id}
      />
    </div>
  );
};

export default UpdateUser;
