import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#161313] border-t border-[#2a2626] py-10">
      <div className="max-w-7xl mx-auto px-5">

        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">

          {/* Left */}
          <div>
            <h2 className="text-white text-xl md:text-5xl lg:text-4xl font-black uppercase">
              Kirti Ranjan Das
            </h2>

            <p className="text-[#8f8888] text-base md:text-lg mt-4 max-w-md leading-8">
              Building scalable web applications and
              crafting exceptional digital experiences
              using React, PHP, Laravel, and modern web
              technologies.
            </p>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-5">
              Connect
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/Kirti-vs"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-[#211e1d]
                flex items-center justify-center
                text-white hover:bg-[#F46C38]
                transition duration-300"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/kirtiranjandas08/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-[#211e1d]
                flex items-center justify-center
                text-white hover:bg-[#F46C38]
                transition duration-300"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="mailto:kirtiranjan812@gmail.com"
                className="w-12 h-12 rounded-xl bg-[#211e1d]
                flex items-center justify-center
                text-white hover:bg-[#F46C38]
                transition duration-300"
              >
                <FaEnvelope size={20} />
              </a>

            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2a2626] my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-[#8f8888] text-sm md:text-base">
            © 2026 Kirti Ranjan Das. All Rights Reserved.
          </p>

          <p className="text-[#8f8888] text-sm md:text-base">
          Full Stack Developer • React, PHP & Laravel
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;