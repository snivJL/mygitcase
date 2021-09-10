import React, { useState } from "react";
import { useContext } from "react";
import { Context, ReposContext } from "../../../contexts/ReposContext";
import DropdownButton from "../../elements/DropdownButton";

const FilterRepos = () => {
  const { setSearchterm, searchterm, repos }: Context =
    useContext(ReposContext)!;
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchterm(e.currentTarget.value);
  };
  return (
    <div className="pb-4 d-flex items-center">
      <input
        className="text-primary bg-bg500 w-3/4 mr-4 border border-input focus:outline-none px-2 py-1 rounded-lg"
        onChange={handleChange}
        value={searchterm}
        type="text"
        placeholder="Find a repository.."
      />
      <DropdownButton
        title="language"
        links={[
          ...new Set(repos.map((r) => r.language).filter((lang) => lang)),
        ]}
        label="language"
      />
      <DropdownButton
        isSort={true}
        title="sort"
        links={["last updated", "name", "stars"]}
        label="order"
      />
    </div>
  );
};

export default FilterRepos;
