interface SkillProps {
  icon: React.ReactNode;
  skillName: string;
  description: string;
  progress: number;
}

function SkillCard({ icon, skillName, description, progress }: SkillProps) {
  return (
    <>
      <div className="bg-white rounded-2xl border border-[#fceBd4] p-4">
        <div className="flex gap-3">
          <div>{icon}</div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="text-[13px] text-black font-medium">{skillName}</p>
              <p className="text-xs text-secondary font-medium">{progress}%</p>
            </div>
            <div className="w-full bg-background rounded-md h-[5px] relative mt-2">
              <div
                className="bg-primary h-[5px] rounded-md"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-600 text-justify leading-5 mt-2">{description}</p>
      </div>
    </>
  );
}
export default SkillCard;
