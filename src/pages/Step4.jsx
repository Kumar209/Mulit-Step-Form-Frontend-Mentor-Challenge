/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserDetailsReset } from "../Slices/Step1Slice";
import { UserAddOnsReset } from "../Slices/Step3Slice";
import { UserPlanReset } from "../Slices/Step2Slice";

const Step4 = () => {
  const navigate = useNavigate();

  window.addEventListener('popstate', function(event) {
    navigate("/");
  });


  const PlanData = useSelector((state) => state.PlanCounter);
  const AddOns = useSelector((state) => state.AddOnCounter.addOns);

  const year = PlanData.plan.YearorMonth;
  const [active, setActive] = useState(4);

  //Calculating total
  const planPrice = year
    ? PlanData.plan.Yearprice
    : PlanData.plan.Monthprice;

  let addonPrice = 0;

  if (AddOns.length > 0) {
    addonPrice = AddOns.reduce((accumulator, item) => {
      const priceToAdd = year
        ? item.YearlyPrice
        : item.MonthlyPrice;
      return accumulator + priceToAdd;
    }, 0);
  }

  const total = planPrice + addonPrice;



  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(UserDetailsReset());
    dispatch(UserPlanReset());
    dispatch(UserAddOnsReset());

    navigate("/thank-you");
  };

  return (
    <div className="w-full h-[100vh]  bg-MagnoliaNeutral overflow-x-hidden flex flex-col md:justify-center items-center relative md:static">
      <Sidebar display={"Mobile"} active={active} />

      <div className="flex flex-row bg-white  rounded-xl w-[90%] md:w-[85%] xl:w-[65%] pt-[17.5px] px-4 pb-7 absolute md:static top-[100px] ">
        <Sidebar display={"Desktop"} active={active} />

        <div className="flex flex-col md:mb-[9.5px] w-full md:w-[70%] lg:w-[65%] h-full pl-2 md:pl-[10%]">
          <div className="mt-3 md:mt-9">
            <h1 className="font-Ubuntu font-extrabold text-2xl lg:text-3xl mb-2">
              Finishing up
            </h1>
            <p className="font-Ubuntu  text-[16px] text-CoolGray">
              Double-check everything looks OK before confirming.
            </p>
          </div>

          <form
            id="form-hook"
            className="flex md:h-[425px] flex-col gap-3 mt-5 md:mt-9 md:relative"
            onSubmit={handleSubmit}
          >
            <div className="font-Ubuntu rounded-md bg-MagnoliaNeutral flex flex-col gap-4 pb-3 pt-3 px-5">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col gap-[2px]">
                  <h3 className="font-medium text-[16px]">{PlanData.plan.Plan} {year ?"(Yearly)}" : "(Monthly)"}</h3>
                  <Link
                    to={"/select-plan"}
                    className="font-light text-[14px] underline text-CoolGray hover:text-PurplishBlue"
                  >
                    Change
                  </Link>
                </div>

                <p className="font-bold text-[17px]">
                  {year ? `$${PlanData.plan.Yearprice}/yr` : `$${PlanData.plan.Monthprice}/mo`}
                </p>
              </div>

              {/* AddOns */}
              {AddOns.length > 0 && (
                <div className="flex flex-col font-Ubuntu border-t-2 border-LightGray mt-2 pt-4">
                  {AddOns.map((addItem, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row justify-between items-center mb-3"
                      >
                        <p className="font-medium text-[15px] text-CoolGray">
                          {addItem.name}
                        </p>
                        <span className="font-medium text-[15px] text-MarineBlue">
                          {!year
                            ? `+$${addItem.MonthlyPrice}/mo`
                            : `+$${addItem.YearlyPrice}/yr`}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="flex flex-row justify-between items-center font-Ubuntu px-5 mt-2">
              <p className="font-medium text-CoolGray text-[16px]">
                {!year ? "Total (per month)" : "Total (per year)"}
              </p>
              <span className="font-bold text-PurplishBlue text-[18px]">
                {!year ? `+$${total}/mo` : `+$${total}/yr`}
              </span>
            </div>

            {/* Buttons */}
            <div className="hidden md:flex mt-[70px] justify-between pb-6 md:absolute bottom-0 md:w-full">
              <Link
                to="/add-ons"
                className="w-[130px] h-[50px] pt-[14px] text-start font-Ubuntu font-semibold text-[16px] hover:text-black text-CoolGray"
              >
                Go Back
              </Link>
              <button
                type="submit"
                className="w-[130px] h-[50px]  rounded-md bg-PurplishBlue hover:bg-blue-400 text-WhiteNeutral font-Ubuntu font-semibold text-[16px]"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* For Mobile Mode */}
      <div className="w-full bg-white h-[10vh] flex justify-between pt-3 pr-6 md:hidden absolute bottom-0">
        <Link
          to="/add-ons"
          className="w-[110px] h-[70%] ml-6 pt-[10px] font-Ubuntu font-semibold text-[16px] hover:text-black text-CoolGray"
        >
          Go Back
        </Link>

        <button
          type="submit"
          form="form-hook"
          className="w-[110px] md:w-[130px] h-[70%] md:h-[50px] rounded-md bg-PurplishBlue hover:bg-blue-400 text-WhiteNeutral font-Ubuntu font-semibold text-[16px]"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Step4;
