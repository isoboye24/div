'use client';

import React from 'react';
import FormSection from './form-section';

import SectionTitle from '../shared/section-title';
import ContactCards from './contact-cards';

const ContactForm = () => {
  return (
    <div className="">
      <div className="wrapper">
        <div className="flex flex-col items-center justify-center">
          <SectionTitle title="Send me a message" />
        </div>
        <div className="flex items-center justify-center mb-2 md:mb-20">
          <FormSection />
        </div>
        <ContactCards />
      </div>
    </div>
  );
};

export default ContactForm;
