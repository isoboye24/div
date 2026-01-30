'use client';

// import AboutTexts from '@/components/ui/about/about-texts';
// import PictureFrames from '@/components/ui/about/picture-frames';
import React from 'react';
// import { motion } from 'framer-motion';
import Image from 'next/image';
import Picture1 from '@/public/images/family2.1.jpg';
import Picture2 from '@/public/images/vincent2.2.jpg';
import Picture3 from '@/public/images/family3.jpg';

export default function About() {
  return (
    <section className="relative bg-linear-to-b from-[#050a1a] to-[#030614] py-24 lg:py-40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* TEXT CONTENT */}
          <div className="">
            <h2 className="text-3xl md:text-4xl font-bold text-white relative inline-block">
              About Me
              <span className="block h-1 w-14 bg-orange-500 mt-3"></span>
            </h2>

            <p className="mt-6 text-lg text-gray-300 font-medium">
              Software Developer with a strong focus on modern web technologies.
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed">
              I graduated from the Belarusian State University of Informatics
              and Radio-electronics (Minsk, Belarus) and I am currently based in
              Hesse, Germany.
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed">
              I enjoy building scalable applications, intuitive user interfaces,
              and solving real-world problems through clean and efficient code.
            </p>

            <a
              href="/contact"
              className="inline-block mt-8 px-6 py-3 border border-orange-500 text-orange-400 rounded-lg hover:bg-orange-500 hover:text-black transition"
            >
              Let’s work together
            </a>
          </div>

          {/* IMAGE STACK */}
          <div className="relative max-w-md mx-auto lg:mx-0">
            <div className="relative z-20">
              <Image
                src={Picture1}
                alt="About main"
                width={400}
                height={500}
                className="rounded-2xl border-4 border-orange-500 shadow-2xl"
              />
            </div>

            <div className="hidden lg:block absolute -top-10 -right-10 z-10">
              <Image
                src={Picture2}
                alt="About secondary"
                width={320}
                height={420}
                className="rounded-2xl border-4 border-orange-500 rotate-6 shadow-xl"
              />
            </div>

            <div className="hidden lg:block absolute -bottom-12 -left-10 z-0">
              <Image
                src={Picture3}
                alt="About tertiary"
                width={280}
                height={380}
                className="rounded-2xl border-4 border-orange-500 -rotate-6 shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
