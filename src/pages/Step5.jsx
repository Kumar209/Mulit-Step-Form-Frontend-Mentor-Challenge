/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Img from "../assets/images/icon-thank-you.svg";
import { useNavigate } from "react-router-dom";

const Step4 = () => {
  const [active, setActive] = useState(4);
  const navigate = useNavigate();

  window.addEventListener('popstate', function(event) {
    navigate("https://kumar209.github.io/Multi-Step-Form-Frontend-Mentor-Challenge/");
  });

  return (
    <main role="main" className="w-full h-[100vh]  bg-MagnoliaNeutral overflow-x-hidden flex flex-col md:justify-center items-center relative md:static">
      <Sidebar display={"Mobile"} active={active} />

      <div className="flex flex-row bg-white  rounded-xl w-[90%] md:w-[85%] xl:w-[65%] pt-[17.5px] px-4 pb-7 absolute md:static top-[100px] ">
        <Sidebar display={"Desktop"} active={active} />

        <div className="flex justify-center items-center w-full md:w-[70%] lg:w-[68%] md:ml-5 my-6 md:my-0">
          <div className="flex flex-col justify-center items-center md:my-[27.7%]">
            <img src={Img} alt="thank you svg" className="w-[60px] h-[60px]" />

            <div className="flex flex-col justify-center items-center font-Ubuntu mt-6 px-[10px] lg:px-[90px]">
              <h2 className="font-bold text-[19px] md:text-[22px] text-MarineBlue mb-4">
                Thank you!
              </h2>
              <p className="font-medium text-center text-[15px] md:text-[17px] text-CoolGray">
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default Step4;
