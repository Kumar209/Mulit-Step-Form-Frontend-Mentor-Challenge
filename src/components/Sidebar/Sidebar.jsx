// eslint-disable-next-line no-unused-vars
import React from "react";
import SideMenuOption from "./SideMenuOption";

// eslint-disable-next-line react/prop-types
function Sidebar({ display, active }) {
  return (
    <div
      className={`${
        display === "Desktop"
          ? "bg-DesktopImg1 hidden md:block w-[28%] bg-no-repeat rounded-xl pt-2 md:mt-[9px]"
          : "bg-MobileImg1 bg-no-repeat bg-cover md:hidden flex flex-row justify-center text-center w-[100vw] h-[25vh]  pt-3 md:mb-[50px]"
      }`}
    >
      {active === 1 ? (
        <SideMenuOption step={1} Content={"YOUR INFO"} active={active} />
      ) : (
        <SideMenuOption step={1} Content={"YOUR INFO"} />
      )}

      {active === 2 ? (
        <SideMenuOption step={2} Content={"SELECT PLAN"} active={active} />
      ) : (
        <SideMenuOption step={2} Content={"SELECT PLAN"} />
      )}

      {active === 3 ? (
        <SideMenuOption step={3} Content={"ADD-ONS"} active={active} />
      ) : (
        <SideMenuOption step={3} Content={"ADD-ONS"} />
      )}

      {active === 4 ? (
        <SideMenuOption step={4} Content={"SUMMARY"} active={active} />
      ) : (
        <SideMenuOption step={4} Content={"SUMMARY"} />
      )}
    </div>
  );
}

export default Sidebar;
