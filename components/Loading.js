import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <section
      id="loadsc"
      className=" fixed w-[100vw] h-[100vh] bg-[#f6f6f6] z-[9999] flex justify-center items-center"
    >
      <div className="relative flex flex-col gap-10 items-center min-w-[80vw] max-w-[500px]">
        <div className="w-[20vw] relative aspect-square max-w-[80px] ">
          <Image src="/favicon.svg" layout="fill" objectFit="cover" alt="" />
        </div>
        <div class="loader-line max-w-[500px]"></div>
      </div>
    </section>
  );
};

export default Loading;
