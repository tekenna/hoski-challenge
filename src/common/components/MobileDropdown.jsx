import React, { useRef } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { GrMenu } from "react-icons/gr";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
const listVariant = {
  open: { opacity: 1, x: 0, bounce: 0 },
  closed: { opacity: 0, y: "-40px", bounce: 0 },
};

const MobileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  window.addEventListener("click", (e) => {
    if (isOpen && !ref?.current?.contains(e.target)) setIsOpen(false);
  });
  return (
    <div ref={ref} className="md:hidden block">
      <motion.span
        onClick={() => {
          setIsOpen(!isOpen);
          console.log("click");
        }}
      >
        <GrMenu className="md:hidden flex text-[24px] cursor-pointer" />
      </motion.span>

      <motion.div
        className="absolute top-[140px] left-0 right-0 w-full flex flex-col gap-[20px] py-[24px] pb-[40px] bg-[#fff] p-[16px]"
        variants={listVariant}
        animate={isOpen ? "open" : "closed"}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.span
          variants={itemVariants}
          className="text-[16px] font-[500] h-[19px] uppercase cursor-pointer text-[var(--nav-link)] hover:text-[var(--secondary)]"
        >
          Home
        </motion.span>
        <motion.span
          variants={itemVariants}
          className="text-[16px] font-[500] h-[19px] uppercase cursor-pointer text-[var(--nav-link)] hover:text-[var(--secondary)]"
        >
          About Us
        </motion.span>
        <motion.span
          variants={itemVariants}
          className="text-[16px] font-[500] h-[19px] uppercase cursor-pointer text-[var(--nav-link)] hover:text-[var(--secondary)]"
        >
          Services
        </motion.span>
        <motion.span
          variants={itemVariants}
          className="text-[16px] font-[500] h-[19px] uppercase cursor-pointer text-[var(--nav-link)] hover:text-[var(--secondary)]"
        >
          Contact
        </motion.span>
        <motion.span
          variants={itemVariants}
          className="text-[16px] font-[500] h-[19px] uppercase cursor-pointer text-[var(--nav-link)] hover:text-[var(--secondary)]"
        >
          PROJECTS
        </motion.span>
      </motion.div>
    </div>
  );
};

export default MobileDropdown;
