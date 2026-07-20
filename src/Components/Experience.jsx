import { HiOutlineArrowUpRight } from "react-icons/hi2";

function Experience() {
  const experiences = [
    {
      company: "Thyosoftech Pvt. Ltd.",
      role: "Full Stack Developer",
      description:
        "Developed dynamic web applications using PHP,Laravel,React, MySQL, Bootstrap, and JavaScript. Built admin panels, responsive interfaces, and custom business solutions.",
      duration: "Apr 2025 - Present",
      link: "",
    },
    {
      company: "Freelance Projects",
      role: "Freelance Web Developer",
      duration: "2024 - Present",
      description:
        "Designed and developed custom websites for clients, including business websites, e-commerce platforms, and portfolio websites with responsive design and performance optimization.",
    },
  ];

  return (
    <section className="bg-[#161313] py-0 md:py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-0 md:px-3 lg:px-5">
        {/* Heading */}
        <div className="mb-7 md:mb-12 lg:mb-16">
          <h2
            className="text-white uppercase font-black leading-10 lg:leading-none tracking-tight
          text-3xl sm:text-7xl md:text-8xl lg:text-[8rem]"
          >
            WORK
          </h2>

          <h2
            className="font-black uppercase leading-none tracking-tight
          text-[#363233]
          text-4xl sm:text-7xl md:text-8xl lg:text-[6rem]"
          >
            EXPERIENCE
          </h2>
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {experiences.map((item, index) => (
            <a
              key={index}
              className='group block rounded-xl py-0 px-0 md:p-4 lg:py-4 lg:px-5 transition-all duration-300 bg-transparent hover:bg-[#211e1d]'
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="max-w-3xl">
                  <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold">
                    {item.company}
                  </h3>

                  <h4 className="text-[#F46C38] text-base md:text-lg lg:text-lg mt-2 font-medium">
                    {item.role}
                  </h4>

                  <p className="leading-relax text-[#8f8888] text-base md:text-lg lg:text-lg leading-relaxed text-justify mt-3">
                    {item.description}
                  </p>

                  <p className="text-[#8f8888] text-base md:text-lg md:text-lg mt-4">
                    {item.duration}
                  </p>
                </div>

                <div className="self-start">
                  <HiOutlineArrowUpRight
                    size={36}
                    className="text-[#F46C38] transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
