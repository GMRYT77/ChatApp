import Image from "next/image";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BiRightArrowAlt, BiBlock } from "react-icons/bi";
import { AiOutlineStar, AiOutlineDown } from "react-icons/ai";
import {
  MdNotifications,
  MdNotificationsOff,
  MdDelete,
  MdEdit,
} from "react-icons/md";

const Infobar = (props) => {
  const [muted, setMuted] = useState(false);
  const [profileDesc, setProfileDesc] = useState("No Descriptions Yet ...");

  console.log(props.user.displayName);

  const desp =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea cumque facere veniam officiis voluptates sunt, quisquam commodi ducimus aliquam. Sint.";
  const showDespCompletely = () => {
    const d = document.getElementById("DESP_ID");
    d.innerText = desp;
  };
  const muteToggle = () => {
    if (muted === true) {
      setMuted(false);
    } else {
      setMuted(true);
    }
  };
  const closeInfoBar = () => {
    const info = document.getElementById("INFO_BAR");
    const info2 = document.getElementById("INFO_BAR_PROFILE");
    info2.classList.add("hidden");
    info.classList.add("hidden");
  };
  const copy = () => {
    const phone = document.getElementById("PHONE_ID");

    navigator.clipboard.writeText(phone.innerText);

    // Alert the copied text
    alert("Copied the text: " + phone.innerText);
  };

  const changeDesc = () => {
    const spanD = document.getElementById("PROFILE_DESC");
    const editBtn = document.getElementById("DESC_EDIT_BTN");
    const saveBtn = document.getElementById("DESC_SAVE_BTN");
    const textarea = document.getElementById("DESC_TEXTAREA");
    spanD.classList.add("hidden");
    editBtn.classList.add("hidden");
    saveBtn.classList.remove("hidden");
    textarea.classList.remove("hidden");
  };
  const saveChangeDesc = () => {
    const spanD = document.getElementById("PROFILE_DESC");
    const textarea = document.getElementById("DESC_TEXTAREA");
    const editBtn = document.getElementById("DESC_EDIT_BTN");
    const saveBtn = document.getElementById("DESC_SAVE_BTN");
    editBtn.classList.remove("hidden");
    saveBtn.classList.add("hidden");
    if (textarea.value.length > 0) {
      setProfileDesc(textarea.value);
    } else if (textarea.value.match(/\n/g) || textarea.value.length === 0) {
      setProfileDesc("No Description Buddy !");
    }
    spanD.classList.remove("hidden");
    textarea.classList.add("hidden");
  };

  return (
    <section id="INFO_BAR" className="relative w-[40%] max-h-[100vh] hidden">
      {/* INFO ABOUT CHAT PERSON */}
      <div
        id="INFO_BAR_PEOPLE"
        className="absolute top-0 left-0 w-full h-full bg-[#f9f9f9] max-h-[100vh] overflow-y-auto scrolly flex flex-col lg:text-[1rem] md:text-[.8rem] text-[.7rem] max-w-[340px] gap-2 hidden"
      >
        <div className="sticky top-0 w-full flex justify-between lg:min-h-[50px] min-h-[40px] drop-shadow bg-white items-center px-3 outfit font-semibold text-[#333]/80 tracking-wider z-30">
          <h3 className="text-[95%]">{props.title}</h3>
          <button
            onClick={closeInfoBar}
            className="hover:bg-[#c2c2c2]/30 p-2 rounded-md text-[120%]"
          >
            <RxCross1 />
          </button>
        </div>

        <div className="relative flex px-3 min-h-[60px] lg:min-h-[80px] items-center gap-3 lg:text-[110%]">
          <div className="h-[70%] relative aspect-square overflow-hidden rounded-full ">
            <Image src="/steve.png" layout="fill" objectFit="cover" alt="" />
          </div>
          <div className="relative flex flex-col text-[#333]/80">
            <span className="roboto text-[100%]">Steve Jobs</span>
            <span
              id="PHONE_ID"
              onClick={copy}
              className="relative w-fit outfit text-[80%] hover:after:block cursor-pointer  after:hidden after:content-['Copy'] after:text-[90%] after:absolute after:top-full after:right-0 after:bg-[#c3c3c3]/50 after:px-2 after:rounded-md  after:py-[.1rem]"
            >
              +91 820383293
            </span>
          </div>
        </div>

        <div className="flex justify-evenly min-h-[34px]">
          <div className="w-[50px] h-full rounded hover:bg-[#c2c2c2]/40  items-center justify-center md:flex hidden">
            <Image
              src="/video-icon.svg"
              width={18}
              height={18}
              objectFit="cover"
              alt=""
            />
          </div>
          <div className="w-[50px] h-full rounded hover:bg-[#c2c2c2]/40  items-center justify-center md:flex hidden">
            <Image
              src="/phone-icon.svg"
              width={18}
              height={18}
              objectFit="cover"
              alt=""
            />
          </div>
        </div>

        <span className="w-[90%] mx-auto h-[1px] bg-b-line"></span>

        <div className="flex flex-col px-3 my-1 text-[80%] lg:text-[100%]">
          <h5 className="text-[105%] text-[#252525] roboto mb-1">
            Description
          </h5>
          <p
            id="DESP_ID"
            onClick={showDespCompletely}
            className="text-[90%] text-[#333]/80 outfit cursor-pointer"
          >
            {desp.length > 80 ? desp.slice(0, 80) + " ..." : desp}
          </p>
        </div>

        <span className="w-[90%] mx-auto h-[1px] bg-b-line"></span>

        <div className="flex flex-col gap-1 w-[90%] mx-auto my-1">
          <div className="flex justify-between text-[80%] lg:text-[100%]">
            <h5 className="text-[105%] text-[#252525] roboto mb-1 ">Media</h5>
            <button className="flex gap-1 items-center text-[#417EF5] outfit font-bold">
              104 <BiRightArrowAlt className="text-[105%]" />
            </button>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 relative justify-between gap-2">
            <div className="relative w-full h-[60px] bg-green-400">
              <Image
                src="/image/img2.jpg"
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
            <div className="relative w-full h-[60px] bg-green-400">
              <Image
                src="/image/img3.jpg"
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
            <div className="relative w-full h-[60px] bg-green-400">
              <Image
                src="/image/img4.jpg"
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
            <div className="relative w-full h-[60px] bg-green-400">
              <Image
                src="/image/img5.jpg"
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
          </div>
        </div>

        <span className="w-[90%] mx-auto h-[1px] bg-b-line"></span>

        <button className="flex justify-between min-h-[40px] px-4 items-center outline-none text-[80%]  lg:text-[100%] hover:text-[#417EF5] ">
          <div className="flex items-center gap-2 outfit  text-[110%]">
            <AiOutlineStar /> Starred Messages
          </div>
          <div className="">
            <AiOutlineDown />
          </div>
        </button>

        <span className="w-[90%] mx-auto h-[1px] bg-b-line"></span>

        <button className="flex justify-between min-h-[40px] px-4 items-center outline-none text-[80%] lg:text-[100%] hover:text-[#417EF5] ">
          {muted === true ? (
            <div
              onClick={muteToggle}
              className="flex items-center gap-2 outfit  text-[110%]"
            >
              <MdNotificationsOff /> Unmute Notification
            </div>
          ) : (
            <div
              onClick={muteToggle}
              className="flex items-center gap-2 outfit  text-[110%]"
            >
              <MdNotifications /> Mute Notification
            </div>
          )}
        </button>

        <span className="w-[90%] mx-auto h-[1px] bg-b-line"></span>

        <div className="sticky bottom-0 flex w-[90%] lg:gap-4 gap-2 mx-auto pt-3 pb-5 text-[85%] lg:text-[110%] bg-white drop-shadow">
          <button className="w-[50%] py-1 lg:py-[2px] border-2 border-blue-500 rounded-lg flex justify-evenly items-center outfit tracking-wider font-semibold text-blue-500">
            <BiBlock className="text-[115%]" /> Block
          </button>
          <button className="w-[50%] py-1 lg:py-[2px] border-2 border-red-500 rounded-lg flex justify-evenly items-center outfit tracking-wider font-semibold text-red-500">
            <MdDelete className="text-[115%]" /> Delete
          </button>
        </div>
      </div>
      {/* PROFILE INFO  */}
      <div
        id="INFO_BAR_PROFILE"
        className="absolute top-0 left-0 w-full h-full bg-[#f9f9f9] max-h-[100vh] overflow-y-auto scrolly flex flex-col lg:text-[1rem] md:text-[.8rem] text-[.7rem] max-w-[340px] gap-2 hidden"
      >
        <div className="sticky top-0 w-full flex justify-between lg:min-h-[50px] min-h-[40px] drop-shadow bg-white items-center px-3 outfit font-semibold text-[#333]/80 tracking-wider z-30">
          <h3 className="text-[95%]">Profile</h3>
          <button
            onClick={closeInfoBar}
            className="hover:bg-[#c2c2c2]/30 p-2 rounded-md text-[120%]"
          >
            <RxCross1 />
          </button>
        </div>

        <div className="relative flex flex-col px-3 items-center gap-3 lg:text-[110%]">
          <div className="w-[30%] relative aspect-square overflow-hidden rounded-full ">
            <Image
              src={props.user.photoURL}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
          <div className="relative flex flex-col text-[#333]/80 text-center">
            <span className="roboto text-[110%]">{props.user.displayName}</span>
            <span
              id="PHONE_ID"
              onClick={copy}
              className="relative w-fit outfit text-[80%] hover:after:blockss mr-1 cursor-pointer  after:hidden after:content-['Copy'] after:text-[90%] after:absolute after:top-full after:right-0 after:bg-[#c3c3c3]/50 after:px-2 after:rounded-md  after:py-[.1rem]"
            >
              {!props.user.phoneNumber ? "" : props.user.phoneNumber}
            </span>
          </div>
        </div>

        <span className="w-[90%] mx-auto h-[1px] bg-b-line"></span>

        <div className="relative flex flex-col px-3 my-1 text-[80%] lg:text-[100%]">
          <h5 className="text-[105%] text-[#252525] roboto mb-1">
            Description
          </h5>
          <button
            id="DESC_EDIT_BTN"
            onClick={changeDesc}
            className="absolute flex items-center  gap-1 top-0 right-4 roboto text-[80%] text-[#333]/60 hover-underline "
          >
            <MdEdit /> Edit
          </button>
          <button
            id="DESC_SAVE_BTN"
            onClick={saveChangeDesc}
            className="absolute px-2 pt-[.15rem] pb-[.1rem] rounded bg-blue-400 hidden gap-1 top-0 right-4 roboto text-[80%] text-white hover-underline "
          >
            Save
          </button>
          <span
            type="textarea"
            id="PROFILE_DESC"
            className="text-[90%] text-[#333]/80 outfit p-1"
          >
            {profileDesc}
          </span>
          <textarea
            name="descarea"
            id="DESC_TEXTAREA"
            cols="20"
            rows="5"
            className="hidden roboto text-[90%] text-[#333]/80 outfit outline-none focus:boder-[1px] border-blue-500 rounded-md bg-[#c2c2c2]/20 resize-none p-1"
          >
            {profileDesc}
          </textarea>
        </div>

        <span className="w-[90%] mx-auto h-[1px] bg-b-line"></span>

        <div className="absolute  bottom-0 flex w-[90%] lg:gap-4 gap-2 mx-4 pt-3 pb-5 text-[85%] lg:text-[110%] bg-white drop-shadow">
          <button
            onClick={props.so}
            className="w-full py-1 lg:py-[2px] border-2 border-red-500 rounded-lg flex justify-evenly items-center outfit tracking-wider font-semibold text-red-500"
          >
            Log Out
          </button>
        </div>
      </div>
    </section>
  );
};

export default Infobar;
