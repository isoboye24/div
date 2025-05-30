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
  getAllContactMessages,
  deleteContactMessage,
  getTotalContactMessages,
} from '@/lib/actions/message.actions';
import Link from 'next/link';
import DeleteDialog from '@/components/ui/shared/delete-dialog';
import { ContactMessage } from '@/types';

export const metadata: Metadata = {
  title: 'List of Messages',
};

const Messages = async () => {
  const contactMessageData = await getAllContactMessages();
  const total = await getTotalContactMessages();

  return (
    <div className="space-y-2">
      <div className="">
        <div className="flex justify-center items-center gap-3">
          <h1 className="h2-bold text-center">List of Messages</h1>
        </div>
      </div>
      <div className="mt-7">
        <Table>
          <TableHeader className="text-xl">
            <TableRow>
              <TableHead>Sender Name</TableHead>
              <TableHead>Sender Email</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Message</TableHead>
              <TableHead className="w-[200px]">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contactMessageData?.data?.map((contactMessage: ContactMessage) => (
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
                  <DeleteDialog
                    id={contactMessage.id!}
                    action={deleteContactMessage}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-10 text-end pr-4 md:pr-8 text-green-500">
        Total Messages: {total.total}
      </div>
    </div>
  );
};

export default Messages;
