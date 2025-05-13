'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { Phone, Mail, CalendarDaysIcon, MapPinned } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../card';

const ContactCards = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-15 md:mb-20 lg:mb-0"
      >
        <div className="">
          <Card className="w-full max-w-lg">
            <CardHeader className="flex justify-center items-center ">
              <CardTitle>
                <Phone color="#fa8c00" />
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <h1 className="text-xl font-bold mb-4">Phone</h1>
              <p>+49 151 205 68192</p>
            </CardContent>
          </Card>
        </div>
        <div className="">
          <Card className="w-full max-w-lg text-wrap">
            <CardHeader className="flex justify-center items-center ">
              <CardTitle>
                <Mail color="#fa8c00" />
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <h1 className="text-xl font-bold mb-4">Email</h1>
              <p className="break-words">isoboyedanobu@gmail.com</p>
            </CardContent>
          </Card>
        </div>
        <div className="">
          <Card className="w-full max-w-lg">
            <CardHeader className="flex justify-center items-center ">
              <CardTitle>
                <CalendarDaysIcon color="#fa8c00" />
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <h1 className="text-xl font-bold mb-4">Available</h1>
              <p>Mondays - Fridays</p>
              <p>8:30 - 19:00</p>
            </CardContent>
          </Card>
        </div>
        <div className="">
          <Card className="w-full max-w-lg">
            <CardHeader className="flex justify-center items-center ">
              <CardTitle>
                <MapPinned color="#fa8c00" />
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <h1 className="text-xl font-bold mb-4">Location</h1>
              <p className="break-words">
                Akazienallee 68, 34225 Baunatal, Hessen, Germany
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactCards;
