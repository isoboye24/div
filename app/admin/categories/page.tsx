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
import { getAllCategory, deleteCategory } from '@/lib/actions/category.actions';
import Link from 'next/link';
import DeleteDialog from '@/components/ui/shared/delete-dialog';

export const metadata: Metadata = {
  title: 'List of Categories',
};

const Categories = async () => {
  const categories = await getAllCategory();

  return (
    <div className="space-y-2">
      <div className="flex-between">
        <div className="flex gap-3">
          <h1 className="h2-bold text-center">List of Categories</h1>
        </div>
        <Link href="/admin/categories/create">
          <Button variant="default">Create Category</Button>
        </Link>
      </div>
      <div className="mt-7">
        <Table>
          <TableHeader className="text-xl">
            <TableRow>
              <TableHead>Category</TableHead>
              <TableHead className="w-[200px]">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories?.data?.map((category) => (
              <TableRow key={category.id}>
                <TableCell>{category.name}</TableCell>
                <TableCell className="flex gap-5">
                  <Link href={`/admin/categories/${category.id}`}>
                    <Button>Edit</Button>
                  </Link>
                  <DeleteDialog id={category.id} action={deleteCategory} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Categories;
