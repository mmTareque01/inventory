import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiProductHuntLine } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import menu from "../../data/sidebar";
import { NavLink, useNavigate } from "react-router-dom";
import SidebarItem from "./SidebarItem";



const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="flex">
      <div 
        className={`fixed top-0 left-0 h-screen bg-white overflow-auto transition-all duration-500 ${isOpen ? "w-[230px]" : "w-[60px]"}`}
      >
        <div className="flex items-center px-4 py-5 bg-blue-800 h-[70px] transition-all duration-500">
          {isOpen && (
            <div className="text-white text-3xl cursor-pointer" onClick={goHome}>
              <RiProductHuntLine size={35} />
            </div>
          )}
          <div 
            className={`flex text-white text-2xl cursor-pointer transition-all duration-300 hover:text-primary hover:text-2xl ${isOpen ? "ml-[100px]" : "ml-0"}`}
            onClick={toggle}
          >
            <HiMenuAlt3 />
          </div>
        </div>
        {menu.map((item, index) => (
          <SidebarItem key={index} item={item} isOpen={isOpen} />
        ))}
      </div>

      <main 
        className={`w-full transition-all duration-500 ${isOpen ? "pl-[230px]" : "pl-[60px]"}`}
      >
        {children}
      </main>
    </div>
  );
};

export default Sidebar;