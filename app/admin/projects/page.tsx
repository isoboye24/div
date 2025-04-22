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
import { getAllCategory } from '@/lib/actions/category.actions';
import Link from 'next/link';
import DeleteDialog from '@/components/ui/shared/delete-dialog';
import {
  deleteProject,
  getAllProjects,
  getTotalProjects,
} from '@/lib/actions/project.actions';

export const metadata: Metadata = {
  title: 'List of Projects',
};

const Projects = async () => {
  const projects = await getAllProjects();
  const categories = await getAllCategory();
  const total = await getTotalProjects();

  return (
    <div className="space-y-2">
      <div className="flex-between">
        <div className="flex gap-3">
          <h1 className="h2-bold text-center">List of Projects</h1>
        </div>
        <Link href="/admin/categories/create">
          <Button variant="default">Create Project</Button>
        </Link>
      </div>
      <div className="mt-7">
        <Table>
          <TableHeader className="text-xl">
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Publish</TableHead>
              <TableHead>Rate</TableHead>
              <TableHead className="w-[200px]">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects?.data?.map((project) => {
              const category = categories?.data?.find(
                (category) => category.id === project.categoryId
              );

              return (
                <TableRow key={project.id}>
                  <TableCell>{project.projectName}</TableCell>
                  <TableCell>{category?.name || 'unknown category'}</TableCell>
                  <TableCell>{project.publish}</TableCell>
                  <TableCell>{project.rate}</TableCell>
                  <TableCell className="flex gap-5">
                    <Link href={`/admin/projects/${project.id}`}>
                      <Button>Edit</Button>
                    </Link>
                    <DeleteDialog id={project.id} action={deleteProject} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <div className="mt-10 text-end pr-4 md:pr-8 text-green-500">
        Total Projects: {total.total}
      </div>
    </div>
  );
};

export default Projects;
