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
import { getSomeContactMessages } from '@/lib/actions/message.actions';
import { ContactMessage } from '@/types';
import Link from 'next/link';

const DashboardMessagesCard = async () => {
  const topContactMessages = await getSomeContactMessages();
  return (
    <div className="bg-white dark:bg-gray-700 shadow-md rounded-xl p-6 w-full mx-auto">
      <h2 className="text-center text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
        Recent Messages
      </h2>

      <div className="mt-7 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="text-gray-700 dark:text-gray-200">
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Message</TableHead>
              <TableHead className="w-[100px]">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-gray-700 dark:text-gray-200">
            {topContactMessages?.data?.map((contactMessage: ContactMessage) => (
              <TableRow key={contactMessage.id}>
                <TableCell>{contactMessage.senderName}</TableCell>
                <TableCell>{contactMessage.senderEmail}</TableCell>
                <TableCell>{contactMessage.subject}</TableCell>
                <TableCell>
                  {contactMessage.messageText.length > 20
                    ? contactMessage.messageText.slice(0, 20) + '…'
                    : contactMessage.messageText}
                </TableCell>
                <TableCell className="flex gap-5">
                  <Link href={`/admin/messages/${contactMessage.id}`}>
                    <Button>View</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DashboardMessagesCard;
