import { design_data } from "../constants/data";
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
                <h4 className={`text-3xl font-semibold py-3 border-b-2 ${design.designBorderColor} w-fit`}>
                  {design.designInfo.designName}
                </h4>
                <p className="text-base leading-7">{design.designInfo.designDescription}</p>
                <a
                  href={design.designInfo.designLink}
                  className="flex items-center text-[#282828] uppercase text-sm font-semibold tracking-wide group hover:text-gray-500"
                >
                  View design
                  <GoArrowRight className="text-2xl ml-4 ease-in-out duration-500 group-hover:translate-x-2" />
                </a>
              </div>
            </div>
            <div className="md:w-2/3 h-full border">
              <div
                className={`w-full h-full flex items-center justify-center relative overflow-hidden ${design.designBgColor}`}
              >
                <div className="w-full absolute bottom-0 left-32">
                  <img src={design.media.imageSrc} className=" w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DesignCard;
