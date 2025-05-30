import { ContactMessage } from '@prisma/client';
import React from 'react';

const ViewContactMessage = ({
  message,
  id,
}: {
  message?: ContactMessage;
  id?: string;
}) => {
  return (
    <div className="wrapper">
      <div
        key={id}
        className="bg-white dark:bg-gray-700 shadow-md rounded-xl p-6 w-full mx-auto"
      >
        <div className="grid grid-rows-3 gap-2 lg:p-5">
          <div className="">
            <h1 className="text-center font-bold text-base lg:text-2xl ">
              Message from{' '}
              <b className="italic text-teal-500">{message?.senderName}</b>
            </h1>
            <hr className="border mt-2" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:p-5 ">
            <div className="">
              Email: <b>{message?.senderEmail}</b>
            </div>
            <div className="">
              Subject: <b>{message?.subject}</b>
            </div>
          </div>
          <div className="mt-0">
            <p className="text-center text-base md:text-xl font-semibold">
              Message{' '}
            </p>
            <p className="text-justify">{message?.messageText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewContactMessage;
