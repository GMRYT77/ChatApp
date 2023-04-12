import Image from "next/image";
import React, { useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { BiArchiveIn } from "react-icons/bi";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { BsFillCaretDownFill } from "react-icons/bs";
import { MdGroups, MdCall, MdSettings } from "react-icons/md";

import { HiUserGroup } from "react-icons/hi";

const Menubar = () => {
  // useEffect(()=>{
  //   const menu = document.getElementById("MENU_ID");

  //     menu.classList.toggle("lg:min-w-[320px]", "min-w-[240px]");

  // })
  return (
    <section
      id="MENU_ID"
      className="relative w-[20%] lg:min-w-[320px] min-w-[240px] h-[100vh] bg-[#f8f8f8] flex flex-col text-[1rem] lg:text-[1.4rem] drop-shadow-md z-50"
    >
      {/* <div className="absolute top-2 -right-3 z-20 text-[80%] rounded-full bg-white border-[.1px] border-[#a1a1a1]/50 drop-shadow-sm p-1 text-[#828282] cursor-pointer" onClick={collapseMenu}>
        <HiChevronDoubleLeft />
      </div> */}
      <div className="relative lg:hidden flex justify-between min-h-[34px] items-center border-b-[.6px] border-b-[#a1a1a1]/50 px-2">
        <div className="relative  h-[70%] aspect-square rounded-full overflow-hidden">
          <Image src="/steve.png" objectFit="cover" layout="fill" alt="" />
        </div>
        <div className="flex gap-2 text-[#828282] pr-3">
          <MdGroups className="text-[95%]" />
          <MdCall className="text-[85%]" />
          <MdSettings className="text-[85%]" />
        </div>
      </div>

      <h2 className="hidden text-[100%] lg:block w-full px-4 lg:px-2 py-2 outfit font-semibold tracking-wider ">
        Chats
      </h2>

      <div className="relative flex gap-1  my-2 bg-[#EFEDF2] rounded-[6px] items-center px-2 w-[94%] mx-auto ">
        <FiSearch className="text-[80%]" />
        <input
          type="text"
          className="w-full text-[60%] text-[#585858] roboto pt-[.4rem] pb-[.3rem] px-1 outline-none bg-transparent"
          placeholder="Search"
        />
      </div>

      <span className="w-full h-[1px] bg-b-line"></span>

      <div className="flex flex-col overflow-y-auto scrolly src">
        <div className="flex gap-2 text-[80%] items-center roboto text-[#417EF5] px-4 lg:px-2 py-2 my-1">
          <BiArchiveIn />
          <span className="text-[90%]">Archive</span>
        </div>

        <h4 className="w-full text-[57.5%] outfit tracking-wide font-bold text-[#333]/80 px-4 lg:px-2 my-1">
          Pinned
        </h4>

        <div className="relative flex flex-col ">
          <div className="relative w-full flex pr-1 h-fit group overflow-hidden hover:bg-[#cacaca]/30 py-2 cursor-pointer">
            <div className="relative w-[20%] pl-2 flex justify-center items-center">
              <div className="relative w-[70%] lg:w-[80%] aspect-square overflow-hidden rounded-full">
                <Image
                  src="/steve.png"
                  objectFit="cover"
                  layout="fill"
                  alt=""
                />
              </div>
            </div>
            <div className="relative  w-[80%] inline-flex flex-col justify-center text-[#333]">
              <div className="roboto text-[80%] w-full flex justify-between px-1">
                <span>Steve Jobs</span>
                <span className="-tracking-wider text-[70%] pl-[.1rem]">
                  10:27
                </span>
              </div>
              <div className="relative flex px-1 justify-between outfit text-[60%] ">
                <p className="relative text-ellipsis overflow-hidden w-full whitespace-nowrap text-[#828282]">
                  Lorem ipsum, dolor sitadnkanx qdd sg adkandk and sn dnakd iad
                  afs
                </p>
                <div className="w-[30px] lg:w-[36px] text-[#333]/60 flex items-center justify-center hover:bg-[#a1a1a1]/30 translate-x-[50px] group-hover:translate-x-0 transition rounded-xl">
                  <BsFillCaretDownFill className="text-[125%]" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full flex pr-1 h-fit group overflow-hidden hover:bg-[#cacaca]/30 py-2 cursor-pointer">
            <div className="relative w-[20%] pl-2 flex justify-center items-center">
              <div className="relative w-[70%] lg:w-[80%] aspect-square overflow-hidden rounded-full">
                <Image
                  src="/steve.png"
                  objectFit="cover"
                  layout="fill"
                  alt=""
                />
              </div>
            </div>
            <div className="relative  w-[80%] inline-flex flex-col justify-center text-[#333]">
              <div className="roboto text-[80%] w-full flex justify-between px-1">
                <span>Steve Jobs</span>
                <span className="-tracking-wider text-[70%] pl-[.1rem]">
                  10:27
                </span>
              </div>
              <div className="relative flex px-1 justify-between outfit text-[60%] ">
                <p className="relative text-ellipsis overflow-hidden w-full whitespace-nowrap text-[#828282]">
                  Lorem ipsum, dolor sitadnkanx qdd sg adkandk and sn dnakd iad
                  afs
                </p>
                <div className="w-[30px] lg:w-[36px] text-[#333]/60 flex items-center justify-center hover:bg-[#a1a1a1]/30 translate-x-[50px] group-hover:translate-x-0 transition rounded-xl">
                  <BsFillCaretDownFill className="text-[125%]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className="w-full text-[57.5%] outfit tracking-wide font-bold text-[#333]/80 px-4 lg:px-2 my-1">
          All Chats
        </h4>

        <div className="relative flex flex-col ">
          <div className="relative w-full flex pr-1 h-fit group overflow-hidden hover:bg-[#cacaca]/30 py-2 cursor-pointer">
            <div className="relative w-[20%] pl-2 flex justify-center items-center">
              <div className="relative w-[70%] lg:w-[80%] aspect-square overflow-hidden rounded-full">
                <Image
                  src="/steve.png"
                  objectFit="cover"
                  layout="fill"
                  alt=""
                />
              </div>
            </div>
            <div className="relative  w-[80%] inline-flex flex-col justify-center text-[#333]">
              <div className="roboto text-[80%] w-full flex justify-between px-1">
                <span>Steve Jobs</span>
                <span className="-tracking-wider text-[70%] pl-[.1rem]">
                  10:27
                </span>
              </div>
              <div className="relative flex px-1 justify-between outfit text-[60%] ">
                <p className="relative text-ellipsis overflow-hidden w-full whitespace-nowrap text-[#828282]">
                  Lorem ipsum, dolor sitadnkanx qdd sg adkandk and sn dnakd iad
                  afs
                </p>
                <div className="w-[30px] lg:w-[36px] text-[#333]/60 flex items-center justify-center hover:bg-[#a1a1a1]/30 translate-x-[50px] group-hover:translate-x-0 transition rounded-xl">
                  <BsFillCaretDownFill className="text-[125%]" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full flex pr-1 h-fit group overflow-hidden hover:bg-[#cacaca]/30 py-2 cursor-pointer">
            <div className="relative w-[20%] pl-2 flex justify-center items-center">
              <div className="relative w-[70%] lg:w-[80%] aspect-square overflow-hidden rounded-full">
                <Image
                  src="/steve.png"
                  objectFit="cover"
                  layout="fill"
                  alt=""
                />
              </div>
            </div>
            <div className="relative  w-[80%] inline-flex flex-col justify-center text-[#333]">
              <div className="roboto text-[80%] w-full flex justify-between px-1">
                <span>Steve Jobs</span>
                <span className="-tracking-wider text-[70%] pl-[.1rem]">
                  10:27
                </span>
              </div>
              <div className="relative flex px-1 justify-between outfit text-[60%] ">
                <p className="relative text-ellipsis overflow-hidden w-full whitespace-nowrap text-[#828282]">
                  Lorem ipsum, dolor sitadnkanx qdd sg adkandk and sn dnakd iad
                  afs
                </p>
                <div className="w-[30px] lg:w-[36px] text-[#333]/60 flex items-center justify-center hover:bg-[#a1a1a1]/30 translate-x-[50px] group-hover:translate-x-0 transition rounded-xl">
                  <BsFillCaretDownFill className="text-[125%]" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full flex pr-1 h-fit group overflow-hidden hover:bg-[#cacaca]/30 py-2 cursor-pointer">
            <div className="relative w-[20%] pl-2 flex justify-center items-center">
              <div className="relative w-[70%] lg:w-[80%] aspect-square overflow-hidden rounded-full">
                <Image
                  src="/steve.png"
                  objectFit="cover"
                  layout="fill"
                  alt=""
                />
              </div>
            </div>
            <div className="relative  w-[80%] inline-flex flex-col justify-center text-[#333]">
              <div className="roboto text-[80%] w-full flex justify-between px-1">
                <span>Steve Jobs</span>
                <span className="-tracking-wider text-[70%] pl-[.1rem]">
                  10:27
                </span>
              </div>
              <div className="relative flex px-1 justify-between outfit text-[60%] ">
                <p className="relative text-ellipsis overflow-hidden w-full whitespace-nowrap text-[#828282]">
                  Lorem ipsum, dolor sitadnkanx qdd sg adkandk and sn dnakd iad
                  afs
                </p>
                <div className="w-[30px] lg:w-[36px] text-[#333]/60 flex items-center justify-center hover:bg-[#a1a1a1]/30 translate-x-[50px] group-hover:translate-x-0 transition rounded-xl">
                  <BsFillCaretDownFill className="text-[125%]" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full flex pr-1 h-fit group overflow-hidden hover:bg-[#cacaca]/30 py-2 cursor-pointer">
            <div className="relative w-[20%] pl-2 flex justify-center items-center">
              <div className="relative w-[70%] lg:w-[80%] aspect-square overflow-hidden rounded-full">
                <Image
                  src="/steve.png"
                  objectFit="cover"
                  layout="fill"
                  alt=""
                />
              </div>
            </div>
            <div className="relative  w-[80%] inline-flex flex-col justify-center text-[#333]">
              <div className="roboto text-[80%] w-full flex justify-between px-1">
                <span>Steve Jobs</span>
                <span className="-tracking-wider text-[70%] pl-[.1rem]">
                  10:27
                </span>
              </div>
              <div className="relative flex px-1 justify-between outfit text-[60%] ">
                <p className="relative text-ellipsis overflow-hidden w-full whitespace-nowrap text-[#828282]">
                  Lorem ipsum, dolor sitadnkanx qdd sg adkandk and sn dnakd iad
                  afs
                </p>
                <div className="w-[30px] lg:w-[36px] text-[#333]/60 flex items-center justify-center hover:bg-[#a1a1a1]/30 translate-x-[50px] group-hover:translate-x-0 transition rounded-xl">
                  <BsFillCaretDownFill className="text-[125%]" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full flex pr-1 h-fit group overflow-hidden hover:bg-[#cacaca]/30 py-2 cursor-pointer">
            <div className="relative w-[20%] pl-2 flex justify-center items-center">
              <div className="relative w-[70%] lg:w-[80%] aspect-square overflow-hidden rounded-full">
                <Image
                  src="/steve.png"
                  objectFit="cover"
                  layout="fill"
                  alt=""
                />
              </div>
            </div>
            <div className="relative  w-[80%] inline-flex flex-col justify-center text-[#333]">
              <div className="roboto text-[80%] w-full flex justify-between px-1">
                <span>Steve Jobs</span>
                <span className="-tracking-wider text-[70%] pl-[.1rem]">
                  10:27
                </span>
              </div>
              <div className="relative flex px-1 justify-between outfit text-[60%] ">
                <p className="relative text-ellipsis overflow-hidden w-full whitespace-nowrap text-[#828282]">
                  Lorem ipsum, dolor sitadnkanx qdd sg adkandk and sn dnakd iad
                  afs
                </p>
                <div className="w-[30px] lg:w-[36px] text-[#333]/60 flex items-center justify-center hover:bg-[#a1a1a1]/30 translate-x-[50px] group-hover:translate-x-0 transition rounded-xl">
                  <BsFillCaretDownFill className="text-[125%]" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full flex pr-1 h-fit group overflow-hidden hover:bg-[#cacaca]/30 py-2 cursor-pointer">
            <div className="relative w-[20%] pl-2 flex justify-center items-center">
              <div className="relative w-[70%] lg:w-[80%] aspect-square overflow-hidden rounded-full">
                <Image
                  src="/steve.png"
                  objectFit="cover"
                  layout="fill"
                  alt=""
                />
              </div>
            </div>
            <div className="relative  w-[80%] inline-flex flex-col justify-center text-[#333]">
              <div className="roboto text-[80%] w-full flex justify-between px-1">
                <span>Steve Jobs</span>
                <span className="-tracking-wider text-[70%] pl-[.1rem]">
                  10:27
                </span>
              </div>
              <div className="relative flex px-1 justify-between outfit text-[60%] ">
                <p className="relative text-ellipsis overflow-hidden w-full whitespace-nowrap text-[#828282]">
                  Lorem ipsum, dolor sitadnkanx qdd sg adkandk and sn dnakd iad
                  afs
                </p>
                <div className="w-[30px] lg:w-[36px] text-[#333]/60 flex items-center justify-center hover:bg-[#a1a1a1]/30 translate-x-[50px] group-hover:translate-x-0 transition rounded-xl">
                  <BsFillCaretDownFill className="text-[125%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menubar;
