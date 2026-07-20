import { FiArrowUpRight } from "react-icons/fi";

function Thought() {
  const articles = [
    {
      title: "How I Built Lovotale Multi-Vendor Platform",
      date: "July 2026",
      description:
        "A complete breakdown of building a vendor marketplace using PHP, MySQL, Bootstrap, and custom admin panels.",
    },
    {
      title: "React API Integration Best Practices",
      date: "June 2026",
      description:
        "Lessons learned while working with REST APIs, Axios, loading states, and error handling in React.",
    },
    {
      title: "From PHP Developer to React Developer",
      date: "May 2026",
      description:
        "My journey of learning React, building projects, and preparing for frontend developer roles.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#161313] py-10 md:py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-0 md:px-3 lg:px-5">
        {/* Heading */}
        <div className="mb-5 md:mb-8 lg:mb-10">
          <h2 className="text-white uppercase font-black leading-10 lg:leading-none tracking-tight
          text-3xl sm:text-7xl md:text-8xl lg:text-[6rem]">
            DEVELOPER
          </h2>

          <h2 className="font-black uppercase leading-none tracking-tight
          text-[#363233]
          text-4xl sm:text-7xl md:text-8xl lg:text-[7rem]">
            NOTES
          </h2>
        </div>

        <div className="max-w-3xl mb-8 md:mb-8 lg:mb-10">
          <p className=" text-[#8f8888] text-base md:text-xl leading-relaxed">
            Sharing my experiences, technical learnings, project case studies,
            and insights from building modern web applications using React,
            PHP, Laravel, and MySQL.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-[#211e1d] rounded-3xl p-4 md:p-5 lg:p-7 border border-[#2a2626]
              hover:border-[#F46C38] transition-all duration-300"
            >
              <span className="text-[#F46C38] text-sm uppercase tracking-wider">
                {article.date}
              </span>

              <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mt-4">
                {article.title}
              </h3>
{/* leading-relax text-[#8f8888] text-base md:text-lg lg:text-lg leading-relaxed text-justify mt-3 */}
              <p className="text-[#8f8888] mt-5 text-base md:text-lg lg:text-lg leading-8">
                {article.description}
              </p>

              <button
                className="mt-8 flex items-center gap-2 text-white
                hover:text-[#F46C38] transition"
              >
                Read More
                <FiArrowUpRight size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-5 md:mt-8 lg:mt-15 text-center">
          <h3 className="text-white text-2xl md:text-4xl font-bold">
            "Great software is built one problem at a time."
          </h3>

          <p className="text-[#8f8888] mt-4">
            — Kirti Ranjan Das
          </p>
        </div>
      </div>
    </section>
  );
}

export default Thought;