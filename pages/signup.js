import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const signup = () => {
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const nextDiv2 = () => {
    const div1 = document.getElementById("FORM_DIV_1");
    const div2 = document.getElementById("FORM_DIV_2");
    const email = document.getElementById("email");
    const pass = document.getElementById("pass");
    const conpass = document.getElementById("conpass");
    const emailCheck = document.getElementById("emailCheck");
    if (
      validateEmail(email.value) != null &&
      pass.value != null &&
      conpass.value != null
    ) {
      div1.classList.add("hidden");
      div2.classList.remove("hidden");
      emailCheck.classList.add("hidden");
    } else {
      emailCheck.classList.remove("hidden");
    }
  };
  const nextDiv3 = () => {
    const div2 = document.getElementById("FORM_DIV_2");
    const div3 = document.getElementById("FORM_DIV_3");
    div2.classList.add("hidden");
    div3.classList.remove("hidden");
  };

  return (
    <section className="relative w-full h-[100vh] flex justify-between overflow-hidden bg-white">
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Create Account" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="w-[100%] h-full relative hidden md:block">
        <div className="relative w-[100%] h-[100%] ">
          <Image
            src="/Bg-login.svg"
            layout="fill"
            objectFit="cover"
            className=""
            alt="img"
            priority
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
            Sign Up
          </h1>
          <span className="w-full h-[1px] bg-b-line"></span>

          <div className="relative w-full flex items-center justify-between px-3 outfit text-[110%] text-white ">
            <span className="absolute top-1/2 left-3 w-[45%] -translate-y-1/2 h-[4px] bg-b-line "></span>
            <span className="absolute top-1/2 right-3 w-[45%] -translate-y-1/2 h-[4px] bg-b-line "></span>

            <div className="linear-p p-3 rounded-full min-w-[32px] h-[32px] flex items-center justify-center z-10">
              1
            </div>
            <div className="bg-[#c2c2c2] p-3 rounded-full min-w-[32px] h-[32px] flex items-center justify-center z-10">
              2
            </div>
            <div className="bg-[#c2c2c2] p-3 rounded-full min-w-[32px] h-[32px] flex items-center justify-center z-10">
              3
            </div>
          </div>

          <span className="w-full h-[1px] bg-b-line"></span>

          <form
            action="/"
            method="post"
            className="relative flex w-full flex-col gap-3"
          >
            <div
              id="FORM_DIV_1"
              className="relative w-full mx-auto flex flex-col gap-[24px] items-center"
            >
              <div className="w-full h-fit p-[2px] linear-p rounded-[14px] flex flex-col">
                <input
                  type="text"
                  id="email"
                  className="w-full h-full text-[110%] text-[#828282] font-semibold sarabun tracking-wider rounded-[12px] px-4 py-3 outline-none"
                  placeholder="Email"
                  required
                />
              </div>
              <div
                id="emailCheck"
                className="w-full -mt-4 text-red-500 px-3 roboto text-left hidden"
              >
                * Invalid Email
              </div>
              <div className="w-full h-fit p-[2px] linear-p rounded-[14px]">
                <input
                  type="password"
                  id="pass"
                  className="w-full h-full text-[110%] text-[#828282] font-semibold sarabun tracking-wider rounded-[12px] px-4 py-3 outline-none"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="w-full h-fit p-[2px] linear-p rounded-[14px]">
                <input
                  type="password"
                  id="conpass"
                  className="w-full h-full text-[110%] text-[#828282] font-semibold sarabun tracking-wider rounded-[12px] px-4 py-3 outline-none"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <input
                type="button"
                id=""
                name=""
                className="w-full h-full linear-p text-[130%] cursor-pointer text-white font-semibold sarabun tracking-wider rounded-[10px] px-4 py-[10px] outline-none"
                value="Next"
                onClick={nextDiv2}
              />
            </div>

            <div
              id="FORM_DIV_2"
              className="relative top-0 w-full flex flex-col gap-[24px] bg-white h-fit hidden "
            >
              <div className="w-full h-fit p-[2px] linear-p rounded-[14px]">
                <input
                  type="text"
                  className="w-full h-full text-[110%] text-[#828282] font-semibold sarabun tracking-wider rounded-[12px] px-4 py-3 outline-none"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="w-full h-fit p-[2px] linear-p rounded-[14px]">
                <input
                  type="text"
                  className="w-full h-full text-[110%] text-[#828282] font-semibold sarabun tracking-wider rounded-[12px] px-4 py-3 outline-none"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="w-full h-fit p-[2px] linear-p rounded-[14px]">
                <input
                  type="text"
                  className="w-full h-full text-[110%] text-[#828282] font-semibold sarabun tracking-wider rounded-[12px] px-4 py-3 outline-none"
                  placeholder="Phone"
                />
              </div>
              <input
                type="button"
                id=""
                name=""
                className="w-full h-full linear-p text-[130%] cursor-pointer text-white font-semibold sarabun tracking-wider rounded-[10px] px-4 py-[10px] outline-none"
                value="Next"
                onClick={nextDiv3}
              />
            </div>

            <div
              id="FORM_DIV_3"
              className="relative top-0 w-full flex flex-col gap-[24px] bg-white h-fit hidden "
            >
              <div className="w-full h-fit p-[2px] linear-p rounded-[14px]">
                <input
                  type="date"
                  className="w-full h-full text-[110%] text-[#828282] font-semibold sarabun tracking-wider rounded-[12px] px-4 py-3 outline-none"
                  placeholder="Birthday"
                />
              </div>
              <input
                type="submit"
                id=""
                name=""
                className="w-full h-full linear-p text-[130%] cursor-pointer text-white font-semibold sarabun tracking-wider rounded-[10px] px-4 py-[10px] outline-none"
                value="Submit"
              />
            </div>
          </form>

          <span className="w-full h-[1px] bg-b-line"></span>

          {/* <Link

            href="/"
            className="-mt-4 w-full text-right bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-[110%] font-bold text-transparent"
          >
            Forgot Password?
          </Link> */}
          <Link
            href="/"
            className="flex gap-3 w-full px-4 py-3  items-center outfit bg-clip bg-gradient-to-r from-neutral-300 to-neutral-200 text-[110%] rounded-[14px] font-semibold text-[#333]/80"
          >
            <div className="relative w-[26px] h-[26px]">
              <Image
                src="/google-icon.svg"
                layout="fill"
                objectFit="cover"
                alt="google"
              />
            </div>
            Sign up with Google
          </Link>
          <div className="flex gap-3 w-full px-4 py-3 cursor-not-allowed items-center outfit bg-clip bg-gradient-to-r from-blue-700 to-blue-500 text-[110%] rounded-[14px] font-semibold text-[#fff]/80">
            <div className="relative w-[14px] h-[26px]">
              <Image
                src="/facebook-icon.svg"
                layout="fill"
                objectFit="cover"
                alt="fb"
              />
            </div>
            Sign up with facebook
          </div>
          <span className="w-full h-[1px] bg-b-line"></span>
          <h1 className="text-[#333]/70 outfit font-bold text-[140%] tracking-wider w-full">
            Already a User
          </h1>
          <Link
            href="/login"
            className="w-full h-fit p-[3px] linear-p rounded-[14px] -mt-2"
          >
            <div className="text-center w-full h-full   bg-white font-semibold outfit tracking-wider rounded-[11px] px-4 py-[10px] ">
              <span className=" bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600 text-[130%] font-bold text-transparent">
                Login
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default signup;
