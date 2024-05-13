import React from "react";
import send from "../../assets/icons/send.svg";
import phone from "../../assets/icons/phone.svg";
import ig from "../../assets/icons/ig.svg";
import chevronLeft from "../../assets/icons/chevron-left.svg";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg"

const icons = {
  send: send,
  phone: phone,
  ig: ig,
  "chevron-left": chevronLeft,
  "arrow-left": arrowLeft,
  "arrow-right": arrowRight,
};

const Icon = ({ name, className }) => {
  const getClassName = () => {
    if (className && className.includes("w-")) return className;
    else return `w-[24px] h-[24px]`;
  };
  return <img src={icons[name]} className={getClassName()} alt="" />;
};

export default Icon;
