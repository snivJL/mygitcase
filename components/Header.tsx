import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Header = () => {
  return (
    <div className="bg-bg100 h-16 text-primary w-full">
      <div className="pl-8 mx-auto inline-flex items-center h-full">
        <AiFillGithub size={50} />
        <ul className="container mx-auto inline-flex items-center h-full pl-8">
          <li className="mx-2">
            <i></i>
            <span>Overview</span>
          </li>
          <li className="mx-2">
            <i></i>
            <span>Projects</span>
          </li>
          <li className="mx-2">
            <i></i>
            <span>Repositories</span>
          </li>
          <li className="mx-2">
            <i></i>
            <span>Contact me</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
