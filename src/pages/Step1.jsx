/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Step1() {
  const navigate = useNavigate();
  const [active, setActive] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // alert("Form submitted");

    navigate("/select-plan");
  };

  return (
    <div className="w-full h-[100vh]  bg-MagnoliaNeutral flex flex-col md:justify-center items-center relative md:static">
      <Sidebar display={"Mobile"} active={active} />

      {/* <div className="flex flex-row gap-5 bg-white rounded-xl w-[90%] md:w-[80%] xl:w-[60%] h-[65vh] md:h-[85vh] pt-5 px-4 absolute md:static top-[100px] "> */}
      <div className="flex flex-row bg-white rounded-xl w-[90%] md:w-[85%] xl:w-[65%] pt-5 px-4 pb-8 md:pb-8 absolute md:static top-[100px] ">
        <Sidebar display={"Desktop"} active={active} />

        <div className="flex flex-col w-full md:w-[70%] h-full pl-2 md:pl-[10%]">
          <div className="mt-3 md:mt-9">
            <h1 className="font-Ubuntu font-extrabold text-2xl lg:text-3xl mb-2">
              Personal info
            </h1>
            <p className="font-Ubuntu  text-[16px] text-CoolGray">
              Please provide your name, email address, and phone number
            </p>
          </div>

          <form
            id="form-hook"
            className="flex flex-col gap-3 mt-5 md:mt-9"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col">
              <div className="flex justify-between pr-[12%]">
                <label
                  htmlFor="name"
                  className="font-Ubuntu text-[13px] md:text-[15px]"
                >
                  Name
                </label>
                {errors.name && (
                  <p className="text-xs font-Ubuntu font-[500] text-StrawberryRed">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <input
                className="w-[90%] md:w-[88%] h-[40px] md:h-[50px] font-semibold rounded-md mb-3 mt-1 border-[1.5px] border-LightGray focus:outline-none focus:ring-2 focus:ring-PurplishBlue focus:border-transparent pl-3 font-Ubuntu text-[13px] md:text-[15px] text-MarineBlue"
                type="text"
                placeholder="e.g. Stephen King"
                {...register("name", {
                  required: "This field is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 charcters",
                  },
                })}
              />
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between pr-[12%]">
                <label
                  htmlFor="email"
                  className="font-Ubuntu text-[13px] md:text-[15px]"
                >
                  Email Adress
                </label>
                {errors.email && (
                  <p className="text-xs font-Ubuntu font-[500] text-StrawberryRed">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <input
                className="w-[90%] md:w-[88%] h-[40px] md:h-[50px] font-semibold rounded-md mb-3 mt-1 border-[1.5px] border-LightGray focus:outline-none focus:ring-2 focus:ring-PurplishBlue focus:border-transparent pl-3 font-Ubuntu text-[13px] md:text-[15px] text-MarineBlue"
                type="email"
                placeholder="e.g. stephenking@lorem.com"
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between pr-[12%]">
                <label
                  htmlFor="phone"
                  className="font-Ubuntu text-[13px] md:text-[15px]"
                >
                  Phone Number
                </label>
                {errors.phone && (
                  <p className="text-xs font-Ubuntu font-[500] text-StrawberryRed">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <input
                className="w-[90%] md:w-[88%] h-[40px] md:h-[50px] font-semibold rounded-md mb-3 mt-1 border-[1.5px] border-LightGray focus:outline-none focus:ring-2 focus:ring-PurplishBlue focus:border-transparent pl-3 font-Ubuntu text-[13px] md:text-[15px] text-MarineBlue"
                type="text"
                placeholder="e.g +1 234 567 890"
                {...register("phone", {
                  required: "This field is required",
                  pattern: {
                    // value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i,
                    
                      // eslint-disable-next-line no-useless-escape
                      value:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i,
                    message: "Should only contain numbers",
                  },
                  maxLength: {
                    value: 10,
                    message: "10 numbers max",
                  },
                })}
              />
            </div>

            <div className="hidden md:flex justify-end mr-16 mt-[60px] pb-6">
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

export default Step1;
