import React from 'react';
import PageTopSection from '@/components/ui/page-top-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
};

const Blog = () => {
  return (
    <div>
      <PageTopSection pageName="Blog" bgColor="teal-500" />
    </div>
  );
};

export default Blog;
