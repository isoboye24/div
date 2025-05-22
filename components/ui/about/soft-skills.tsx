import React from 'react';
import SoftSkillComponent from '../shared/soft-skill-component';
import { Brain, HeartHandshakeIcon, Sparkle } from 'lucide-react';

const SoftSkills = () => {
  const white = '#fff';
  return (
    <div className="bg-teal-100 py-10 md:py-30">
      <div className="wrapper">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-15 md:gap-30 justify-items-center">
          <div className="text-gray-800">
            <SoftSkillComponent
              text="Resilience"
              icon={<Brain size={30} color={white} />}
            />
          </div>
          <div className="text-gray-800">
            <SoftSkillComponent
              text="Team player"
              icon={<HeartHandshakeIcon size={30} color={white} />}
            />
          </div>
          <div className="text-gray-800">
            <SoftSkillComponent
              text="Solution Oriented"
              icon={<Sparkle size={30} color={white} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;
