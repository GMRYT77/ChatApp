import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { MdDarkMode } from "react-icons/md";
import { BsChat } from "react-icons/bs";

import { MdSettings, MdCall, MdGroups } from "react-icons/md";
import RectSVG from "./templates/RectSVG";

const Sidebar = (props) => {
  const [actTogBtn, setActTogBtn] = useState(0);
  useEffect(() => {
    const toggleBtn = document.getElementsByClassName("toggleBtn");
    for (let i = 0; i < toggleBtn.length; i++) {
      toggleBtn[i].addEventListener("click", () => {
        setActTogBtn(i);
      });
    }
  });

  const showRightMenu = () => {
    const info1 = document.getElementById("INFO_BAR_PEOPLE");
    const info2 = document.getElementById("INFO_BAR_PROFILE");
    const info = document.getElementById("INFO_BAR");
    if (info.classList.contains("hidden")) {
      info.classList.toggle("hidden");
      info2.classList.toggle("hidden");
      info1.classList.add("hidden");
    } else if (!info1.classList.contains("hidden")) {
      info2.classList.remove("hidden");
      info1.classList.add("hidden");
    }
  };

  const darkmode = () => {
    const html = document.getElementById("html");

    if (!localStorage.getItem("DM")) {
      localStorage.setItem("DM", "dark");
    } else {
      if (localStorage.getItem("DM") === "dark") {
        localStorage.setItem("DM", "light");
        html.classList.remove("dark");
      } else if (localStorage.getItem("DM") === "light") {
        localStorage.setItem("DM", "dark");
        html.classList.add("dark");
      }
    }
  };

  return (
    <section className="relative w-[7%] h-[100vh] lg:flex flex-col hidden justify-between">
      <div className="relative flex flex-col gap-[.7em] py-3  h-[500px] items-center px-[10%]">
        <div className="relative w-[80%] aspect-square">
          <Image
            src="/favicon.svg"
            layout="fill"
            objectFit="cover"
            alt="logo"
          />
        </div>
        <span className="w-full h-[.6px] bg-b-line"></span>

        <div
          className={`toggleBtn relative w-[60%] aspect-square cursor-pointer flex justify-center items-center text-[130%] mb-2 ${
            actTogBtn === 0 ? "text-white" : "text-[#333]/80"
          }`}
        >
          <BsChat />
          <RectSVG
            w={46}
            h={46}
            fill={actTogBtn === 0 ? "417EF5" : "transparent"}
          />
        </div>
        <div
          className={`toggleBtn relative w-[60%] aspect-square cursor-pointer flex justify-center items-center text-[150%] mb-2 ${
            actTogBtn === 1 ? "text-white" : "text-[#333]/80"
          }`}
        >
          <MdGroups />
          <RectSVG
            w={46}
            h={46}
            fill={actTogBtn === 1 ? "417EF5" : "transparent"}
          />
        </div>
        <div
          className={`toggleBtn relative w-[60%] aspect-square cursor-pointer flex justify-center items-center text-[150%] mb-2 ${
            actTogBtn === 2 ? "text-white" : "text-[#333]/80"
          }`}
        >
          <MdCall />
          <RectSVG
            w={46}
            h={46}
            fill={actTogBtn === 2 ? "417EF5" : "transparent"}
          />
        </div>
        <span className="w-full h-[.6px] bg-b-line"></span>

        <div
          className={`toggleBtn relative w-[60%] aspect-square cursor-pointer flex justify-center items-center text-[150%] mb-2 ${
            actTogBtn === 3 ? "text-white" : "text-[#333]/80"
          }`}
        >
          <MdSettings />
          <RectSVG
            w={46}
            h={46}
            fill={actTogBtn === 3 ? "417EF5" : "transparent"}
          />
        </div>
      </div>
      <div className="relative flex flex-col pb-5  h-fit  items-center px-[10%]">
        <span className="relativew-full h-[.6px] bg-b-line"></span>

        <button
          onClick={darkmode}
          className="relative text-[180%] text-center mb-4 mt-3 cursor-pointer text-[#333]/80"
        >
          <MdDarkMode />
        </button>
        <button
          onClick={showRightMenu}
          className="relative w-[60%] aspect-square rounded-full overflow-hidden"
        >
          <Image src={props.photoUrl} layout="fill" objectFit="cover" alt="" />
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
