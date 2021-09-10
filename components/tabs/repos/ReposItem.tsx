import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import Repos from "../../../types/repos";
import Moment from "react-moment";
import moment from "moment";

type Repo = {
  repo: Repos;
};
const ReposItem = ({ repo }: Repo) => {
  return (
    <div className="grid grid-cols-12 border-t border-button">
      <div className="col-span-8 d-flex flex-col py-8">
        <a
          href={repo.html_url}
          className="text-link text-xl font-semibold hover:underline "
          target="_blank"
        >
          {repo.name}
        </a>
        <p className="mt-2 text-sm">{repo.description}</p>
        <div className="inline-flex items-center text-sm mt-4 tracking-normal">
          <div className="inline-flex items-center mr-4">
            <div className="h-3 w-3 bg-indigo-500 rounded-full mr-2"></div>
            {repo.language}
          </div>
          <div className="inline-flex items-center mr-4">
            <i className="mr-2">
              <AiOutlineStar />
            </i>
            {repo.stargazers_count}
          </div>
          <div className="inline-flex items-center mr-4">
            <i className="mr-2">
              <BiGitRepoForked />
            </i>
            {repo.forks_count}
          </div>
          <div className="inline-flex items-center mr-4">
            {moment(repo.updated_at).fromNow()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReposItem;
