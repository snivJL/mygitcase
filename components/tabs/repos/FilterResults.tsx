import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Context, ReposContext } from "../../../contexts/ReposContext";
import { IoCloseOutline } from "react-icons/io5";
import { formatSearchResults, getLabels } from "../../../helpers/utils";

const FilterResults = () => {
  const { searchterm, filteredRepos, clearFilter, sort, filter }: Context =
    useContext(ReposContext)!;
  const [hasResults, setHasResults] = useState(true);
  useEffect(() => setHasResults(filteredRepos.length >= 1), [filteredRepos]);
  return (
    <div>
      {(searchterm || filter) && (
        <div
          className={`py-4 border-t border-button text-sm tracking-normal relative ${
            !hasResults && "border-b"
          }`}
        >
          {formatSearchResults(filteredRepos, searchterm, filter, sort)}
          <button
            onClick={clearFilter}
            className="absolute right-4 top-4 inline-flex items-center btn-filter"
          >
            <IoCloseOutline size={20} className="mr-2 bg-light rounded-md" />
            <span className="">Clear filter</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterResults;
