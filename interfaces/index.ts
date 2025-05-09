import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { StaticImageData } from 'next/image';

export interface InputProps {
  label?: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

export interface TextareaProps {
  label?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}

export interface SocialMediaProps {
  icon: IconProp;
  size: number;
  url: string;
  bgColor?: string; // Tailwind class like 'bg-amber-500'
}

export interface PolygonPictureFrameProps {
  src: string | StaticImageData;
  sides?: number;
  size?: number; // Tailwind sizing like "w-64 h-64"
  borderColor?: string;
  borderWidth?: number; // In pixels
}

export interface PictureFrameProps {
  src: string | StaticImageData;
  rotation?: string;
  zIndex?: string;
  position?: string;
  size?: number;
  translateX?: string;
  translateY?: string;
}

export interface TabSectionProps<T extends string = string> {
  tab: T[];
  types: T;
}

export interface PagesProps {
  searchParams?: { page?: string };
}
