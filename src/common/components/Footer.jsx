import React from "react";
import logo from "../../assets/images/logo2.svg";
import Icon from "../utilities/Icon";

const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full min-h-[198px] p-[16px] bg-[var(--secondary)] flex items-center justify-center gap-[40px] flex-wrap">
        <div className="max-w-[1280px] w-full flex justify-evenly items-start gap-[40px] flex-wrap md:flex-row flex-col-reverse ">
          <div className="flex justify-between md:w-[50%] w-full">
            <img src={logo} alt="" />
            <div className="flex flex-col md:w-[50%]  gap-[16px]">
              <span className="text-[20px] font-[600] text-[var(--light)] ">
                GET IN TOUCH
              </span>
              <div className="flex flex-col gap-[8px]">
                <span className="flex items-center gap-[12px] underline cursor-pointer text-[16px] font-[400] text-[var(--light)]">
                  <Icon name={"send"} className={"md:w-[24px] w-[18px]"} />
                  rcstone2@icloud.com
                </span>
                <span className="flex items-center gap-[12px] underline cursor-pointer text-[16px] font-[400] text-[var(--light)]">
                  <Icon name={"phone"} className={"md:w-[24px] w-[18px]"} />
                  (437) 703-0737
                </span>
                <span className="flex items-center gap-[12px] underline cursor-pointer text-[16px] font-[400] text-[var(--light)]">
                  <Icon name={"ig"} className={"md:w-[24px] w-[18px]"} />
                  @rcstone2
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[16px]">
            <span className="text-[20px] font-[600] text-[var(--light)] ">
              QUICK LINKS
            </span>
            <div className="flex gap-[40px]">
              <div className="flex flex-col gap-[8px]">
                <span className="flex items-center gap-[12px] cursor-pointer text-[16px] font-[400] text-[var(--light)]">
                  Homepage
                </span>
                <span className="flex items-center gap-[12px] cursor-pointer text-[16px] font-[400] text-[var(--light)]">
                  About Us
                </span>
                <span className="flex items-center gap-[12px] cursor-pointer text-[16px] font-[400] text-[var(--light)]">
                  Services
                </span>
              </div>
              <div className="flex flex-col gap-[8px]">
                <span className="flex items-center gap-[12px] cursor-pointer text-[16px] font-[400] text-[var(--light)]">
                  Contact
                </span>
                <span className="flex items-center gap-[12px] cursor-pointer text-[16px] font-[400] text-[var(--light)]">
                  Projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="h-[58px] w-full text-center flex items-center justify-center text-[16px] font-[400] text-[var(--rare)]">
        © 2023, RC Stone Inc., All Rights Reserved.
      </span>
    </div>
  );
};

export default Footer;
