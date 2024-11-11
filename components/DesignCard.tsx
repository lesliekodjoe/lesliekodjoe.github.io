import React from "react";
import { GoArrowRight } from "react-icons/go";
import { PiCalendarDotsFill } from "react-icons/pi";

const DesignCard = () => {
  return (
    <div className="w-full pt-16 md:px-48">
      <div className="w-full flex flex-col-reverse md:flex-row md:h-[521px] md:items-center md:gap-x-10">
        <div className="md:w-1/3 mt-10 md:mt-0">
          <h4 className="text-[#656565] text-lg font-medium flex items-center">
            <PiCalendarDotsFill className="mr-3" />
            Mar 2024
          </h4>
          <div className="mt-7 flex flex-col gap-y-5">
            <h4 className="text-3xl font-semibold">Mencrud</h4>
            <p className="">
              Lorem ipsum dolor sit amet consectetur. At lectus donec ut at
              vitae imperdiet duis diam mollis.
            </p>
            <a
              href=""
              className="flex items-center text-[#282828] uppercase text-sm font-semibold tracking-wide"
            >
              View design
              <GoArrowRight className="text-2xl ml-4" />
            </a>
          </div>
        </div>
        <div className="md:w-2/3 h-full">
          <div className="w-full h-full bg-red-500">Fill</div>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
