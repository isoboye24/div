import React from 'react';
import ContactCard from './contact-card';

import { Phone, Mail, CalendarDaysIcon, MapPinned } from 'lucide-react';

const ContactCards = () => {
  return (
    <div>
      <div className="hidden md:grid grid-cols-4 gap-5 mb-20">
        <div className="">
          <ContactCard
            icon={Phone}
            title="Phone"
            iconColor="text-amber-500"
            description1="+49 151 205 68192"
          />
        </div>
        <div className="g">
          <ContactCard
            icon={Mail}
            title="Email"
            iconColor="text-amber-500"
            description1="isoboyedanobu@gmail.com"
          />
        </div>
        <div className="">
          <ContactCard
            icon={CalendarDaysIcon}
            title="Available"
            iconColor="text-amber-500"
            description1="Mondays - Fridays"
            description2="8:30 - 19:00"
          />
        </div>
        <div className="">
          <ContactCard
            icon={MapPinned}
            title="Location"
            iconColor="text-amber-500"
            description1="Akazienallee 68, 34225 Baunatal, Hessen, Germany"
          />
        </div>
      </div>
      <div className="md:hidden grid grid-cols-1 my-15">
        <div className="mb-5">
          <ContactCard
            icon={Phone}
            title="Phone"
            iconColor="text-amber-500"
            description1="+49 151 205 68192"
          />
        </div>
        <div className="mb-5">
          <ContactCard
            icon={Mail}
            title="Email"
            iconColor="text-amber-500"
            description1="isoboyedanobu@gmail.com"
          />
        </div>
        <div className="mb-5">
          <ContactCard
            icon={CalendarDaysIcon}
            title="Available"
            iconColor="text-amber-500"
            description1="Mondays - Fridays"
            description2="8:30 - 19:00"
          />
        </div>
        <div className="mb-5">
          <ContactCard
            icon={MapPinned}
            title="Location"
            iconColor="text-amber-500"
            description1="Akazienallee 68, 34225 Baunatal, Hessen, Germany"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactCards;
