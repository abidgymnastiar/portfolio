import { motion } from "framer-motion";

interface Tab {
  id: string;
  value: string;
  label: string;
}

interface TabsProps {
  tabList: Tab[];
  activeTab: string;
  onChange: (tab: string) => void;
}

function Tabs({ tabList, activeTab, onChange }: TabsProps) {
  const getActiveStyles = (value: string) => {
    return activeTab === value
      ? "text-white bg-gradient-primary"
      : "text-primaryy-200 bg-transparent";
  };
  return (
    <div className="flex items-center justify-center my-10">
      <div className="bg-tertiary-300 rounded-full flex">
        {tabList.map((tab) => (
          <motion.button
            key={tab.id}
            initial={{ opacity: 0.0, scale: 1 }}
            animate={{ opacity: activeTab === tab.value ? 1 : 0.8, scale: activeTab === tab.value ? 1.05 : 1 }}
            className={`text-sm md:text-[15px] ${getActiveStyles(
              tab.value
            )} rounded-full px-4 md:px-10 py-[6px] md:py-3`}
            onClick={() => onChange(tab.value)}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
