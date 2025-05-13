import React from 'react';

const PageTopSection = ({
  pageName,
  bgColor,
}: {
  pageName: string;
  bgColor?: string;
}) => {
  return (
    <div
      className={`bg-${bgColor} mb-10 h-[10vh] xl:h-[10vh] w-[100vw]`}
      style={{ backgroundColor: `${bgColor}` }}
    >
      <div className="text-lg md:text-1xl lg:text-3xl pt-5 wrapper">
        {pageName}
      </div>
    </div>
  );
};

export default PageTopSection;
