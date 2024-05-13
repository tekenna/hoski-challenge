import React from "react";
import Icon from "../utilities/Icon";

const PageTitle = () => {
  return (
    <div className="w-full h-[98px] flex justify-center px-[16px]">
      <div className="max-w-[1283px] w-full h-full flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <span className="flex items-center gap-[16px] text-[16px] font-[400] text-[var(--route-link)]">
            <Icon
              name={"chevron-left"}
              className={"md:w-[24px] md:h-[20px] w-[20px] h-[17px]"}
            />
            Return
          </span>
          <span className=" text-[16px] font-[400] text-[var(--route)]">
            Home / Services
          </span>
        </div>
        <span className="md:text-[32px] text-[27px] font-[500]">Services </span>
      </div>
    </div>
  );
};

export default PageTitle;
