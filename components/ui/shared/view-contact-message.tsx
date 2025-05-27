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
        <div className="grid grid-cols-3 gap-5 p-10">
          <div className="">
            <h1 className="text-center mb-10">{`Message from ${message?.senderName}`}</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
            <div className="">Email: {message?.senderEmail}</div>
            <div className="">Subject: {message?.subject}</div>
          </div>
          <div className="">
            <p className="">Message body</p>
            <p className="">{message?.messageText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewContactMessage;
