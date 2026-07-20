import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";

// import ProfileImg from '../.././public/images'

function ProfileAside() {
  return (
    <div className="min-h-[93vh] aside_sub_cont flex  justify-center">
      <div className="relative sub_cont w-full max-w-sm bg-white rounded-2xl overflow-hidden ">
        {/* Top Dashed Circle */}
        <div className="absolute -top-20 -left-20 w-48 h-48 border-4 border-dashed border-orange-500 rounded-full z-30"></div>

        <div className="absolute svg_icon -bottom-40 -left-5 w-50 h-50 rotate-[13deg] z-30">
          <img
            src="../.././public/images/download.svg"
            alt="" 
          />
        </div>

        {/* Image */}
        <div className="relative profile_img z-10 py-8 px-12">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-orange-700 to-orange-500">
            <img
              src="../../public/images/Kirt-portfolio-2.png"
              alt="profile"
              className="w-full h-[360px] img_prflie object-cover"
            />
          </div>
        </div>
        {/* Name */}
        <h2 style={{ fontFamily: "Space Grotesk" }} className="text-center text-3xl md:text-3xl lg:text-4xl font-black text-black">
          Kirti Ranjan Das
        </h2>
        {/* Description */}
        <p className='para_about' className="text-center text-[#6a6b6eda] text-base md:text-lg lg:text-lg leading-5 md:leading-5 lg:leading-6  font-bold px-4 pt-3 md:lg-4 lg:pt-5">
          Building the web, one component, one solution, and one challenge at a
          time.
        </p>
        {/* Social Icons */}
        <div className="flex justify-center gap-8 mt-4 md:mt-6 lg:mt-8 text-orange-500">
          <CiLinkedin size={28} className="hover:scale-110 transition" />
          <FaXTwitter size={26} className="hover:scale-110 transition" />
          <FaInstagram size={26} className="hover:scale-110 transition" />
          <CiYoutube size={28} className="hover:scale-110 transition" />
        </div>
        <div className="resume_btn pt-4 px-4">
          <a
            download
            href="../.././public/Kirti_Ranjan_Das_Resume.pdf"
            className="flex items-center justify-center gap-2 bg-[#F46C38] w-full px-6 py-3 font-bold text-base md:text-lg lg:text-lg rounded-3xl text-white"
          >
            <HiOutlineDownload size={22} />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProfileAside;
