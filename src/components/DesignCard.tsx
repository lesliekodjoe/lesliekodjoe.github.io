import { design_data } from "../constants/data";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { PiCalendarDotsFill } from "react-icons/pi";

const DesignCard = () => {
  return (
    <>
      {design_data.map((design) => (
        <div key={design.num} className="w-full pt-16 md:px-48" id="design">
          <div className="w-full flex flex-col-reverse md:flex-row md:h-[521px] md:items-center md:gap-x-10">
            <div className="md:w-1/3 mt-10 md:mt-0">
              <h4 className="text-[#656565] text-lg font-medium flex items-center">
                <PiCalendarDotsFill className="mr-3" />
                {design.designInfo.designDate}
              </h4>
              <div className="mt-7 flex flex-col gap-y-5">
                <h4 className="text-3xl font-semibold">
                  {design.designInfo.designName}
                </h4>
                <p className="">{design.designInfo.designDescription}</p>
                <a
                  href={design.designInfo.designLink}
                  className="flex items-center text-[#282828] uppercase text-sm font-semibold tracking-wide group hover:text-gray-500"
                >
                  View design
                  <GoArrowRight className="text-2xl ml-4 ease-in-out duration-500 group-hover:translate-x-2" />
                </a>
              </div>
            </div>
            <div className="md:w-2/3 h-full">
              <div className={`w-full h-full ${design.designBgColor}`}>
                Fill
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DesignCard;
