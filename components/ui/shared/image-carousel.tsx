'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { ImageCarouselProps } from '@/types';

export default function ImageCarousel({
  images,
  interval = 5000,
}: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Autoplay logic
  useEffect(() => {
    startAutoplay();

    return () => stopAutoplay(); // Clean up on unmount
  }, [activeIndex]);

  const startAutoplay = () => {
    stopAutoplay(); // clear existing timer
    timerRef.current = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
  };

  const stopAutoplay = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  const handleThumbnailClick = (index: number) => {
    stopAutoplay();
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Main Image */}
      <div className="w-full max-w-3xl aspect-video relative border rounded overflow-hidden">
        <Image
          src={images[activeIndex]}
          alt={`Main image ${activeIndex + 1}`}
          fill
          className="object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex space-x-2">
        {images.map((img, index) => (
          <div
            key={index}
            className={`w-20 h-20 relative border rounded cursor-pointer transition-all duration-200 ${
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
  );
}
