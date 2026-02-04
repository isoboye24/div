'use client';

type SkillCircleProps = {
  name: string;
  level: number; // 0–100
};

const getLabel = (level: number) => {
  if (level >= 90) return 'Advanced';
  if (level >= 75) return 'Proficient';
  return 'Basic';
};

const getColor = (level: number) => {
  if (level >= 90) return 'stroke-amber-700 text-teal-500';
  if (level >= 75) return 'stroke-teal-500 text-amber-700';
  return 'stroke-gray-400 text-gray-400';
};

const SkillCircle = ({ name, level }: SkillCircleProps) => {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative h-28 w-28">
        {/* Background ring */}
        <svg className="h-full w-full -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            strokeWidth="30"
            className="stroke-gray-900 dark:stroke-gray-800"
            fill="transparent"
          />

          {/* Progress ring */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            fill="transparent"
            className={`${getColor(level)} transition-all duration-700 ease-out`}
            strokeLinecap="round"
          />
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className={`text-xs font-semibold ${getColor(level)}`}>
            {getLabel(level)}
          </span>
        </div>
      </div>

      {/* Skill name */}
      <span className="text-sm font-medium text-gray-700 text-center">
        {name}
      </span>
    </div>
  );
};

export default SkillCircle;
