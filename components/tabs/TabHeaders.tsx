import React from "react";
import Link from "next/link";
import { BsBook } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";
import { AiOutlineProject, AiOutlineMail } from "react-icons/ai";

interface Props {
  active: string;
  handleChange: (e: any) => void;
}
const TabHeaders = (props: Props) => {
  const { handleChange, active } = props;
  return (
    <div className="bg-bg500 h-16 pt-6 w-full text-primary text-sm border-b border-button">
      <div
        role="tablist"
        aria-label="header-tabs"
        className="container mx-auto inline-flex items-center h-full"
      >
        <button
          onClick={handleChange}
          role="tab"
          tabIndex={0}
          aria-selected={active === "overview"}
          aria-controls="overview-tab"
          id="overview"
          className="px-4 inline-flex items-center cursor-pointer tab-links"
        >
          <BsBook
            className={`${
              active === "overview" ? "opacity-100" : "opacity-50"
            }`}
          />
          <Link
            href={{
              pathname: "/",
            }}
            shallow
          >
            <a className="ml-2">Overview</a>
          </Link>
        </button>
        <button
          onClick={handleChange}
          role="tab"
          tabIndex={0}
          aria-selected={active === "projects"}
          aria-controls="projects-tab"
          id="projects"
          className="px-4 inline-flex items-center cursor-pointer tab-links"
        >
          <AiOutlineProject
            className={`${
              active === "projects" ? "opacity-100" : "opacity-50"
            }`}
          />
          <Link
            href={{
              pathname: "/",
              query: { tab: "projects" },
            }}
            shallow
          >
            <a className="ml-2">Projects</a>
          </Link>
        </button>
        <button
          onClick={handleChange}
          role="tab"
          tabIndex={0}
          aria-selected={active === "repos"}
          aria-controls="repos-tab"
          id="repos"
          className="px-4 inline-flex items-center cursor-pointer tab-links"
        >
          <RiGitRepositoryLine
            className={`${active === "repos" ? "opacity-100" : "opacity-50"}`}
          />
          <Link
            href={{
              pathname: "/",
              query: { tab: "repos" },
            }}
            shallow
          >
            <a className="ml-2">Repositories</a>
          </Link>
          <div className="ml-2 bg-light w-8 h-5 rounded-full text-xs pt-0.5">
            24
          </div>
        </button>
        <button
          onClick={handleChange}
          role="tab"
          tabIndex={0}
          aria-selected={active === "contact"}
          aria-controls="contact-tab"
          id="contact"
          className="px-4 inline-flex items-center cursor-pointer tab-links"
        >
          <AiOutlineMail
            className={`${active === "contact" ? "opacity-100" : "opacity-50"}`}
          />
          <Link
            href={{
              pathname: "/",
              query: { tab: "contact" },
            }}
            shallow
          >
            <a className="ml-2">Contact Me</a>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default TabHeaders;
