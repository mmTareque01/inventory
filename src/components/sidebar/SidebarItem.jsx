import React, { useState } from "react";

import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ item, isOpen }) => {
  const [expandMenu, setExpandMenu] = useState(false);

  const activeLink = ({ isActive }) =>
    isActive
      ? "text-primary bg-gray-100 relative after:content-[''] after:absolute after:w-1 after:h-full after:right-0 after:top-0 after:bg-blue-300"
      : "text-dark";

  const activeSublink = ({ isActive }) =>
    isActive
      ? "text-primary bg-gray-100 relative after:content-[''] after:absolute after:w-1 after:h-full after:right-0 after:top-0 after:bg-blue-300"
      : "text-dark";

  if (item.childrens) {
    return (
      <div className={`${expandMenu ? "open" : ""} border-b-2 border-gray-200`}>
        <div className="flex justify-between items-center p-3 hover:bg-gray-100 transition-all duration-150">
          <span className="flex items-start gap-3 text-xl">
            {item.icon && (
              <div className="flex justify-center items-center w-6 text-2xl">
                {item.icon}
              </div>
            )}
            {isOpen && <div>{item.title}</div>}
          </span>
          <MdKeyboardArrowRight
            size={25}
            className={`cursor-pointer transition-all duration-500 ${
              expandMenu ? "rotate-90" : ""
            }`}
            onClick={() => setExpandMenu(!expandMenu)}
          />
        </div>
        <div
          className={`overflow-hidden transition-all ${
            expandMenu ? "h-auto" : "h-0"
          }`}
        >
          {item.childrens.map((child, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded mt-1 hover:border-blue-200"
            >
              <NavLink to={child.path} className={activeSublink}>
                <div className="flex justify-between items-center p-3 hover:bg-gray-100">
                  <span className="flex items-start gap-3">
                    {child.icon && (
                      <div className="flex justify-center items-center w-6 text-2xl">
                        {child.icon}
                      </div>
                    )}
                    {isOpen && <div>{child.title}</div>}
                  </span>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <NavLink to={item.path} className={activeLink}>
        <div className="border-b-2 border-gray-200">
          <div className="flex justify-between items-center p-3 hover:bg-gray-100">
            <span className="flex items-start gap-3 text-xl">
              {item.icon && (
                <div className="flex justify-center items-center w-6 text-2xl">
                  {item.icon}
                </div>
              )}
              {isOpen && <div>{item.title}</div>}
            </span>
          </div>
        </div>
      </NavLink>
    );
  }
};

export default SidebarItem;
