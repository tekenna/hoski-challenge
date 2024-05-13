import React from "react";

const Section2 = () => {
  return (
    <div className="flex  justify-center px-[16px] sm:py-[80px] py-[20px]">
      <div className="max-w-[830px] w-full flex flex-col gap-[24px] items-center">
        <span className="md:text-[40px] sm:text-[36px] text-[27px] text-center font-[500] capitalize">
          Your perfect lawn is{" "}
          <span className="text-[var(--secondary)]">awaiting for you</span>
        </span>
        <span className="text-center sm:leading-[32px] leading-[27px] md:text-[24px] sm:text-[16px] text-[14px] font-[400]">
          With RC Stone Inc., you'll find tailored solutions for all your
          outdoor needs, whether it's ensuring your commercial property remains
          accessible during winter, creating the pool of your dreams, or
          enhancing the appeal of your outdoor space through landscaping and
          hardscaping. We have the expertise and dedication to exceed your
          expectations.
        </span>
        <span className="text-center sm:leading-[32px] leading-[27px] md:text-[24px] sm:text-[16px] text-[14px] font-[400]">
          We invite you to explore our portfolio, read our client testimonials,
          and get inspired by our past projects. At RC Stone Inc., we believe
          that every landscape has a story to tell, and we're here to help you
          write yours. Let's embark on a journey to transform your outdoor space
          into a masterpiece that reflects your unique style and personality.
        </span>
      </div>
    </div>
  );
};

export default Section2;
