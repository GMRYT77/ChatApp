import Image from "next/image";
import React, { useEffect, useState } from "react";
import { lazy } from "react";
const Infobar = lazy(() => import("./Infobar"));

const ChatArea = () => {
  const [chatHistoryIsPresent, setChatHistoryPresent] = useState(null);

  const showRightMenu = () => {
    const info = document.getElementById("INFO_BAR");

    info.classList.toggle("hidden");
  };
  const showSearchBar = () => {
    const search = document.getElementById("SEARCH_BAR_ID");
    search.classList.toggle("hidden");
  };
  const showProfileImage = () => {
    const dp = document.getElementById("DP_ID");
    dp.classList.remove("hidden");

    const dpBg = document.getElementById("DP_BG");
    dpBg.classList.remove("hidden");
  };

  return (
    <>
      <section className="relative w-[73%] flex lg:text-[1rem] text-[.8rem]">
        <div
          id="CHAT_BAR"
          className="relative w-[100%] flex flex-col justify-between max-h-[100vh]"
        >
          <div className="w-full bg-white px-3 py-2 flex justify-between lg:max-h-[50px] max-h-[40px] drop-shadow">
            <div className="relative flex gap-2 items-center w-full">
              <div
                onClick={showProfileImage}
                className="relative h-[94%] aspect-square rounded-full overflow-hidden cursor-pointer"
              >
                <Image
                  src="/steve.png"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
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
            <div className="relative w-fit flex  text-[80%] gap-1">
              <div className="w-[50px] h-full rounded hover:bg-[#c2c2c2]/40  items-center justify-center md:flex hidden">
                <Image
                  src="/video-icon.svg"
                  width={15}
                  height={15}
                  objectFit="cover"
                  alt=""
                />
              </div>
              <div className="w-[50px] h-full rounded hover:bg-[#c2c2c2]/40  items-center justify-center md:flex hidden">
                <Image
                  src="/phone-icon.svg"
                  width={15}
                  height={15}
                  objectFit="cover"
                  alt=""
                />
              </div>
              <div
                onClick={showSearchBar}
                className="w-[50px] h-full rounded hover:bg-[#c2c2c2]/40 flex items-center justify-center"
              >
                <Image
                  src="/search-icon.svg"
                  width={15}
                  height={15}
                  objectFit="cover"
                  alt=""
                />
              </div>
              <div className="w-[.6px] h-[90%] bg-[#c2c2c2]/80"></div>
              <div
                onClick={showRightMenu}
                className="w-[50px] h-full rounded hover:bg-[#c2c2c2]/40 flex items-center justify-center"
              >
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

          <div className="relative h-full w-full overflow-y-auto  scrolly-d  px-6 py-3 ">
            <div
              id="SEARCH_BAR_ID"
              className="absolute  top-1 right-6 z-20 flex bg-white rounded-md drop-shadow gap-1 items-center hidden"
            >
              <input
                type="text"
                name="searchChat"
                placeholder="Search"
                className="w-[240px] px-3 py-2 roboto text-[80%] text-[#333]/80  outline-none rounded-md"
              />
              <button type="submit">
                <Image
                  src="/search-icon.svg"
                  width={16}
                  height={16}
                  alt=""
                  className="mx-2"
                />
              </button>
            </div>

            {!chatHistoryIsPresent ? (
              <div className="">No Previous Chat History</div>
            ) : (
              <div className="">Chat History is there</div>
            )}
          </div>

          <div className="relative min-h-[56px] h-fit w-full bg-[#c2c2c2]/40 flex justify-between px-3 gap-2 py-2 ">
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

        <Infobar title="Contact Info" />
      </section>

      <div
        id="DP_ID"
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] aspect-square bg-blue-200  max-w-[90vh] rounded-2xl z-[101] transition-transform hidden overflow-hidden"
      >
        <Image src="/steve.png" layout="fill" objectFit="cover" alt="" />
      </div>
    </>
  );
};

export default ChatArea;
