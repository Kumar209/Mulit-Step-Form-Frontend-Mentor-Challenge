/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import arcadeImg from "../assets/images/icon-arcade.svg";

function Step2() {
  const navigate = useNavigate();
  const [active, setActive] = useState(2);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("Form submitted");

    navigate("/add-ons");
  };
  return (
    <div className="w-full h-[100vh]  bg-MagnoliaNeutral flex flex-col md:justify-center items-center relative md:static">
      <Sidebar display={"Mobile"} active={active} />

      {/* <div className="flex flex-row gap-5 bg-white rounded-xl w-[90%] md:w-[80%] xl:w-[60%] h-[65vh] md:h-[85vh] pt-5 px-4 absolute md:static top-[100px] "> */}
      <div className="flex flex-row bg-white rounded-xl w-[90%] md:w-[85%] xl:w-[65%] pt-5 px-4 pb-8 md:pb-8 absolute md:static top-[100px] ">
        <Sidebar display={"Desktop"} active={active} />

        <div className="flex flex-col w-full md:w-[70%] h-full pl-2 md:pl-[10%]">
          <div className="mt-3 md:mt-5">
            <h1 className="font-Ubuntu font-extrabold text-2xl lg:text-3xl mb-2">
              Select your plan
            </h1>
            <p className="font-Ubuntu  text-[16px] text-CoolGray">
              You have the option of monthly or yearly billing.
            </p>
          </div>

          <form
            id="form-hook"
            className="flex flex-col gap-3 mt-5 md:mt-9"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-row">
              {/* Block 1 */}
              <div className="flex flex-col w-[33%] rounded-sm ">
                <div className="">
                  <img src={arcadeImg} alt="arcade image" />
                </div>

                <h1>Arcade</h1>
                <p>$9/mo</p>
                <p>2 months free</p>
              </div>
              {/* Block 2 */}
              {/* Block 3 */}
            </div>

            <div className="hidden md:flex justify-between mr-16 mt-[60px] pb-6">
              <Link to="/" className="w-[130px] h-[50px] pt-[14px] text-center font-Ubuntu font-semibold text-[16px] hover:text-black text-CoolGray">
                Go Back
              </Link>
              <button
                type="submit"
                className="w-[130px] h-[50px] rounded-md bg-MarineBlue hover:bg-blue-900 text-WhiteNeutral font-Ubuntu font-semibold text-[15px]"
              >
                Next Step
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="w-full bg-white h-[10vh] flex justify-end pt-3 pr-5 md:hidden absolute bottom-0">
        <button
          type="submit"
          form="form-hook"
          className="w-[110px] md:w-[130px] h-[70%] md:h-[50px] rounded-md bg-MarineBlue hover:bg-blue-900 text-WhiteNeutral font-Ubuntu font-semibold text-[15px]"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default Step2;
