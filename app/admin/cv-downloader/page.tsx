import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Metadata } from 'next';
import DeleteDialog from '@/components/ui/shared/delete-dialog';
import {
  deleteDataViewer,
  getAllDataViewers,
  getTotalDataViewers,
} from '@/lib/actions/data-viewer.actions';

export const metadata: Metadata = {
  title: 'List of CV Downloaders',
};

const DataViewersList = async () => {
  const cvDownloaderList = await getAllDataViewers();
  const total = await getTotalDataViewers();

  return (
    <div className="space-y-2">
      <div className="flex-between">
        <div className="flex gap-3">
          <h1 className="h2-bold text-center">List of CV Downloaders</h1>
        </div>
      </div>
      <div className="mt-7">
        <Table>
          <TableHeader className="text-xl">
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>No. of D.</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="w-[100px]">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cvDownloaderList?.data?.map((downloader) => {
              return (
                <TableRow key={downloader.id}>
                  <TableCell>{downloader.email}</TableCell>

                  <TableCell>{downloader.company}</TableCell>
                  <TableCell>{downloader.numberOfDownload}</TableCell>
                  <TableCell>
                    {new Date(downloader.createdAt).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </TableCell>

                  <TableCell>
                    {new Date(downloader.createdAt).toLocaleDateString()}
                  </TableCell>

                  <TableCell className="flex gap-5">
                    <DeleteDialog
                      id={downloader.id}
                      action={deleteDataViewer}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <div className="mt-10 text-end pr-4 md:pr-8 text-green-500">
        Total CV Downloaders: {total.total}
      </div>
    </div>
  );
};

export default DataViewersList;
