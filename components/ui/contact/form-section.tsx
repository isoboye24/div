import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ReuseableInput from '../reusable-input';
import ReuseableTextarea from '../reuseable-textarea';

const FormSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setName(e.target.value);
    setEmail(e.target.value);
    setSubject(e.target.value);
    setMessage(e.target.value);
  };

  return (
    <>
      <form className="space-y-2">
        <div className="flex flex-col gap-2 md:gap-5 w-[90vw] md:w-[60vw] lg:w-[40vw]">
          <div className="">
            {/* Name */}
            <ReuseableInput
              label="Name"
              name="name"
              type="text"
              onChange={handleChange}
              value={name}
            />
          </div>
          <div className="">
            {/* Email */}
            <ReuseableInput
              label="Email"
              name="email"
              type="email"
              onChange={handleChange}
              value={email}
            />
          </div>
          <div className="">
            {/* Subject */}
            <ReuseableInput
              label="Subject"
              name="subject"
              type="text"
              onChange={handleChange}
              value={subject}
            />
          </div>
          <div className="">
            {/* Message */}
            <ReuseableTextarea
              label="Your Message"
              name="message"
              onChange={handleChange}
              value={message}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button
            type="submit"
            size="lg"
            className="button w-[20vw] lg:w-[15vw] 2xl:w-[8vw] bg-teal-500 hover:bg-teal-600"
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default FormSection;
