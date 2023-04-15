import React from "react";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

const InputComp = (props) => {
  const showPass = () => {
    const pass = document.getElementById(props.id);
    const OutlineVisibility = document.getElementById("OutlineVisibility");
    const OutlineVisibilityOff = document.getElementById(
      "OutlineVisibilityOff"
    );

    if (pass.type === "password") {
      OutlineVisibility.classList.toggle("hidden");
      OutlineVisibilityOff.classList.toggle("hidden");
      pass.type = "text";
    } else {
      pass.type = "password";
      OutlineVisibility.classList.toggle("hidden");
      OutlineVisibilityOff.classList.toggle("hidden");
    }
  };
  return (
    <>
      <div className="relative w-full h-fit p-[2px] linear-p rounded-[14px] flex flex-col">
        <input
          type={props.type}
          id={props.id}
          className="w-full h-full text-[110%] text-[#828282] font-semibold sarabun tracking-wider rounded-[12px] px-4 py-3 outline-none"
          placeholder={props.placeholder}
          required
        />
        {props.type === "password" ? (
          <span
            onClick={showPass}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-[140%] text-[#333]/40 cursor-pointer"
          >
            <MdOutlineVisibility id="OutlineVisibility" className="hidden" />
            <MdOutlineVisibilityOff id="OutlineVisibilityOff" />
          </span>
        ) : (
          <></>
        )}
      </div>

      <div
        id={props.id + "Check"}
        className="w-full -mt-5 text-red-500 px-2 text-[80%] roboto text-left hidden"
      >
        * {props.errText}
      </div>
    </>
  );
};

export default InputComp;

InputComp.defaultProps = {
  type: "text",
  placeholder: "Need 'placeholder' attr",
  req: true,
  errText: "errText req",
};
