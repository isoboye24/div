import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getUserById } from '@/lib/actions/user.actions';
import SignUpForm from '@/app/(auth)/sign-up/signup-form';

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

  if (!user) return notFound();

  const userData = user.data
    ? {
        ...user.data,
        name: user.data.name ?? undefined,
        password: user.data.password ?? undefined,
        image: user.data.image ?? undefined,
        role: user.data.role ?? undefined,
        email: user.data.email ?? undefined,
      }
    : undefined;

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <h1 className="h2-bold">Update User</h1>
      <SignUpForm type="Update" register={userData} id={user.data?.id} />
    </div>
  );
};

export default UpdateUser;
