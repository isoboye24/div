import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '../button';

const DashboardMessagesCard = async () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full mx-auto">
      <h2 className="text-center text-lg font-semibold text-gray-700 mb-4">
        Recent Messages
      </h2>

      <div className="mt-7 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="text-gray-700">
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Message</TableHead>
              <TableHead className="w-[100px]">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Isoboye Vincent</TableCell>
              <TableCell>isoboyedanobu@gmail.com</TableCell>
              <TableCell>Web app inquiry</TableCell>
              <TableCell>I am looking for a web developer.</TableCell>
              <TableCell className="flex gap-5">
                {/* <Link href={`/admin/projects/${project.id}`}> */}
                <Button>Edit</Button>
                {/* </Link> */}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DashboardMessagesCard;
