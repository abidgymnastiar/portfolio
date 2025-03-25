import { useState } from "react";
import Tabs from "../components/Tabs";
import { SKILL_TABS, SKILLS } from "../utils/Data";
import SkillCard from "../components/SkillCard";

function TechnicalProficiency() {
  const [tabData, setTabData] = useState(SKILLS);
  const [activeTab, setActiveTab] = useState("all");

  const handleTabValueChange = (value: string) => {
    if (value == "all") {
      setTabData(SKILLS);
      setActiveTab("all");
      return;
    }

    const updateList = SKILLS.filter((item) => item.type === value);
    setTabData(updateList);

    setActiveTab(value);
  };
  return (
    <section
      id="skills"
      className="container mx-auto bg-background mt-20 max-w-[1220px]"
    >
      <div>
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title">Technical Proficiency</h4>
          <p className="text-sm text-center mt-4 leading-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
            maxime praesentium fugiat! Dolore modi, temporibus aliquam iure ipsa
            delectus, quod ut quis ipsum ab hic ratione earum beatae maiores
            sapiente? Sed deserunt possimus rerum velit eaque et maxime
          </p>
        </div>
        <Tabs
          tabList={SKILL_TABS}
          activeTab={activeTab}
          onChange={handleTabValueChange}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {tabData.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <SkillCard
                key={skill.id}
                icon={<IconComponent className="w-6 h-6 text-primary" />}
                skillName={skill.skill}
                description={skill.description}
                progress={skill.progress}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechnicalProficiency;
