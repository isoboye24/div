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
import {
  getAllSkill,
  deleteSkill,
  getTotalSkills,
} from '@/lib/actions/skill.actions';
import { getAllCategory } from '@/lib/actions/category.actions';
import Link from 'next/link';
import DeleteDialog from '@/components/ui/shared/delete-dialog';
import Pagination from '@/components/ui/shared/pagination';

export const metadata: Metadata = {
  title: 'List of Skills',
};

const Skills = async ({
  searchParams,
}: {
  searchParams?: { page?: string };
}) => {
  const page = Number(searchParams?.page) || 1;

  const skills = await getAllSkill({ page });
  const allCategory = await getAllCategory();
  const total = await getTotalSkills();

  return (
    <div className="space-y-2">
      <div className="flex-between">
        <div className="flex gap-3">
          <h1 className="h2-bold text-center">List of Skill</h1>
        </div>
        <Link href="/admin/skills/create">
          <Button variant="default">Create Skill</Button>
        </Link>
      </div>
      <div className="mt-7">
        <Table>
          <TableHeader className="text-xl">
            <TableRow>
              <TableHead>Skill</TableHead>
              <TableHead>Level</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Publish</TableHead>
              <TableHead className="w-[200px]">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {skills?.data?.map((skill) => {
              const category = allCategory?.data?.find(
                (category) => category.id === skill.categoryId
              );

              return (
                <TableRow key={skill.id}>
                  <TableCell>{skill.skillName}</TableCell>
                  <TableCell>{skill.level}</TableCell>
                  <TableCell>{category?.name || 'unknown category'}</TableCell>
                  <TableCell>
                    {skill.publish ? 'Published' : 'Unpublished'}
                  </TableCell>
                  <TableCell className="flex gap-5">
                    <Link href={`/admin/skills/${skill.id}`}>
                      <Button>Edit</Button>
                    </Link>
                    <DeleteDialog id={skill.id} action={deleteSkill} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        {skills.totalPages && skills.totalPages > 1 && (
          <Pagination
            page={Number(page) || 1}
            totalPages={skills?.totalPages}
          />
        )}
      </div>
      <div className="mt-10 text-end pr-4 md:pr-8 text-green-500">
        Total Skills: {total.total}
      </div>
    </div>
  );
};

export default Skills;
