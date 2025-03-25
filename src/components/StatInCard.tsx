interface StatInCardProps {
  count: string;
  label: string;
}

function StatInCard ({ count, label }: StatInCardProps)  {
  return (
    <div className="flex-1 flex items-center gap-3 md:gap-5 bg-gradient-to-b from-[#fcf4ec] to-[#ffffff] rounded-[14px] p-5">
      <h4 className="text-4xl md:text-5xl font-medium text-secondary">
        {count}
      </h4>
      <p className="text-sm md:text-[16px] font-normal text-black leading-6 whitespace-pre-line">
        {label}
      </p>
    </div>
  );
};

export default StatInCard;
