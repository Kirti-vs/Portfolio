import React from "react";
import ProfileAside from "../Components/ProfileAside";
import Projects from "../Components/Projects";
import Experience from "../Components/Experience";
import { LuLayers } from "react-icons/lu";
import { LiaArrowRightSolid } from "react-icons/lia";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import Education from "../Components/Education";
import Skills from "../Components/Skills";
import Contact from "../Components/Contact";

function Home() {
  const cards = [
    {
      title: "WORK\nEXPERIENCE",
      color: "bg-[#ff6936]",
      text: "text-white",
      icon: <LuLayers size={32} />,
    },
    {
      title: "FEATURED\nPROJECTS",
      color: "bg-[#d8ff2f]",
      text: "text-black",
      icon: <HiOutlineSquare2Stack size={32} />,
    },
  ];
  return (
    <div>
      <main>
        <div className="main_container">
          <div className=" main_sub_cont grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[380px_1fr] gap-8">
            <aside>
              <div className="aside_contain sticky ">
                <ProfileAside />
              </div>
            </aside>

            <aside>
              <div className="home_main_section">
                <section className="bg-[#161313]">
                  <div className="max-w-7xl mx-auto px-0 lg:px-10  w-full">
                    {/* Heading */}
                    <div className="headline_proj">
                      <h1
                        className="text-white uppercase font-black leading-10 lg:leading-none tracking-tight
          text-3xl sm:text-7xl md:text-8xl lg:text-[8rem]"
                      >
                        {/* Full Stack */} Software
                      </h1>

                      <h1
                        className="font-black uppercase leading-none tracking-tight
          text-[#363233]
          text-4xl sm:text-7xl md:text-8xl lg:text-[6rem]"
                      >
                        Developer
                      </h1>
                    </div>

                    {/* Description */}
                    <div className=" mt-4 lg:mt-8 max-w-2xl">
                      <p className="text-[#8f8888] text-base md:text-xl leading-relaxed">
                        Turning ideas into powerful digital products through
                        modern technologies, creative problem-solving, and
                        user-centered design. I focus on building applications
                        that are fast, scalable, and built for the future.
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mt-6 md:mt-15 lg:mt-20">
                      <div>
                        <h2 className="text-white font-black text-4xl md:text-7xl lg:text-7xl">
                          +1
                        </h2>

                        <p className="text-[#8f8888] uppercase text-base md:text-lg lg:text-lg mt-3">
                          Years of <br /> Experience
                        </p>
                      </div>

                      <div>
                        <h2 className="text-white font-black text-4xl md:text-7xl lg:text-7xl">
                          +15
                        </h2>

                        <p className="text-[#8f8888] uppercase text-base md:text-lg lg:text-lg mt-3">
                          Projects <br /> Completed
                        </p>
                      </div>

                      <div>
                        <h2 className="text-white font-black text-4xl md:text-7xl lg:text-7xl">
                          +10
                        </h2>

                        <p className="text-[#8f8888] uppercase text-base md:text-lg lg:text-lg mt-3">
                          Happy <br /> Clients
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="py-13 px-0 md:px-4 lg:px-6">
                  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {cards.map((card, index) => (
                      <div
                        key={index}
                        className={`
              relative
              overflow-hidden
              rounded-[18px]
              
              p-6 md:p-7 lg:p-8
              ${card.color}
              group
            `}
                      >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <svg
                            className="w-full h-full"
                            viewBox="0 0 400 300"
                            fill="none"
                          >
                            <path
                              d="M0 250 C120 150 150 220 300 100 C350 60 370 80 400 0"
                              stroke="currentColor"
                              strokeWidth="6"
                            />
                          </svg>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-between">
                          <div>
                            <div className={card.text}>{card.icon}</div>

                            <h2
                              className={`
                  whitespace-pre-line
                  font-bold
                  mt-10
                  leading-tight
                  text-xl
                  md:text-2xl
                  lg:text-3xl
                  ${card.text}
                `}
                            >
                              {card.title}
                            </h2>
                          </div>

                          {/* Arrow Button */}
                          <div className="flex justify-end">
                            <button
                              className={`
                    px-3 py-2
                    rounded-lg
                    border
                    flex items-center justify-center
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    ${card.text}
                  `}
                            >
                              <LiaArrowRightSolid />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
                <section>
                  <Skills />
                </section>
                <section>
                  <Projects />
                </section>

                <section>
                  <Experience />
                </section>
                <Education />

                <section>
                  <Contact />
                </section>
              </div>
            </aside>

            
          </div>
          
        </div>
      </main>
    </div>
  );
}

export default Home;
