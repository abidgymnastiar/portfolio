interface SkillProps {
  icon: string;
  skillName: string;
  description: string;
  progress: number;
  experience: string;
}

function SkillCard({ icon, skillName, experience }: SkillProps) {
  return (
    <>
      <div className="bg-tertiary-400 rounded-2xl border border-tertiary-300 p-4 w-[300px]">
        <div className="flex gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-quaternary-200 to-quaternary-100 rounded-[7px]">
            <img src={icon} alt="" className="h-7 w-7" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="text-[13px] text-primaryy-100 font-medium">
                {skillName}
              </p>
              {/* <p className="text-xs text-primaryy-200 font-medium">
                {progress}%
              </p> */}
            </div>
            {/* <div className="w-full bg-white rounded-md h-[5px] relative mt-2 overflow-hidden">
              <div
                className="h-full bg-quaternary-300 rounded-md transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div> */}
            <div className="flex flex-row text-xs text-quaternary-100 text-justify leading-5">
              <p className="mr-1">Pengalaman</p>
              <p className="">{experience}</p>
            </div>
          </div>
        </div>
        {/* <p className="text-xs text-primaryy-200 text-justify leading-5 mt-2">
          {description}
        </p> */}
      </div>
    </>
  );
}
export default SkillCard;
