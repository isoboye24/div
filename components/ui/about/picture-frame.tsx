import Image from 'next/image';
import { PictureFrameProps } from '@/interfaces';

export default function PictureFrame({
  src,
  rotation = '',
  zIndex = 'z-0',
  position = 'top-0 left-0',
  size = 300,
  translateX = '',
  translateY = '',
}: PictureFrameProps) {
  return (
    <div
      className={`absolute ${rotation} ${zIndex} ${position} ${translateX} ${translateY} transform transition duration-300`}
    >
      {/* Outer frame */}
      <div
        className="bg-amber-800 rounded-2xl p-4 shadow-xl flex justify-center items-center"
        style={{
          height: `${size + 30}px`,
          width: `${size + 30}px`,
        }}
      >
        {/* Inner image */}
        <div className="overflow-hidden rounded-lg">
          <Image
            src={src}
            alt="Framed picture"
            width={size}
            height={size}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
