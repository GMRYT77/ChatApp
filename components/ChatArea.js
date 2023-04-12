import Image from "next/image";
import React, { useEffect } from "react";

const ChatArea = () => {
  useEffect(() => {});
  return (
    <section className="relative w-[73%] flex text-[1rem]">
      <div className="relative w-[100%] flex flex-col justify-between max-h-[100vh]">
        <div className="w-full bg-white px-3 py-2 flex justify-between max-h-[50px] drop-shadow">
          <div className="relative flex gap-2 items-center w-full">
            <div className="relative h-[94%] aspect-square rounded-full overflow-hidden">
              <Image src="/steve.png" layout="fill" objectFit="cover" alt="" />
            </div>
            <div className="flex flex-col  roboto">
              <span className="text-[110%] -mb-1">Steve Jobs</span>
              <div className="flex gap-2 w-fit">
                <div className="w-[10px] h-[10px] rounded-full bg-green-500 m-auto"></div>
                <span className="sarabun text-[85%] text-neutral-500/80 ">
                  Online
                </span>
              </div>
            </div>
          </div>
          <div className="relative w-fit flex  text-[80%]">
            <div className="w-[50px] h-full rounded hover:bg-[#c2c2c2]/40 flex items-center justify-center">
              <Image
                src="/video-icon.svg"
                width={15}
                height={15}
                objectFit="cover"
                alt=""
              />
            </div>
            <div className="w-[50px] h-full rounded hover:bg-[#c2c2c2]/40 flex items-center justify-center">
              <Image
                src="/phone-icon.svg"
                width={15}
                height={15}
                objectFit="cover"
                alt=""
              />
            </div>
            <div className="w-[50px] h-full rounded hover:bg-[#c2c2c2]/40 flex items-center justify-center">
              <Image
                src="/search-icon.svg"
                width={15}
                height={15}
                objectFit="cover"
                alt=""
              />
            </div>
            <div className="w-[.6px] h-[90%] bg-[#c2c2c2]/80"></div>
            <div className="w-[50px] h-full rounded hover:bg-[#c2c2c2]/40 flex items-center justify-center">
              <Image
                src="/down-icon.svg"
                width={12}
                height={12}
                objectFit="cover"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="h-full mb- w-full overflow-y-auto  scrolly-d ">
          <div className="p-10 my-8">jfnkkfnk</div>
          <div className="p-10 my-8">jfnkkfnk</div>
          <div className="p-10 my-8">jfnkkfnk</div>
          <div className="p-10 my-8">jfnkkfnk</div>
          <div className="p-10 my-8">jfnkkfnk</div>
          <div className="p-10 my-8">jfnkkfnk</div>
          <div className="p-10 my-8">jfnkkfnk</div>1
        </div>

        <div className="relative  min-h-[56px] h-fit w-full bg-[#c2c2c2]/40 flex justify-between px-3 gap-2 py-2 ">
          {/* <textarea
            rows={1}
            cols={1}
            name="message"
            id="MSG"
            placeholder="Message ..."
            className="w-full min-h-[60px] rounded-[6px] px-2 roboto text-[105%] outline-none bg-[#f6f6f6]"
          /> */}
          <input
            type="text"
            role="textarea"
            contentEditable
            placeholder="Message ... "
            className="relative textarea w-[86%] block mb-2 min-h-[34px] max-h-[120px] overflow-y-auto scroll-smooth leading-5 bg-[#f3f3f3] outline-none rounded-[6px] px-2 roboto py-1"
          />
          <div className="relative w-[90px] flex  gap-2">
            <div className="w-[40px] h-full max-h-[34px] flex justify-center items-center rounded-[6px] ">
              <Image src="/link-icon.svg" width={20} height={20} alt="" />
            </div>
            <div className="w-[50px] h-full max-h-[34px] flex justify-center items-center rounded-[6px] bg-[#417EF5]">
              <Image src="/send-icon.svg" width={20} height={20} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div id="INFO_BAR" className="relative w-[40%] hidden">
        menu
      </div>
    </section>
  );
};

export default ChatArea;
