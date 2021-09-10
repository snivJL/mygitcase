import React from "react";
import { BsStar, BsFillPeopleFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="d-flex flex-col py-8 px-6 bg-bg500 text-primary h-full ">
      <div className="w-32 h-32 rounded-full bg-indigo-400 mx-auto"></div>
      <div className="my-4 mx-auto w-max">
        <h1 className="font-bold text-xl">Julien Lejay</h1>
        <h2 className="font-bold text-lg opacity-70">@snivJL</h2>
      </div>
      <div className="text-sm text-left">
        Lorem ipsum dolor sit amet consecur adipisicing elit. Repudiandae
      </div>
      <div className="my-4 pb-4 w-full inline-flex items-center justify-between border-b border-button">
        <div className="inline-flex items-center">
          <BsFillPeopleFill />
          <span className="pl-1">25 followers</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-white"></div>
        <div className="inline-flex items-center">
          <span>15 following</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-white"></div>

        <div className="inline-flex items-center">
          <BsStar />
          <span className="pl-1">0</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
