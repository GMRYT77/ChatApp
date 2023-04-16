import React from "react";
import InputComp from "./InputComp";
import Link from "next/link";
import Seo from "./Seo";

const NonLoginPromo = () => {
  return (
    <section className="w-full relative h-[100vh]  flex justify-center items-center linear-p">
      <Seo
        page="Welcome To ChatApp"
        desc="How you have a wonderful experience and also note that your privacy is in our hands. Thank You"
      />
      <div className="w-[85%] relative p-[4px] max-w-[500px] rounded-[14px] z-20 bg-white flex text-white gap-6 backdrop-blur-2xl bg-opacity-20 shadow-[#6b63633f] shadow-md ">
        <div className="flex righteous flex-col w-full py-8 gap-6 items-center rounded-[10px] text-[130%] bg-white backdrop-blur-md bg-opacity-5">
          <h1 className="w-[80%] mb-4 righteous text-[170%] tracking-wide ">
            Chatapp
          </h1>
          <Link
            href="/login"
            className="py-3 w-[80%] bg-white backdrop-blur-2xl bg-opacity-20 rounded-lg drop-shadow  tracking-wider text-center"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="py-3 w-[80%] bg-white backdrop-blur-2xl bg-opacity-20 rounded-lg drop-shadow  tracking-wider text-center"
          >
            Create Account
          </Link>
          <p className="tracking-wider text-[80%] mt-2">
            <strong className="tracking-widest">Note:</strong> We Do Not
            Garentee Your Privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NonLoginPromo;
