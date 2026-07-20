import {
  House,
  Folder,
  BriefcaseBusiness,
  Wrench,
  SquarePen,
} from "lucide-react";
import { useNavigate } from "react-router";

function Navbar() {

  let Navigate = useNavigate();
  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 px-4 md:px-4 lg:px-0">
      <div className="flex items-center gap-8 px-4 md:px-6 lg:px-8 py-3 rounded-2xl bg-[#1C1A19] shadow-lg border border-zinc-800">
        <button onClick={()=>{Navigate('/')}} className="text-white relative home_btn  transition">
          <House size={24} />
          <h6 className="Home text-sm font-medium absolute home_li text-white rounded-3xl bg-[#1C1A19] py-1 px-3 ">
            Home
          </h6>
        </button>

        <button onClick={()=>{Navigate('/Project')}} className="text-white relative home_btn  transition">
          <Folder className="te" size={24} />
          <h6 className="Home text-sm font-medium absolute home_li text-white rounded-3xl bg-[#1C1A19] py-1 px-3 ">
            Projects
          </h6>
        </button>

        <button onClick={()=>{Navigate('/Experiences')}} className="text-white relative home_btn  transition">
          <BriefcaseBusiness className="te" size={24} />

          <h6 className="Home text-sm font-medium absolute home_li text-white rounded-3xl bg-[#1C1A19] py-1 px-3 ">
            Experience
          </h6>
        </button>

        <button onClick={()=>{Navigate('/Tools')}} className="text-white relative home_btn  transition">
          <Wrench className="te" size={24} />

          <h6 className="Home text-sm font-medium absolute home_li text-white rounded-3xl bg-[#1C1A19] py-1 px-3 ">
            Tools
          </h6>
        </button>

        <button onClick={()=>{Navigate('/Thoughts')}} className="text-white relative home_btn  transition">
          <SquarePen className="te" size={24} />

          <h6 className="Home text-sm font-medium absolute home_li text-white rounded-3xl bg-[#1C1A19] py-1 px-3 ">
            Thoughts
          </h6>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
