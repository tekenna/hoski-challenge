import { useState } from "react";
import Footer from "../common/components/Footer";
import Header from "../common/components/Header";
import Dropdown from "../common/utilities/Dropdown";
import logo from "../assets/images/logo1.svg";

const Challenge2 = () => {
  const [dropdown, setDropdown] = useState("");
  return (
    <div className="w-full h-full min-h-screen bg-[var(--app-bg)]  ">
      <Header />

      <div className="mt-[56px] min-h-[calc(100vh-469px)] px-[16px] w-full flex justify-center">
        <div className="max-w-[1280px] w-full flex flex-col gap-[24px]">
          <span className="text-[32px]">Challenge2</span>
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[12px]">
              <span>Default</span>
              <Dropdown
                label={"Dropdown"}
                value={dropdown}
                handleChange={(e) => setDropdown(e.title)}
                options={[
                  { title: "dropdown1" },
                  { title: "dropdown2" },
                  { title: "dropdown3" },
                ]}
                className={""}
                style={{}}
              />
            </div>
            <div className="flex flex-col gap-[12px]">
              <span>specified style and color</span>
              <Dropdown
                label={"Dropdown"}
                value={dropdown}
                handleChange={(e) => setDropdown(e.title)}
                options={[
                  { title: "dropdown1" },
                  { title: "dropdown2" },
                  { title: "dropdown3" },
                ]}
                width={"303px"}
                className={""}
                style={{}}
              />
            </div>
            <div className="flex flex-col gap-[12px]">
              <span>specified width</span>
              <Dropdown
                label={"Dropdown"}
                value={dropdown}
                handleChange={(e) => setDropdown(e.title)}
                options={[
                  { title: "dropdown1" },
                  { title: "dropdown2" },
                  { title: "dropdown3" },
                ]}
                width={"303px"}
                className={""}
                style={{ background: "blue", color: "#fff" }}
                color={"#fff"}
                listStyle={{ background: "green" }}
              />
            </div>
            <div className="flex flex-col gap-[12px]">
              <span>specified style</span>
              <Dropdown
                label={"Dropdown"}
                value={dropdown}
                handleChange={(e) => setDropdown(e.title)}
                options={[
                  { title: "dropdown1" },
                  { title: "dropdown2" },
                  { title: "dropdown3" },
                ]}
                width={"303px"}
                className={""}
                style={{ height: "60px" }}
                listStyle={{ top: "61px" }}
              />
            </div>
            <div className="flex flex-col gap-[12px]">
              <span>Custom Icon</span>
              <Dropdown
                label={"Dropdown"}
                value={dropdown}
                handleChange={(e) => setDropdown(e.title)}
                options={[
                  { title: "dropdown1" },
                  { title: "dropdown2" },
                  { title: "dropdown3" },
                ]}
                width={"303px"}
                className={""}
                icon={<img src={logo} className="w-[20px]" alt="" />}
                style={{ height: "60px" }}
                listStyle={{ top: "61px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Challenge2;
