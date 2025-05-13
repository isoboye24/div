import React from 'react';
import Image from 'next/image';
import { PolygonPictureFrameProps } from '@/interfaces';

const PolygonPictureFrame: React.FC<PolygonPictureFrameProps> = ({
  src,
  sides = 6,
  size = 300,
  borderColor = '#ffffff',
  borderWidth = 8,
}) => {
  const generatePolygonClipPath = (sides: number) => {
    const angle = (2 * Math.PI) / sides;
    const points = Array.from({ length: sides }, (_, i) => {
      const x = 50 + 50 * Math.cos(i * angle - Math.PI / 2);
      const y = 50 + 50 * Math.sin(i * angle - Math.PI / 2);
      return `${x}% ${y}%`;
    }).join(', ');
    return `polygon(${points})`;
  };

  return (
    <div
      className={`relative`}
      style={{ height: `${size}px`, width: `${size}px` }}
    >
      {/* Outer Frame */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: generatePolygonClipPath(sides),
          backgroundColor: borderColor,
        }}
      ></div>

      {/* Inner Image Container */}
      <div
        className="absolute inset-0 p-[8px]"
        style={{
          clipPath: generatePolygonClipPath(sides),
          padding: borderWidth,
          boxSizing: 'border-box',
        }}
      >
        <Image
          src={src}
          alt="Framed Polygon"
          className="w-full h-full object-cover"
          style={{
            clipPath: generatePolygonClipPath(sides),
          }}
        />
      </div>
    </div>
  );
};

export default PolygonPictureFrame;
