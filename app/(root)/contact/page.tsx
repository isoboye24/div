import ContactForm from '@/components/ui/contact/contact-form';
import React from 'react';

import { Metadata } from 'next';
import PageTopSection from '@/components/ui/page-top-section';
import ContactCards from '@/components/ui/contact/contact-cards';

export const metadata: Metadata = {
  title: 'Contact',
};

const Contact = () => {
  return (
    <div className="">
      <PageTopSection pageName="Keep In Touch" bgColor="teal-500" />
      <div className="wrapper">
        <div className="hidden lg:grid grid-cols-2 gap-4">
          <div className="">
            <ContactForm type="Send" />
          </div>
          <div className="">
            <ContactCards />
          </div>
        </div>
        <div className="block lg:hidden">
          <ContactForm type="Send" />
          <ContactCards />
        </div>
      </div>
    </div>
  );
};

export default Contact;
