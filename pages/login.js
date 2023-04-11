import React from "react";
import Image from "next/image";
import Link from "next/link";

const login = () => {
  return (
    <section className="relative w-full h-[100vh] flex justify-between overflow-hidden">
      <div className="w-[100%] h-full relative hidden md:block">
        <div className="relative w-[100%] h-[100%] ">
          <Image
            src="/Bg-login.svg"
            layout="fill"
            objectFit="cover"
            className=""
          />
          <p className="absolute w-full h-full outfit font-bold tracking-wide flex justify-center items-center text-white xl:text-[300%] lg:text-[240%] md:text-[180%] text-center px-3">
            Welcome to ChatApp
          </p>
        </div>
        {/* <div className="fixed w-[817px] h-[360px] left-0 bottom-0">
            <Image src="/bg-hov-down.svg" layout="fill" objectFit="cover" />
          </div> */}
      </div>
      <div className="relative w-full md:w-fit md:min-w-[500px] overflow-y-auto">
        <div className="relative w-full mx-auto max-w-[400px] flex flex-col gap-[24px] bg-white px-[5%] py-6 items-center">
          <h1 className="text-[#333]/70 outfit font-extrabold text-[200%] tracking-wider w-full">
            Login
          </h1>
          <span className="w-full h-[1px] bg-b-line"></span>

          <div className="w-full h-fit p-[3px] linear-p rounded-[14px]">
            <input
              type="text"
              className="w-full h-full text-[110%] text-[#828282] font-semibold sarabun tracking-wider rounded-[11px] px-4 py-3 outline-none"
              placeholder="Email"
            />
          </div>
          <div className="w-full h-fit p-[3px] linear-p rounded-[14px]">
            <input
              type="text"
              className="w-full h-full text-[110%] text-[#828282] font-semibold sarabun tracking-wider rounded-[11px] px-4 py-3 outline-none"
              placeholder="Password"
            />
          </div>

          <input
            type="button"
            id=""
            name=""
            className="w-full h-full linear-p text-[130%] text-white font-semibold sarabun tracking-wider rounded-[10px] px-4 py-[10px] outline-none"
            value="Login"
          />
          <Link
            href="/"
            className="-mt-4 w-full text-right bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-[110%] font-bold text-transparent"
          >
            Forgot Password?
          </Link>
          <div className="flex gap-3 w-full px-4 py-3  items-center outfit bg-clip bg-gradient-to-r from-neutral-300 to-neutral-200 text-[110%] rounded-[14px] font-semibold text-[#333]/80">
            <div className="relative w-[26px] h-[26px]">
              <Image
                src="/google-icon.svg"
                layout="fill"
                objectFit="cover"
                alt="google"
              />
            </div>
            Sign in with Google
          </div>
          <div className="flex gap-3 w-full px-4 py-3  items-center outfit bg-clip bg-gradient-to-r from-blue-700 to-blue-500 text-[110%] rounded-[14px] font-semibold text-[#fff]/80">
            <div className="relative w-[14px] h-[26px]">
              <Image
                src="/facebook-icon.svg"
                layout="fill"
                objectFit="cover"
                alt="fb"
              />
            </div>
            Sign in with facebook
          </div>
          <span className="w-full h-[1px] bg-b-line"></span>
          <h1 className="text-[#333]/70 outfit font-bold text-[140%] tracking-wider w-full">
            New User
          </h1>
          <Link
            href="/"
            className="w-full h-fit p-[3px] linear-p rounded-[14px] -mt-2"
          >
            <div className="text-center w-full h-full   bg-white font-semibold outfit tracking-wider rounded-[11px] px-4 py-[10px] ">
              <span className=" bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600 text-[130%] font-bold text-transparent">
                Create Accout
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default login;
