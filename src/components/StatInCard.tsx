import { animate } from "framer-motion";
import { useEffect, useState } from "react";

interface StatInCardProps {
  count: string;
  label: string;
}

function StatInCard({ count, label }: StatInCardProps) {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, Number(count), {
      duration: 2,
      onUpdate(value) {
        setCurrentCount(Math.floor(value));
      },
    });

    return () => controls.stop(); // stop animasi saat unmount
  }, [count]);
  return (
    <div className="flex w-[230px] lg:w-auto items-center gap-3 md:gap-5 bg-gradient-to-b from-tertiary-100 to-tertiary-200 rounded-[14px] p-5">
      <h4 className="text-4xl md:text-5xl font-medium text-primaryy-200">
        {currentCount}
      </h4>
      <p className="text-sm md:text-[16px] font-normal text-primaryy-200 leading-6 whitespace-pre-line">
        {label}
      </p>
    </div>
  );
}

export default StatInCard;
