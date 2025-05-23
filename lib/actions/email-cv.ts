'use server';

import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';
import { Attachment } from '@/interfaces';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendCVToEmail = async (email: string) => {
  const filePath = path.join(process.cwd(), 'public', 'Dan-Obu-cv.pdf');
  const fileContent = fs.readFileSync(filePath).toString('base64');

  const attachments: Attachment[] = [
    {
      filename: 'Dan-Obu-cv.pdf',
      content: fileContent,
      type: 'application/pdf',
    },
  ];

  try {
    await resend.emails.send({
      from: 'isoboyedanobu@gmail.com',
      to: email,
      subject: 'Your requested CV',
      html: '<p>Thanks for your interest. Please find the CV attached.</p>',
      attachments,
    });

    return { success: true };
  } catch (err) {
    console.error('Failed to send CV:', err);
    return { success: false, message: 'Failed to send email.' };
  }
};
