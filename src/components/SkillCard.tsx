interface SkillProps {
  icon: React.ReactNode;
  skillName: string;
  description: string;
  progress: number;
}

function SkillCard({ icon, skillName, description, progress }: SkillProps) {
  return (
    <>
      <div className="bg-tertiary-400 rounded-2xl border border-tertiary-300 p-4 w-[300px]">
        <div className="flex gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-tertiary-400 to-white rounded-[7px]">
            {icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="text-[13px] text-primaryy-200 font-medium">
                {skillName}
              </p>
              <p className="text-xs text-primaryy-200 font-medium">
                {progress}%
              </p>
            </div>
            <div className="w-full bg-white rounded-md h-[5px] relative mt-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sky-400 to-red-500 rounded-md transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
        <p className="text-xs text-primaryy-200 text-justify leading-5 mt-2">
          {description}
        </p>
      </div>
    </>
  );
}
export default SkillCard;
