import { useState } from "react";
import Tabs from "../components/Tabs";
import { SKILL_TABS, SKILLS } from "../utils/Data";
import SkillCard from "../components/SkillCard";
import { motion } from "framer-motion";

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
    <section id="skills">
      <div className="max-w-[1440px] rounded-3xl py-10 px-5 mx-auto">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title">Kemampuan Teknis</h4>
          <p className="text-sm text-center mt-4 leading-6 text-primaryy-300">
            Saya memiliki keahlian kuat dalam pengembangan front-end menggunakan
            berbagai teknologi modern yang mendukung pembuatan antarmuka web
            yang responsif, interaktif, dan user-friendly, serta dioptimalkan
            untuk performa dan pengalaman pengguna yang maksimal. Dengan
            pemahaman yang mendalam terhadap prinsip desain antarmuka dan
            arsitektur web, saya mampu mengubah desain UI/UX menjadi tampilan
            yang fungsional dan menarik secara visual, baik untuk perangkat
            desktop maupun mobile. Kemampuan ini saya kembangkan melalui
            berbagai proyek pribadi dan kolaborasi tim, serta pengalaman
            langsung dalam membangun dan mengelola aplikasi web skala kecil
            hingga menengah.
          </p>
        </div>
        <Tabs
          tabList={SKILL_TABS}
          activeTab={activeTab}
          onChange={handleTabValueChange}
        />
        <div className="flex gap-4 justify-center flex-wrap ">
          {tabData.map((skill, index) => {
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <SkillCard
                  key={skill.id}
                  icon={skill.icon}
                  skillName={skill.skill}
                  description={skill.description}
                  progress={skill.progress}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechnicalProficiency;
