import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import InputComp from "@/components/InputComp";

const signup = () => {
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  function onlyLettersAndSpaces(str) {
    return /^[A-Za-z\s]*$/.test(str);
  }
  const nextDiv2 = () => {
    const div1 = document.getElementById("FORM_DIV_1");
    const div2 = document.getElementById("FORM_DIV_2");
    const email = document.getElementById("email");
    const pass = document.getElementById("pass");
    const conpass = document.getElementById("conpass");
    const emailCheck = document.getElementById("emailCheck");
    const passCheck = document.getElementById("passCheck");
    const conpassCheck = document.getElementById("conpassCheck");
    const line12 = document.getElementById("line12");
    const cir2 = document.getElementById("cir2");

    if (email.value.length === 0) {
      emailCheck.innerText = "Input a Valid Email";
      emailCheck.classList.remove("hidden");
    } else if (validateEmail(email.value) === null) {
      emailCheck.innerText = "Invalid Email";
      emailCheck.classList.remove("hidden");
    } else if (pass.value.length < 8) {
      passCheck.innerText = "Password should have atleast 8 charecters";
      passCheck.classList.remove("hidden");
      emailCheck.classList.add("hidden");
    } else if (pass.value != conpass.value) {
      conpassCheck.innerText = "Password doesn't match";
      conpassCheck.classList.remove("hidden");
      passCheck.classList.add("hidden");
    } else {
      conpassCheck.classList.add("hidden");
      div1.classList.add("hidden");
      div2.classList.remove("hidden");
      line12.classList.add("left-0");
      line12.classList.remove("-left-full");
      cir2.classList.remove("bg-[#c2c2c2]");
      cir2.classList.add("linear-p");
    }
  };

  const nextDiv3 = () => {
    const div2 = document.getElementById("FORM_DIV_2");
    const div3 = document.getElementById("FORM_DIV_3");
    const name = document.getElementById("name");
    const username = document.getElementById("username");
    const phone = document.getElementById("phone");
    const nameCheck = document.getElementById("nameCheck");
    const usernameCheck = document.getElementById("usernameCheck");
    const phoneCheck = document.getElementById("phoneCheck");
    const line23 = document.getElementById("line23");
    const cir3 = document.getElementById("cir3");

    if (name.value.length === 0) {
      nameCheck.innerText = "Enter Your Name";
      nameCheck.classList.remove("hidden");
    } else if (name.value.length < 3) {
      nameCheck.innerText = "Name should atleast have 3 charecters";
      nameCheck.classList.remove("hidden");
    } else if (onlyLettersAndSpaces(name.value) === false) {
      nameCheck.innerText = "Invalid Name";
      nameCheck.classList.remove("hidden");
    } else if (username.value.length === 0) {
      usernameCheck.innerText = "Enter Your Username";
      usernameCheck.classList.remove("hidden");
      nameCheck.classList.add("hidden");
    } else if (username.value.length < 5) {
      usernameCheck.innerText = "Name should atleast have 5 charecters";
      usernameCheck.classList.remove("hidden");
    } else if (
      phone.value.length != 10 ||
      phone.value.match(/^[0-9]+$/) === null
    ) {
      phoneCheck.innerText = "Invalid Phone Number";
      phoneCheck.classList.remove("hidden");
      usernameCheck.classList.add("hidden");
    } else {
      phoneCheck.classList.add("hidden");
      div2.classList.add("hidden");
      div3.classList.remove("hidden");
      line23.classList.add("left-0");
      line23.classList.remove("-left-full");
      cir3.classList.remove("bg-[#c2c2c2]");
      cir3.classList.add("linear-p");
    }
  };

  const toggleDiv1 = () => {
    const div1 = document.getElementById("FORM_DIV_1");
    const div2 = document.getElementById("FORM_DIV_2");
    const div3 = document.getElementById("FORM_DIV_3");
    div1.classList.add("flex");
    div2.classList.add("hidden");
    div3.classList.add("hidden");
    div1.classList.remove("hidden");
  };
  const toggleDiv2 = () => {
    const div1 = document.getElementById("FORM_DIV_1");
    const div3 = document.getElementById("FORM_DIV_3");
    const div2 = document.getElementById("FORM_DIV_2");
    const cir2 = document.getElementById("cir2");
    if (cir2.classList.contains("linear-p")) {
      div2.classList.add("flex");
      div1.classList.add("hidden");
      div3.classList.add("hidden");
      div2.classList.remove("hidden");
    } else {
      alert("not auth");
    }
  };
  const toggleDiv3 = () => {
    const div1 = document.getElementById("FORM_DIV_1");
    const div3 = document.getElementById("FORM_DIV_3");
    const div2 = document.getElementById("FORM_DIV_2");
    const cir3 = document.getElementById("cir3");
    if (cir3.classList.contains("linear-p")) {
      div3.classList.add("flex");
      div1.classList.add("hidden");
      div2.classList.add("hidden");
      div3.classList.remove("hidden");
    } else {
      alert("not auth");
    }
  };

  const checkPnT = () => {
    const cbP = document.getElementById("checkboxP");
    const cbT = document.getElementById("checkboxT");
    const submitForm = document.getElementById("submitForm");
    if (cbP.checked === true && cbT.checked === true) {
      submitForm.classList.add("linear-p");
      submitForm.classList.remove("bg-neutral-500");
    } else {
      submitForm.classList.remove("linear-p");
      submitForm.classList.add("bg-neutral-500");
    }
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
            <div className="absolute flex top-1/2 left-3 w-[45%] -translate-y-1/2 h-[4px] bg-b-line overflow-hidden">
              <span
                id="line12"
                className="relative w-full h-[4px] linear-p -left-full transition-[1s]"
              ></span>
            </div>
            <div className="absolute flex top-1/2 right-3 w-[45%] -translate-y-1/2 h-[4px] bg-b-line overflow-hidden">
              <span
                id="line23"
                className="relative w-full h-[4px] linear-p -left-full transition-[1s]"
              ></span>
            </div>

            <button
              onClick={toggleDiv1}
              className="linear-p p-3 rounded-full min-w-[32px] h-[32px] flex items-center justify-center z-10"
            >
              1
            </button>
            <button
              onClick={toggleDiv2}
              id="cir2"
              className="bg-[#c2c2c2] p-3 rounded-full min-w-[32px] h-[32px] flex items-center justify-center z-10"
            >
              2
            </button>
            <button
              onClick={toggleDiv3}
              id="cir3"
              className="bg-[#c2c2c2] p-3 rounded-full min-w-[32px] h-[32px] flex items-center justify-center z-10"
            >
              3
            </button>
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
              <InputComp
                type="email"
                id="email"
                placeholder="Email"
                errText="Invalid Email"
              />
              <InputComp
                type="password"
                id="pass"
                placeholder="Password"
                errText="Alteast have 8 char"
              />
              <InputComp
                type="password"
                id="conpass"
                placeholder="Confirm Password"
                errText="Password doesn't Match"
              />

              <input
                type="button"
                id="next1"
                name="next"
                value="Next"
                className="w-full h-full linear-p text-[130%] cursor-pointer text-white font-semibold sarabun tracking-wider rounded-[10px] px-4 py-[10px] outline-none"
                onClick={nextDiv2}
              />
            </div>

            <div
              id="FORM_DIV_2"
              className="relative top-0 w-full flex flex-col gap-[24px] bg-white h-fit  hidden"
            >
              <InputComp
                type="text"
                id="name"
                placeholder="Name"
                errText="Alteast have 3 char"
              />
              <InputComp
                type="text"
                id="username"
                placeholder="Usename"
                errText="Must be Unique"
              />
              <InputComp
                type="phone"
                id="phone"
                placeholder="Phone No"
                errText="Input a valid Phone no."
              />

              <input
                type="button"
                id="next2"
                name="next"
                value="Next"
                className="w-full h-full linear-p text-[130%] cursor-pointer text-white font-semibold sarabun tracking-wider rounded-[10px] px-4 py-[10px] outline-none"
                onClick={nextDiv3}
              />
            </div>

            <div
              id="FORM_DIV_3"
              className="relative top-0 w-full flex flex-col gap-[24px] bg-white h-fit hidden "
            >
              <InputComp
                type="date"
                id="birthday"
                placeholder="Birthday"
                errText="Enter Your Birthday"
              />
              <div className="flex flex-col gap-1 ml-2 -mt-4 roboto float-left max-w-[90%] text-[#333] text-[85%]">
                <div className="flex gap-2  ">
                  <input
                    onClick={checkPnT}
                    type="checkbox"
                    name="chechbox"
                    id="checkboxP"
                    required
                  />
                  <p>
                    Argee with our <span> </span>
                    <Link
                      href="/"
                      className=" bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600 text-transparent hover:underline"
                    >
                      Privacy and Policy
                    </Link>
                  </p>
                </div>
                <div className="flex gap-2   ">
                  <input
                    onClick={checkPnT}
                    type="checkbox"
                    name="chechbox"
                    id="checkboxT"
                    required
                  />
                  <p>
                    Argee with our <span> </span>
                    <Link
                      href="/"
                      className=" bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600 text-transparent hover:underline"
                    >
                      Terms and Conditions
                    </Link>
                  </p>
                </div>
              </div>

              <input
                type="submit"
                id="submitForm"
                name=""
                className="w-full h-full bg-neutral-500 text-[130%] cursor-pointer text-white font-semibold sarabun tracking-wider rounded-[10px] px-4 py-[10px] outline-none"
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
