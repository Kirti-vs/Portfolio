import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";

import { SiTailwindcss, SiMysql } from "react-icons/si";

function Skills() {
  const skills = [
    {
      icon: <FaHtml5 size={28} className="text-orange-500" />,
      title: "HTML5",
      subtitle: "Semantic Markup",
    },
    {
      icon: <FaCss3Alt size={28} className="text-blue-500" />,
      title: "CSS3",
      subtitle: "Responsive Design",
    },
    {
      icon: <FaBootstrap size={28} className="text-purple-500" />,
      title: "Bootstrap",
      subtitle: "UI Framework",
    },
    {
      icon: <SiTailwindcss size={28} className="text-cyan-400" />,
      title: "Tailwind CSS",
      subtitle: "Utility First CSS",
    },
    {
      icon: <FaJs size={28} className="text-yellow-400" />,
      title: "JavaScript",
      subtitle: "ES6+ Development",
    },
    {
      icon: <FaReact size={28} className="text-cyan-500" />,
      title: "React JS",
      subtitle: "Frontend Library",
    },
    {
      icon: <FaPhp size={28} className="text-indigo-400" />,
      title: "PHP",
      subtitle: "Backend Development",
    },
    {
      icon: <SiMysql size={28} className="text-blue-600" />,
      title: "MySQL",
      subtitle: "Database Management",
    },
    {
      icon: <FaLaravel size={28} className="text-red-500" />,
      title: "Laravel",
      subtitle: "PHP Framework",
    },
  ];

  return (
    <section className="bg-[#161313] py-0 md:py-7 lg:py-10">
      <div className="max-w-7xl mx-auto px-0 md:px-3 lg:px-5">
        {/* Heading */}
        <div className="mb-8 md:mb-10 lg:mb-16">
          <h2 className="text-white uppercase font-black leading-10 lg:leading-none tracking-tight
          text-3xl sm:text-7xl md:text-8xl lg:text-[8rem]">
            CORE
          </h2>

          <h2 className="font-black uppercase leading-none tracking-tight
          text-[#363233]
          text-4xl sm:text-7xl md:text-8xl lg:text-[6rem]">
            SKILLS
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center  gap-3 group transition-all hover:bg-[#211e1d] rounded-2xl px-4 py-3 hover:cursor-default"
            >
              <div className="w-15 h-15 md:w-15 md:h-15 lg:w-18 lg:h-18 rounded-2xl bg-white flex items-center justify-center text-black text-2xl group-hover:scale-110 transition">
                {skill.icon}
              </div>

              <div>
                <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold">
                  {skill.title}
                </h3>

                <p className="text-gray-500 text-base md:text-lg lg:text-lg">{skill.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
