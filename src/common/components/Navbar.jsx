import React from "react";
import logo from "../../assets/images/logo1.svg";
import MobileDropdown from "./MobileDropdown";

const Navbar = () => {
  return (
    <div className="bg-[#fff] w-full realtive flex justify-center h-[101px] px-[16px]">
      <div className="w-full h-full max-w-[1283px] flex items-center justify-between ">
        <MobileDropdown />
        <div className="md:flex hidden items-center l:gap-[80px] md:gap-[40px] gap-[24px]">
          <span className="text-[16px] font-[500] h-[19px] uppercase cursor-pointer text-[var(--nav-link)] hover:text-[var(--secondary)]">
            Home
          </span>
          <span className="text-[16px] font-[700] h-[19px] uppercase cursor-pointer text-[var(--secondary)] hover:text-[var(--secondary)]">
            About Us
          </span>
          <span className="text-[16px] font-[500] h-[19px] uppercase cursor-pointer text-[var(--nav-link)] hover:text-[var(--secondary)]">
            Services
          </span>
          <span className="text-[16px] font-[500] h-[19px] uppercase cursor-pointer text-[var(--nav-link)] hover:text-[var(--secondary)]">
            Contact
          </span>
          <span className="text-[16px] font-[500] h-[19px] uppercase cursor-pointer text-[var(--nav-link)] hover:text-[var(--secondary)]">
            PROJECTS
          </span>
        </div>
        <img
          className="sm:w-[59px] w-[50px] sm:h-[69px] h-[60px] cursor-pointer"
          src={logo}
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
