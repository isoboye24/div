'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { ImageCarouselProps } from '@/types';
import { Card, CardFooter, CardHeader } from '../card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageCarousel({
  images,
  interval = 5000,
}: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const stopAutoplay = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    timerRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, interval);
  }, [images.length, interval, stopAutoplay]);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [activeIndex, startAutoplay, stopAutoplay]);

  const handleThumbnailClick = (index: number) => {
    stopAutoplay();
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-full max-w-2xl mx-auto">
        <Card className="w-full">
          <CardHeader>
            <div className="group w-full max-w-lg md:max-w-xl lg:max-w-2xl aspect-video relative rounded overflow-hidden mx-auto justify-items-center">
              <Image
                src={images[activeIndex]}
                alt={`Main image ${activeIndex + 1}`}
                fill
                className="w-full h-auto object-contain"
              />

              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Next Button */}
              <button
                onClick={goToNext}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </CardHeader>

          <CardFooter>
            <div className="w-full overflow-hidden">
              <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`w-10 h-10 md:w-40 md:h-20 relative border rounded cursor-pointer transition-all duration-200 ${
                      index === activeIndex
                        ? 'ring-2 ring-blue-500'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
