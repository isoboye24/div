'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CarouselProps } from '@/types';

export default function CustomCarousel({ children }: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth * 0.8;

      if (direction === 'left') {
        if (container.scrollLeft === 0) {
          // Wrap around to the end
          container.scrollTo({
            left: container.scrollWidth,
            behavior: 'smooth',
          });
        } else {
          container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth',
          });
        }
      } else {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft >= maxScrollLeft) {
          // Wrap around to the start
          container.scrollTo({
            left: 0,
            behavior: 'smooth',
          });
        } else {
          container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth',
          });
        }
      }
    }
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => scroll('left')}
        className="block lg:hidden absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
      >
        <ChevronLeft className="text-gray-500" />
      </button>

      <div
        ref={containerRef}
        className="flex ml-4 lg:justify-center overflow-hidden space-x-4 lg:space-x-16 py-4 px-8"
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className="shrink-0 w-64">
            {child}
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll('right')}
        className="block lg:hidden absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
      >
        <ChevronRight className="text-gray-500" />
      </button>
    </div>
  );
}
