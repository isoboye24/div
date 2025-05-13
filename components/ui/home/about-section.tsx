'use client';

import AboutTexts from '@/components/ui/about/about-texts';
import PictureFrames from '@/components/ui/about/picture-frames';
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="wrapper grid grid-cols-1 md:grid-cols-2 gap-4">
      <motion.div
        initial={{ opacity: 0, y: 130 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
        className="p-8 rounded-xl shadow-lg"
      >
        <AboutTexts />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 130 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
        className="p-8 rounded-xl shadow-lg"
      >
        <PictureFrames />
      </motion.div>
    </section>
  );
};

export default AboutSection;
