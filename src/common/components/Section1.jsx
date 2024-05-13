import React from "react";

const Section1 = () => {
  return (
    <div className="flex md:min-h-[269px] justify-center sm:py-[80px] py-[40px] px-[16px] w-full ">
      <div className="max-w-[1283px] w-full flex flex-col gap-[24px] justify-center h-full ">
        <span className="md:text-[40px] sm:text-[36px] text-[27px] capitalize font-[600]">
          Explore Our Diverse{" "}
          <span className="text-[var(--secondary)] font-[700]">
            {" "}
            Outdoor Services
          </span>
        </span>
        <span className="md:text-[16px] text-[14px] font-[400]">
          At RC Stone Inc., we take pride in offering a spectrum of services
          designed to cater to all your outdoor needs. From innovative
          landscaping to meticulous snow removal, seamless pool installations,
          and expert contracting – our services redefine what's possible for
          your outdoor spaces. Dive into our offerings and let us bring your
          vision to life.
        </span>
      </div>
    </div>
  );
};

export default Section1;
