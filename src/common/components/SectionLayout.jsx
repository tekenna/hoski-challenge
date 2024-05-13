import React from "react";
import SectionInfo from "./SectionInfo";
import AnimatedView from "./AnimatedView";

const SectionLayout = ({ data, n }) => {
  const getImageHeight = () => {
    return ` l:min-h-[${data.height}] min-h-[400px] `;
  };

  return (
    <AnimatedView>
      <div className="flex w-full justify-center  px-[16px] overflow-hidden ">
        <div
          className={`max-w-[1283px] w-full flex items-center  flex-col  gap-[24px] ${
            data.layout === "right" ? " l:flex-row " : " l:flex-row-reverse "
          } ${getImageHeight()}`}
        >
          <SectionInfo data={data.info} index={n} />
          <div
            className={`w-full h-full border banner-layout rounded-[20px] ${getImageHeight()}`}
            style={{ backgroundImage: `url(${data.banner})` }}
          ></div>
        </div>
      </div>
    </AnimatedView>
  );
};

export default SectionLayout;
