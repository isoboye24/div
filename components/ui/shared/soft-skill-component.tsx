import React from 'react';

type SoftSkillProps = {
  text: string;
  icon: React.ReactNode;
};

const SoftSkillComponent = ({ text, icon }: SoftSkillProps) => {
  return (
    <div className="relative flex justify-center items-start w-35 md:w-45 h-24">
      {/* Circle */}
      <div className="absolute -top-8 md:-top-10 w-15 h-15 md:w-20 md:h-20 rounded-full bg-teal-500 flex items-center justify-center text-black shadow">
        {icon && <span className="text-xs">{icon}</span>}
      </div>

      {/* Rectangle */}
      <div className="w-full h-15 md:h-25 border border-teal-500 flex items-end justify-center pt-20 md:pt-15">
        <span className="text-sm font-medium mb-4">{text}</span>
      </div>
    </div>
  );
};

export default SoftSkillComponent;
