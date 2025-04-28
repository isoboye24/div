import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import Link from 'next/link';
import DeleteDialog from '@/components/ui/shared/delete-dialog';
import {
  deleteUser,
  getAllUsers,
  getTotalUsers,
} from '@/lib/actions/user.actions';

export const metadata: Metadata = {
  title: 'List of Users',
};

const Users = async () => {
  const users = await getAllUsers();
  const total = await getTotalUsers();

  return (
    <div className="space-y-2">
      <div className="flex-between">
        <div className="flex gap-3">
          <h1 className="h2-bold text-center">List of Users</h1>
        </div>
        <Link href="/sign-up">
          <Button variant="default">Create User</Button>
        </Link>
      </div>
      <div className="mt-7">
        <Table>
          <TableHeader className="text-xl">
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="w-[200px]">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users?.data?.map((user) => {
              return (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role || 'user'}</TableCell>
                  <TableCell className="flex gap-5">
                    <Link href={`/admin/users/${user.id}`}>
                      <Button>Edit</Button>
                    </Link>
                    <DeleteDialog id={user.id} action={deleteUser} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <div className="mt-10 text-end pr-4 md:pr-8 text-green-500">
        Total Users: {total.total}
      </div>
    </div>
  );
};

export default Users;
