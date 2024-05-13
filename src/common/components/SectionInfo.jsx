import React from "react";

const SectionInfo = ({ data, index }) => {
  return (
    <div
      className={`flex flex-col justify-center gap-[24px] h-full sm:py-[50px] py-[20px] sm:px-[40px] px-[16px] bg-[#ffffff] rounded-[15px] l:min-w-[389px] l:min-h-[488px] `}
    >
      <div className="flex flex-col gap-[8px] l:max-w-[309px]">
        <span
          className={`sm:text-[24px] text-[21px] font-[600] ${
            index === 0 ? "l:max-w-[168px] " : " l:max-w-[230px] "
          }`}
        >
          {data.main.title}
        </span>
        <div className="flex flex-col gap-[24px]">
          <span className="sm:text-[16px] text-[14px] font-[400] leading-[18.63px]">
            {data?.main?.desc}
          </span>
          {data?.main?.italic && (
            <span className="sm:text-[16px] text-[14px] font-[400] leading-[18.63px] italic ">
              {data?.main?.italic}
            </span>
          )}
        </div>
      </div>
      {data?.sub?.map((sub, n) => (
        <div
          key={n}
          className="flex flex-col min-h-[100px] justify-between max-w-[309px]"
        >
          <span className="sm:text-[20px] text-[18px] font-[600] ">{sub.title}</span>
          <span className="sm:text-[16px] text-[14px] font-[400] leading-[18.63px]">
            {sub.desc}
          </span>
        </div>
      ))}
      <span
        className={`h-[50px] w-fit text-[var(--light)] sm:text-[16px] text-[14px] font-[500] cursor-pointer uppercase px-[40px] flex items-center justify-center rounded-[300px] bg-[var(--secondary)] ${
          !data?.sub && "mt-[24px]"
        }`}
      >
        {data.button}
      </span>
    </div>
  );
};

export default SectionInfo;
