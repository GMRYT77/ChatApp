import Image from "next/image";
import Link from "next/link";
import React from "react";

import { MdDarkMode } from "react-icons/md";

const Sidebar = (props) => {
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

        <div className="relative w-[60%] aspect-square cursor-pointer">
          <Image src="/chat.svg" layout="fill" objectFit="cover" alt="logo" />
        </div>
        <div className="relative w-[60%] aspect-square cursor-pointer">
          <Image src="/group.svg" layout="fill" objectFit="cover" alt="logo" />
        </div>
        <div className="relative w-[60%] aspect-square cursor-pointer">
          <Image src="/call.svg" layout="fill" objectFit="cover" alt="logo" />
        </div>
        <span className="w-full h-[.6px] bg-b-line"></span>

        <div className="relative w-[60%] aspect-square cursor-pointer">
          <Image
            src="/settings.svg"
            layout="fill"
            objectFit="cover"
            alt="logo"
          />
        </div>
      </div>
      <div className="relative flex flex-col pb-5  h-fit  items-center px-[10%]">
        <span className="relativew-full h-[.6px] bg-b-line"></span>

        <div className="relative text-[180%] text-center mb-4 mt-3 cursor-pointer text-[#333]/80">
          <MdDarkMode />
        </div>
        <Link
          href="/login"
          className="relative w-[60%] aspect-square rounded-full overflow-hidden"
        >
          <Image src={props.photoUrl} layout="fill" objectFit="cover" alt="" />
        </Link>
        <div className="w-[300%] bg-white min-h-[300px] z-[5000] absolute bottom-5 left-[90%] drop-shadow-lg flex flex-col gap-2">
          <button onClick={props.so}>Log Out</button>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
