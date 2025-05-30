export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'DIV';
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  'A personal website built with Next.js, Typescript and React';
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
export const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 10;

export const signInDefaultValues = {
  email: '',
  password: '',
};

export const signUpDefaultValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  image: '',
};

export const USER_ROLES = process.env.USER_ROLES
  ? process.env.USER_ROLES.split(', ')
  : ['admin', 'user'];

export const categoryDefaultValues = {
  name: '',
};

export const cvDownloaderDefaultValues = {
  company: '',
  email: '',
  numberOfDownload: 0,
};

export const contactMessageDefaultValues = {
  senderName: '',
  senderEmail: '',
  subject: '',
  messageText: '',
};

export const skillDefaultValues = {
  skillName: '',
  categoryId: '',
  level: 0,
};

export const projectDefaultValues = {
  projectName: '',
  categoryId: '',
  publish: false,
  images: [],
  slug: '',
  rate: 0,
  siteLink: '',
  codeLink: '',
  description: '',
  projectThumbnail: '',
};

export const userDefault = {
  name: '',
  email: '',
  role: 'user',
  image: '',
  password: '',
  confirmPassword: '',
};
