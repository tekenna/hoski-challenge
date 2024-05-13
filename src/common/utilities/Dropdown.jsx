import React, { useRef, useState } from "react";

import { FaChevronDown } from "react-icons/fa";

const Dropdown = ({
  label,
  value,
  handleChange,
  options,
  className,
  border,
  style,
  icon,
  changeDefault,
  disabled,
  color,
  listStyle,
  width,
}) => {
  const [open, setOpen] = useState(false);
  const selectRef = useRef();
  const toggle = () => {
    setOpen(!open);
  };


  window.addEventListener("click", (e) => {
    if (open && !selectRef?.current?.contains(e.target)) setOpen(false);
  });

  return (
    <div
      ref={selectRef}
      style={{ maxWidth: width ? width : "100%" }}
      className={`relative h-fit ${className}`}
    >
      <div
        onClick={() => !changeDefault && toggle()}
        className={`flex items-center justify-between gap-[8px] relative w-full rounded-[8px] h-[40px] px-[12px] transition-all ease-in-out duration-200 shadow-sm border ${
          border ? border : "border-[#D0D5DD]"
        } focus:ring-1 focus:ring-inset text-[16px] text-[#111] `}
        style={style ? style : {}}
      >
        {value === "" ? (
          label
        ) : (
          <span
            style={{ color: color ? color : "#111" }}
            className=" h-full flex items-center "
          >
            {value}
          </span>
        )}

        <span onClick={toggle}>
          {icon ? (
            icon
          ) : (
            <FaChevronDown
              className={`${
                disabled ? " cursor-not-allowed" : "cursor-pointer "
              } transition-all ease-in-out duration-200 ${
                open ? "-rotate-90" : "rotate-0"
              }`}
            />
          )}
        </span>
      </div>

      {open && !disabled && (
        <div
          style={listStyle ? listStyle : {}}
          className="absolute top-[40.1px] max-h-[50vh] h-fit overflow-auto rounded-b-[8px] py-[10px] w-full flex flex-col bg-[#fff] z-[1111] shadow-md"
        >
          {options?.map((option, n) => (
            <span
              style={{ color: color ? color : "#111" }}
              className="h-[40px] text-[14px] px-[12px]  flex  items-center cursor-pointer hover:bg-[rgba(234,236,240,0.50)] transition-all ease-in-out duration-200"
              onClick={() => {
                handleChange(option);
                setOpen(false);
              }}
              key={n}
            >
              {option.title}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
