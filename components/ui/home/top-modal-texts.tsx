import React from 'react';
import { Button } from '../button';
import { Download } from 'lucide-react';
import RoundedButtonWithLink from './rounded-button';
import Link from 'next/link';
import { motion } from 'framer-motion';

const TopModalTexts = () => {
  return (
    <>
      <div className="grid grid-rows-[4fr, 1fr] items-center md:bg-teal-600 justify-center z-12 mt-7 sm:mt-0 mb-10 sm:mb-0 rounded-tr-4xl rounded-br-4xl">
        <div className="flex items-center justify-center">
          <div className="grid text-center ">
            <div className="font-light text-center text-amber-200 sm:text-xs md:text-sm">
              Hello, I am
            </div>
            <div className="font-bold custom-text-white sm:text-lg md:text-2xl">
              Isoboye Vincent Dan-Obu
            </div>
            <div className="font-semibold custom-text-black text-base lg:text-2xl mb-5 sm:mb-7">
              Full Stack Developer
            </div>
            <div className="flex gap-2">
              <div className="">
                <a href="/Dan-Obu-cv.pdf" download>
                  <Button className="bg-black hover:bg-gray-800 text-gray-50 flex items-center gap-2">
                    <Download size={16} /> Download CV
                  </Button>
                </a>
              </div>
              <div className="">
                <Link href={'/contact'}>
                  <Button className="bg-black hover:bg-gray-800 text-gray-50">
                    Contact Info
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block lg:hidden">
          <motion.div
            initial={{ opacity: 0, x: 130 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex gap-2 lg:gap-4 items-center justify-center"
          >
            <RoundedButtonWithLink
              size={80}
              bgColor="bg-amber-600"
              textColor="text-gray-900"
              hoverColor="hover:bg-amber-700"
              url="#about"
              text="About"
            />
            <RoundedButtonWithLink
              size={80}
              bgColor="bg-black"
              textColor="text-gray-50"
              hoverColor="hover:bg-gray-800"
              url="#projects"
              text="Projects"
            />
            <RoundedButtonWithLink
              size={80}
              bgColor="bg-white"
              textColor="text-black"
              hoverColor="hover:bg-gray-300"
              url="#skills"
              text="Skills"
            />
          </motion.div>
        </div>
        <div className="hidden lg:block xl:hidden">
          <motion.div
            initial={{ opacity: 0, x: 130 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex gap-2 lg:gap-4"
          >
            <RoundedButtonWithLink
              size={100}
              bgColor="bg-amber-600"
              textColor="text-gray-900"
              hoverColor="hover:bg-amber-700"
              url="#about"
              text="About"
            />
            <RoundedButtonWithLink
              size={100}
              bgColor="bg-white"
              textColor="text-gray-900"
              hoverColor="hover:bg-gray-300"
              url="#projects"
              text="Projects"
            />
            <RoundedButtonWithLink
              size={100}
              bgColor="bg-black"
              textColor="text-gray-50"
              hoverColor="hover:bg-gray-800"
              url="#experience"
              text="Experience"
            />
            <RoundedButtonWithLink
              size={100}
              bgColor="bg-lime-700"
              textColor="text-gray-50"
              hoverColor="hover:bg-lime-800"
              url="#skills"
              text="Skills"
            />
          </motion.div>
        </div>
        <div className="hidden xl:block">
          <motion.div
            initial={{ opacity: 0, x: 130 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex gap-2 lg:gap-4"
          >
            <RoundedButtonWithLink
              size={120}
              bgColor="bg-amber-600"
              textColor="text-gray-900"
              hoverColor="hover:bg-amber-700"
              url="#about"
              text="About"
            />
            <RoundedButtonWithLink
              size={120}
              bgColor="bg-white"
              textColor="text-gray-900"
              hoverColor="hover:bg-gray-300"
              url="#projects"
              text="Projects"
            />
            <RoundedButtonWithLink
              size={120}
              bgColor="bg-black"
              textColor="text-gray-50"
              hoverColor="hover:bg-gray-800"
              url="#experience"
              text="Experience"
            />
            <RoundedButtonWithLink
              size={120}
              bgColor="bg-lime-700"
              textColor="text-gray-50"
              hoverColor="hover:bg-lime-800"
              url="#skills"
              text="Skills"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default TopModalTexts;
