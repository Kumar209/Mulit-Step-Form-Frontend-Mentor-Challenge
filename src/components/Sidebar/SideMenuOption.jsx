// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
function SideMenuOption({ step, Content, active }) {
  return (
    <>
      <div className="w-[60px] md:w-[100%] h-[70p] flex flex-row pt-4 md:px-5 mb-3 md:gap-4 font-Ubuntu">
        <span
          className={`w-[35px] h-[35px] md:w-[40px] md:h-[40px] ${
            active
              ? "bg-LightBlue"
              : "bg-PurplishBlue text-white border-[1.5px] border-white"
          } rounded-[50%]  text-center pt-[4px] md:pt-[6px]`}
        >
          {step}
        </span>
        <div className="hidden md:block">
          <p className="font-bold text-[11px] lg:text-[13px] text-PastelBlue">STEP {step}</p>
          <h1 className="text-white text-[14px] lg:text-[16px] font-bold">{Content}</h1>
        </div>
      </div>
    </>
  );
}

export default SideMenuOption;
