import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

function Education() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institute: "Gandhi Engineering College, BPUT",
      duration: "2022 - 2024",
    },
    {
      degree: "Bachelor of Science (B.Sc)",
      institute: "Brahman Jharilo College",
      duration: "2019 - 2022",
    },
  ];

  return (
    <section ref={ref} className="bg-[#161313] py-10">
      <div className="max-w-6xl mx-auto px-0 md:px-3 lg:px-5">
        <div className="headline">
          <h2
            className="text-white uppercase font-black leading-10 lg:leading-none tracking-tight
          text-4xl sm:text-7xl md:text-8xl lg:text-[6rem]"
          >
            EDUCATION
          </h2>

          <h2
            className="font-black uppercase leading-none tracking-tight
          text-[#363233]
          text-2xl sm:text-7xl md:text-8xl lg:text-[6rem]"
          >
            JOURNEY
          </h2>
        </div>

        <div className="relative mt-10 ml-0 md:mt-12 md:ml-4 lg:mt-16 lg:ml-6">
          {/* Gray Line */}
          <div className="absolute left-0 top-0 w-[3px] h-full bg-[#2f2a2a]" />

          {/* Orange Progress Line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-0 top-0 w-[3px] h-full bg-[#F46C38] origin-top"
          />

          {education.map((item, index) => (
            <div key={index} className="relative pl-5 mb-8 md:pl-8 md:mb-8 lg:pl-10 lg:mb-12">
              <div className="absolute -left-[7px] top-2 w-4 h-4 rounded-full bg-[#F46C38]" />

              <div className="bg-[#211e1d] rounded-2xl p-2 md:p-4 lg:p-6">
                <p className="text-[#F46C38] text-base md:text-lg md:text-lg">{item.duration}</p>

                <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mt-2">
                  {item.degree}
                </h3>

                <p className="text-gray-400 text-base md:text-xl md-text-xl mt-2">{item.institute}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
