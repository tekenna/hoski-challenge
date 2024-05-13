import React from "react";
import Icon from "../utilities/Icon";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-center w-full min-h-[56px] px-[16px]  bg-[var(--secondary)]">
        <div className="w-full h-full min-h-[56px] md:py-[0] py-[16px] flex  md:justify-end justify-between items-center flex-wrap gap-[12px] max-w-[1283px]">
          <span className="flex items-center whitespace-nowrap sm:gap-[12px] gap-[8px] underline cursor-pointer md:text-[16px] sm:text-[14px] text-[12px] font-[400] text-[var(--light)]">
            <Icon name={"send"} className={"md:w-[24px] w-[18px]"} />
            rcstone2@icloud.com
          </span>
          <span className="flex items-center whitespace-nowrap sm:gap-[12px] gap-[8px] underline cursor-pointer md:text-[16px] sm:text-[14px] text-[12px] font-[400] text-[var(--light)]">
            <Icon name={"phone"} className={"md:w-[24px] w-[18px]"} />
            (437) 703-0737
          </span>
          <span className="flex items-center whitespace-nowrap sm:gap-[12px] gap-[8px] underline cursor-pointer md:text-[16px] sm:text-[14px] text-[12px] font-[400] text-[var(--light)]">
            <Icon name={"ig"} className={"md:w-[24px] w-[18px]"} />
            @rcstone2
          </span>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
