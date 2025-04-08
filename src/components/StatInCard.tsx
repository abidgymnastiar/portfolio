interface StatInCardProps {
  count: string;
  label: string;
}

function StatInCard ({ count, label }: StatInCardProps)  {
  return (
    <div className="flex-1 flex items-center gap-3 md:gap-5 bg-gradient-to-b from-tertiary-100 to-tertiary-200 rounded-[14px] p-5">
      <h4 className="text-4xl md:text-5xl font-medium text-primaryy-200">
        {count}
      </h4>
      <p className="text-sm md:text-[16px] font-normal text-primaryy-200 leading-6 whitespace-pre-line">
        {label}
      </p>
    </div>
  );
};

export default StatInCard;
