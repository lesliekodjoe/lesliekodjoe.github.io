import React from "react";

const Hero = () => {
  return (
    <div className=" h-screen sticky top-0 z-10 pt-20 pb-36 px-8 lg:pb-32 md:pt-28 border">
      <div className="flex items-end w-full h-full">
        <div className="w-full md:px-24">
          <div>
            <h4 className="text-6xl text-[#cccccc] font-black md:text-8xl">
              Leslie Kodjoe
            </h4>
            <p className="mt-4 text-lg leading-loose md:w-[518px] md:text-xl">
              A{" "}
              <span className="font-black">Frontend Developer & Designer</span>{" "}
              who loves creating different user experiences.
            </p>
          </div>
          {/* <div className="mt-8 w-full border flex flex-wrap md:mt-16">
            <div className="w-1/4">Freelance<br/>Developer</div>
            <div className="w-1/4">Based in<br/> Ghana</div>
            <div className="w-1/4">Get in touch<br/><span className="font-semibold">leswulffk@gmail.com</span></div>
            <div className="w-1/4">right</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
