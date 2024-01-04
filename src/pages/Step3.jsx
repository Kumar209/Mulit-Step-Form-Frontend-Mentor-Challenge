/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import checkMark from "../assets/images/icon-checkmark.svg";

const Step3 = () => {
  const navigate = useNavigate();
  const [year, setYear] = useState(false);
  const [active, setActive] = useState(3);

  const [add1, setAdd1] = useState(false);
  const [add2, setAdd2] = useState(false);
  const [add3, setAdd3] = useState(false);

  const AddOns = [
    {
      name: "Online service",
      detail: "Access to multiplayer games",
      MonthlyPrice: "1",
      YearlyPrice: "10",
    },
    {
      name: "Larger storage",
      detail: "Extra 1TB of cloud save",
      MonthlyPrice: "2",
      YearlyPrice: "20",
    },
    {
      name: "Customizable Profile",
      detail: "Custom theme on your profile",
      MonthlyPrice: "2",
      YearlyPrice: "20",
    },
  ];

  const handleSubmit = () => {
    let addOns = [];
    if(add1){
      addOns.push(AddOns[0]);
    }
    if(add2){
      addOns.push(AddOns[1]);
    }
    if(add3){
      addOns.push(AddOns[2]);
    }

    //Yahan pe total calculate karna pade ga

    navigate("/summary");
  };

  return (
    <div className="w-full h-[100vh]  bg-MagnoliaNeutral overflow-x-hidden flex flex-col md:justify-center items-center relative md:static">
      <Sidebar display={"Mobile"} active={active} />

      <div className="flex flex-row bg-white rounded-xl w-[90%] md:w-[85%] xl:w-[65%] pt-[17.5px] px-4 pb-7 absolute md:static top-[100px] ">
        <Sidebar display={"Desktop"} active={active} />

        <div className="flex flex-col md:mb-[9.5px] w-full md:w-[70%] lg:w-[65%] h-full pl-2 md:pl-[10%]">

          <div className="mt-3 md:mt-9">
            <h1 className="font-Ubuntu font-extrabold text-2xl lg:text-3xl mb-2">
              Pick add-ons
            </h1>
            <p className="font-Ubuntu  text-[16px] text-CoolGray">
              Add-ons help enhance your gaming experience.
            </p>
          </div>

          <form
            id="form-hook"
            className="flex flex-col gap-3 mt-5 md:mt-9"
            onSubmit={handleSubmit}
          >
            <div>
              {/* Block 1 */}
              <div
                className={`w-full h-[70px] flex flex-row items-center justify-between px-4 md:px-6 cursor-pointer rounded-lg ${
                  add1
                    ? "border-[2.5px] border-PurplishBlue"
                    : "border-[1.5px] border-LightGray"
                }  hover:border-PurplishBlue mb-5`}
                onClick={() => setAdd1(!add1)}
              >
                <div className="flex flex-row gap-5 items-center">
                  <span
                    className={`w-[20px] h-[20px] flex items-center justify-center rounded-[4px] ${
                      add1
                        ? "bg-PurplishBlue"
                        : "border-[1.5px] border-LightGray"
                    }`}
                  >
                    <img
                      className={`w-[75%] ${!add1 && "hidden"}`}
                      src={checkMark}
                      alt="checkmark"
                    />
                  </span>

                  <div>
                    <h3 className="font-Ubuntu font-medium text-[14px] md:text-[16px] text-MarineBlue">
                      Online service
                    </h3>
                    <p className="font-Ubuntu font-medium text-[11px] md:text-[13px] text-CoolGray">
                      Access to multiplayer games
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-Ubuntu font-medium text-[13px] md:text-[15px] text-PurplishBlue">
                    {!year ? "+1$/mo" : "+10/yr"}
                  </p>
                </div>
              </div>

              {/* Block 2 */}
              <div
                className={`w-full h-[70px] flex flex-row items-center justify-between px-4 md:px-6 cursor-pointer rounded-lg ${
                  add2
                    ? "border-[2.5px] border-PurplishBlue"
                    : "border-[1.5px] border-LightGray"
                } hover:border-PurplishBlue mb-5`}
                onClick={() => setAdd2(!add2)}
              >
                <div className="flex flex-row gap-5 items-center">
                  <span
                    className={`w-[20px] h-[20px] flex items-center justify-center rounded-[4px] ${
                      add2
                        ? "bg-PurplishBlue"
                        : "border-[1.5px] border-LightGray"
                    }`}
                  >
                    <img
                      className={`w-[75%] ${!add2 && "hidden"}`}
                      src={checkMark}
                      alt="checkmark"
                    />
                  </span>

                  <div>
                    <h3 className="font-Ubuntu font-medium text-[14px] md:text-[16px] text-MarineBlue">
                      Large storage
                    </h3>
                    <p className="font-Ubuntu font-medium text-[11px] md:text-[13px] text-CoolGray">
                      Extra 1TB of cloud save
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-Ubuntu font-medium text-[13px] md:text-[15px] text-PurplishBlue">
                    {!year ? "+2$/mo" : "+20/yr"}
                  </p>
                </div>
              </div>

              {/* Block 3 */}
              <div
                className={`w-full h-[70px] flex flex-row items-center justify-between px-4 md:px-6 cursor-pointer rounded-lg ${
                  add3
                    ? "border-[2.5px] border-PurplishBlue"
                    : "border-[1.5px] border-LightGray"
                }  hover:border-PurplishBlue mb-5`}
                onClick={() => setAdd3(!add3)}
              >
                <div className="flex flex-row gap-5 items-center">
                  <span
                    className={`w-[20px] h-[20px] flex items-center justify-center rounded-[4px] ${
                      add3
                        ? "bg-PurplishBlue"
                        : "border-[1.5px] border-LightGray"
                    }`}
                  >
                    <img
                      className={`w-[75%] ${!add3 && "hidden"}`}
                      src={checkMark}
                      alt="checkmark"
                    />
                  </span>

                  <div>
                    <h3 className="font-Ubuntu font-medium text-[14px] md:text-[16px] text-MarineBlue">
                      Customizable Profile
                    </h3>
                    <p className="font-Ubuntu font-medium text-[11px] md:text-[13px] text-CoolGray">
                      Custom theme on your profile
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-Ubuntu font-medium text-[13px] md:text-[15px] text-PurplishBlue">
                    {!year ? "+2$/mo" : "+20/yr"}
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex mt-[70px] justify-between pb-6">
              <Link
                to="/select-plan"
                className="w-[130px] h-[50px] pt-[14px] text-start font-Ubuntu font-semibold text-[16px] hover:text-black text-CoolGray"
              >
                Go Back
              </Link>
              <button
                type="submit"
                className="w-[130px] h-[50px]  rounded-md bg-MarineBlue hover:bg-blue-900 text-WhiteNeutral font-Ubuntu font-semibold text-[15px]"
              >
                Next Step
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* For Mobile Mode */}
      <div className="w-full bg-white h-[10vh] flex justify-between pt-3 pr-6 md:hidden absolute bottom-0">
        <Link
          to="/select-plan"
          className="w-[110px] h-[70%] ml-6 pt-[10px] font-Ubuntu font-semibold text-[16px] hover:text-black text-CoolGray"
        >
          Go Back
        </Link>

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
};

export default Step3;
