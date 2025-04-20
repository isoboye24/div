// data/projectData.ts
import OnlineStoreImg from '@/public/images/onlineStore.png';
import APCAppImg from '@/public/images/project1.jpg';
import EcommerceAppImg from '@/public/images/project2.jpg';
import JobifyImg from '@/public/images/TealBackground.jpg';
import EarthViewImg from '@/public/images/project3.jpg';
import RoutineAppImg from '@/public/images/greenBackground.jpg';
import LangAppImg from '@/public/images/projects.jpg';
import { Project } from '@/types';

export const projectList: Project[] = [
  {
    id: 1,
    name: 'Online eStore',
    previewUrl: 'https://online-estore.vercel.app/',
    image: OnlineStoreImg,
    type: 'Web',
    codeUrl: 'https://github.com/isoboye24/online_estore',
  },
  {
    id: 2,
    name: 'APC App',
    previewUrl: '',
    image: APCAppImg,
    type: 'Desktop',
    codeUrl: 'https://github.com/isoboye24/APC_APP',
  },
  {
    id: 3,
    name: 'Web Shop',
    previewUrl: '',
    image: EcommerceAppImg,
    type: 'Web',
    codeUrl: '',
  },
  {
    id: 4,
    name: 'Jobify',
    previewUrl: '',
    image: JobifyImg,
    type: 'Web',
    codeUrl: '',
  },
  {
    id: 5,
    name: 'Earth View',
    previewUrl: '',
    image: EarthViewImg,
    type: 'Web',
    codeUrl: '',
  },
  {
    id: 6,
    name: 'Routine App',
    previewUrl: '',
    image: RoutineAppImg,
    type: 'Desktop',
    codeUrl: '',
  },
  {
    id: 7,
    name: 'Lang App',
    previewUrl: '',
    image: LangAppImg,
    type: 'Desktop',
    codeUrl: '',
  },
];
