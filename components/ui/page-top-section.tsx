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
      className={`bg-${bgColor} mb-10 h-[30vh] xl:h-[40vh] w-[100vw]`}
      style={{ backgroundColor: `${bgColor}` }}
    >
      <div className="text-3xl pt-5 pl-5 wrapper">{pageName}</div>
    </div>
  );
};

export default PageTopSection;
