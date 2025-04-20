export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'DIV';
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  'A personal website built with Next.js, Typescript and React';
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';

export const categoryDefaultValues = {
  name: '',
};

export const contactMessageDefaultValues = {
  senderName: '',
  senderEmail: '',
  subject: '',
  messageText: '',
};
