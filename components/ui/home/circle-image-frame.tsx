import Image, { StaticImageData } from 'next/image';
import React from 'react';

const CircleImageFrame = ({
  size,
  imageUrl,
  color,
  innerColor,
}: {
  size: number;
  imageUrl?: string | StaticImageData;
  color?: string;
  innerColor?: string;
}) => {
  return (
    <div
      className={`rounded-full ${color} flex justify-center items-center relative`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <div
        className={`rounded-full ${innerColor} absolute`}
        style={{
          width: `${size && size / 1.08}px`,
          height: `${size && size / 1.08}px`,
        }}
      >
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="imageUrl"
            fill
            className="rounded-full object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default CircleImageFrame;
