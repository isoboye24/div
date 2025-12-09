const PageTopSection = ({
  pageName,
  bgColor,
}: {
  pageName: string;
  bgColor?: string;
}) => {
  return (
    <div
      className={`bg-${bgColor} mb-10 h-[10vh] lg:h-[16vh] xl:h-[24vh] w-screen flex items-center`}
      style={{ backgroundColor: `${bgColor}` }}
    >
      <div className="text-lg md:text-1xl lg:text-3xl pt-5 wrapper text-gray-50">
        {pageName}
      </div>
    </div>
  );
};

export default PageTopSection;
