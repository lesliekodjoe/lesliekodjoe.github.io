import React, { useState } from 'react'

const Project = () => {
  const [activeTab, setActiveTab] = useState("work")

  const handleTabButton = (tab:string) => {
      setActiveTab(tab)
  }
  return (
    <div className="h-screen w-full relative z-10 bg-[#1d1d1d] text-white">
      <div className="pt-20">
        <div className="container bg-white bg-opacity-5 py-2 px-4 w-fit rounded-full border border-[#3f3f3f]">
          <button
            className={`w-[91px] h-[41px] ${
              activeTab === "work"
                ? "bg-[#3B3B3B] rounded-full font-bold"
                : ""
            }`}
            onClick={()=> handleTabButton("work")}
          >
            Work
          </button>
          <button
            className={`w-[91px] h-[41px] ${
              activeTab === "design"
                ? "bg-[#3B3B3B] rounded-full font-bold"
                : ""
            }`}
            onClick={()=>handleTabButton("design")}
          >
            Design
          </button>
        </div>
        <div>
          {
            activeTab === "work" ? (
              <div>Work Feed</div>
            ) : (
              <div>Design Feed</div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Project