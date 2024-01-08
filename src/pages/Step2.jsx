/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import arcadeImg from "../assets/images/icon-arcade.svg";
import advancedImg from "../assets/images/icon-advanced.svg";
import proImg from "../assets/images/icon-pro.svg";

import { useDispatch } from "react-redux";
import { UserPlan } from "../Slices/Step2Slice";

function Step2() {
  const navigate = useNavigate();

  window.addEventListener('popstate', function(event) {
    navigate("/");
  });

  
  const [active, setActive] = useState(2);
  const [year, setYear] = useState(false);
  const [selected, setSelected] = useState("0");
  const [selectedOne, setSelectedOne] = useState(true);

  const dispatch = useDispatch();


  const PlanSelection = [
    {
      id: "0",
      Plan: "Arcade",
      Monthprice: 9,
      Yearprice: 90,
      YearorMonth: year,
    },
    {
      id: "1",
      Plan: "Advanced",
      Monthprice: 12,
      Yearprice: 120,
      YearorMonth: year,
    },
    {
      id:"2",
      Plan: "Pro",
      Monthprice: 15,
      Yearprice: 1150,
      YearorMonth: year,
    },
  ];

  const handleSelection = (data) => {
    setSelectedOne(false);
    setSelected(data);
  };

  const handleSubmit = () => {
    dispatch(UserPlan(PlanSelection[selected]));

    navigate("/add-ons");
  };
  return (
    <div className="w-full h-[100vh]  bg-MagnoliaNeutral overflow-x-hidden flex flex-col md:justify-center items-center relative md:static">
      <Sidebar display={"Mobile"} active={active} />

      <div className="flex flex-row bg-white rounded-xl h-[70vh] md:h-auto overflow-auto  w-[90%] md:w-[85%] xl:w-[65%] pt-5 px-4 pb-8 absolute md:static top-[100px] ">
        <Sidebar display={"Desktop"} active={active} />

        <div className="flex flex-col w-full md:w-[70%] lg:w-[65%] h-full pl-2 md:pl-[10%]">
          <div className="mt-3 md:mt-9">
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
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col md:flex-row gap-3 md:gap-6">
              {/* Block 1 */}
              <div
                className={`flex flex-row md:flex-col w-[95%] md:w-[160px] rounded-lg ${
                  (selected === "0" && !selectedOne)
                    ? "border-[3px] border-PurplishBlue"
                    : "border-LightGray border-[1.5px]"
                } ${selectedOne && "border-[1.5px] border-PurplishBlue"}  hover:border-PurplishBlue cursor-pointer`}
                onClick={() => handleSelection("0")}
              >
                <div className="md:w-full pt-5 pl-3 md:mb-5">
                  <img src={arcadeImg} alt="arcade image" />
                </div>

                <div className="flex flex-col md:block pt-4 md:pt-0 pl-1 md:pl-1">
                  <h1 className="font-Ubuntu font-medium text-[16px] mb-[1px] md:mb-[3px] pl-3">
                    Arcade
                  </h1>

                  <p
                    className={`font-Ubuntu text-[14px] font-medium ${
                      year ? "mb-[3px]" : "mb-[21px]"
                    } text-CoolGray pl-3`}
                  >
                    {year ? "$90/yr" : "$9/mo"}
                  </p>

                  {year && (
                    <p className="font-Ubuntu text-[13px] font-light mb-[21px] pl-3">
                      2 months free
                    </p>
                  )}
                </div>
              </div>


              {/* Block 2 */}
              <div
                className={`flex flex-row md:flex-col w-[95%] md:w-[160px] rounded-lg ${
                  selected === "1"
                    ? "border-[3px] border-PurplishBlue"
                    : "border-LightGray border-[1.5px]"
                } hover:border-PurplishBlue cursor-pointer`}
                onClick={() => handleSelection("1")}
              >
                <div className="md:w-full pt-5 pl-3 md:mb-5">
                  <img src={advancedImg} alt="arcade image" />
                </div>

                <div className="flex flex-col md:block pt-4 md:pt-0 pl-1 md:pl-1">
                  <h1 className="font-Ubuntu font-medium text-[16px] mb-[1px] md:mb-[3px] pl-3">
                    Advanced
                  </h1>
                  <p
                    className={`font-Ubuntu text-[14px] font-medium ${
                      year ? "mb-[3px]" : "mb-[21px]"
                    } text-CoolGray pl-3`}
                  >
                    {year ? "$120/yr" : "$12/mo"}
                  </p>
                  {year && (
                    <p className="font-Ubuntu text-[13px] font-light mb-[21px] pl-3">
                      2 months free
                    </p>
                  )}
                </div>
              </div>

              {/* Block 3 */}
              <div
                className={`flex flex-row md:flex-col w-[95%] md:w-[160px] rounded-lg ${
                  selected === "2"
                    ? "border-[3px] border-PurplishBlue"
                    : "border-LightGray border-[1.5px]"
                } hover:border-PurplishBlue cursor-pointer`}
                onClick={() => handleSelection("2")}
              >
                <div className="md:w-full pt-5 pl-3 md:mb-5">
                  <img src={proImg} alt="arcade image" />
                </div>

                <div className="flex flex-col md:block pt-4 md:pt-0 pl-1 md:pl-1">
                  <h1 className="font-Ubuntu font-medium text-[16px] mb-[1px] md:mb-[3px] pl-3">
                    Pro
                  </h1>
                  <p
                    className={`font-Ubuntu text-[14px] font-medium ${
                      year ? "mb-[3px]" : "mb-[21px]"
                    } text-CoolGray pl-3`}
                  >
                    {year ? "$150/yr" : "$15/mo"}
                  </p>
                  {year && (
                    <p className="font-Ubuntu text-[13px] font-light mb-[21px] pl-3">
                      2 months free
                    </p>
                  )}
                </div>
              </div>


            </div>

            <div
              className={`mt-5 ${
                year ? "mb-3" : "mb-9"
              } flex flex-row gap-5 justify-center items-center text-center rounded-md w-[95%] md:w-full bg-MagnoliaNeutral h-[60px]`}
            >
              <span
                className={`font-Ubuntu font-medium text-[16px] ${
                  year ? "text-CoolGray" : "text-MarineBlue"
                }`}
              >
                Monthly
              </span>

              <label
                htmlFor="check"
                className="bg-MarineBlue cursor-pointer relative w-10 h-5 rounded-full"
              >
                <input
                  type="checkbox"
                  id="check"
                  className="sr-only peer"
                  onClick={() => setYear(!year)}
                />
                <span className="w-[27%] h-[60%] bg-white absolute rounded-full left-1 top-1 peer-checked:bg-white peer-checked:left-6 transition-all duration-500"></span>
              </label>

              <span
                className={`font-Ubuntu font-medium text-[16px] ${
                  !year ? "text-CoolGray" : "text-MarineBlue"
                }`}
              >
                Yearly
              </span>
            </div>

            <div className="hidden md:flex mt-[70px] justify-between pb-6">
              <Link
                to="/"
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
          to="/"
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
}

export default Step2;
