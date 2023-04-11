import Image from "next/image";
import Link from "next/link";
import React from "react";

import { MdDarkMode } from "react-icons/md";

const Sidebar = () => {
  return (
    <section className="relative w-[7%] h-[100vh] flex flex-col">
      <div className="relative flex flex-col gap-[3%] py-3  h-full items-center px-[10%]">
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
          href="/"
          className="relative w-[60%] aspect-square rounded-full overflow-hidden"
        >
          <Image src="/steve.png" layout="fill" objectFit="cover" alt="" />
        </Link>
      </div>
    </section>
  );
};

export default Sidebar;
