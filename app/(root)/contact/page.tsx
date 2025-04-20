import ContactForm from '@/components/ui/contact/contact-form';
import React from 'react';

import { Metadata } from 'next';
import PageTopSection from '@/components/ui/page-top-section';

export const metadata: Metadata = {
  title: 'Contact',
};

const Contact = () => {
  return (
    <div className="">
      <PageTopSection pageName="Keep In Touch" bgColor="teal-500" />
      <ContactForm />
    </div>
  );
};

export default Contact;
