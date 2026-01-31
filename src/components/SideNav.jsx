import { CgProfile } from "react-icons/cg"; 
import { ImCamera } from "react-icons/im"; 
import { MdStars } from "react-icons/md"; 
import { BiSave } from "react-icons/bi"; 
import { AiOutlineBell } from "react-icons/ai"; 
import { GoLocation } from "react-icons/go"; 
import { AiOutlineSearch } from "react-icons/ai"; 
import { GrRotateRight } from "react-icons/gr"; 
import { IoNewspaperSharp } from "react-icons/io5"; 
import logo from "../assets/media/logo.png"
import Header from "./Header";

const SideNavLayout = () => {
  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <aside className="w-30 bg-white text-black p-6">
        <img src={logo} alt="" />

        <nav className="space-y-5 ml-5">
          <a href="#" className="block text-black ">
            <IoNewspaperSharp />
          </a>
          <a href="#" className="block text-black ">
            <GrRotateRight />
          </a>
          <a href="#" className="block text-black ">
            <AiOutlineSearch />
          </a>
          <a href="#" className="block text-black ">
            <GoLocation />
          </a>
          <a href="#" className="block text-black ">
           <AiOutlineBell /> 
          </a>
          <a href="#" className="block text-black ">
            <BiSave />
          </a>
          <a href="#" className="block text-black ">
            <MdStars />
          </a>
          <a href="#" className="block text-black ">
            <ImCamera />
          </a>
          <a href="#" className="block text-black ">
            <CgProfile />
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-pink-100 p-8 overflow-auto">
       <Header />
      </main>
    </div>
  );
};

export default SideNavLayout;
