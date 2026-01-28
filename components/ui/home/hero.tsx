'use client';

import { Download, Mail } from 'lucide-react';
import image from '@/public/images/vincent.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="w-full min-h-[85vh] flex items-center justify-center bg-linear-to-br from-teal-400 via-teal-500 to-emerald-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white/90 backdrop-blur rounded-3xl shadow-2xl overflow-hidden">
          {/* Left: Profile Image */}
          <div className="flex items-center justify-center p-10 bg-white">
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl flex items-center justify-center bg-neutral-100">
              <Image
                src={image}
                alt="Isoboye Vincent Dan-Obu profile photo"
                width={256}
                height={256}
                className="object-contain w-full h-full bg-neutral-100"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    '/profile-placeholder.svg';
                }}
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center p-10 bg-teal-600 text-white">
            <span className="text-sm uppercase tracking-widest text-amber-300 mb-2">
              Hello, I am
            </span>
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
              Isoboye Vincent Dan-Obu
            </h1>
            <p className="mt-3 text-lg text-teal-100 font-medium">
              Full Stack Developer
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="/cv.pdf"
                className="inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800 transition"
              >
                <Download size={18} />
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-teal-700 hover:bg-teal-50 transition"
              >
                <Mail size={18} />
                Contact Info
              </a>
            </div>

            {/* Navigation Pills */}
            <div className="flex gap-4 mt-12 flex-wrap">
              {[
                { label: 'About', color: 'bg-orange-500' },
                { label: 'Projects', color: 'bg-white text-teal-700' },
                { label: 'Experience', color: 'bg-black' },
                { label: 'Skills', color: 'bg-lime-600' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={`#${item.label.toLowerCase()}`}
                  className={`w-24 h-24 rounded-full flex items-center justify-center text-sm font-semibold shadow-lg hover:scale-105 transition ${item.color}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
