import React, { useContext } from "react";
import { Context, ReposContext } from "../../../contexts/ReposContext";
import Repos from "../../../types/repos";
import ReposItem from "./ReposItem";

const ReposList = () => {
  const { repos, searchterm, filteredRepos, filter }: Context =
    useContext(ReposContext)!;
  return (
    <div>
      {searchterm || filter ? (
        filteredRepos.length > 0 ? (
          filteredRepos.map((r: Repos) => <ReposItem repo={r} />)
        ) : (
          <div className="text-center my-14 text-lg font-bold">
            snivJL doesn’t have any repositories that match.
          </div>
        )
      ) : (
        repos.map((r: Repos) => <ReposItem repo={r} />)
      )}
    </div>
  );
};

export default ReposList;
