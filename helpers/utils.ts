import Repos from "../types/repos";

export const getFilters = (id: string) => {
  switch (id) {
    case "last updated":
      return "updated_at";
    case "name":
      return "name";
    case "stars":
      return "stargazers_count";
    default:
      return "";
  }
};
export const getLabels = (id: string) => {
  switch (id) {
    case "updated_at":
      return "last updated";
    case "name":
      return "name";
    case "stargazers_count":
      return "stars";
    default:
      return "last updated";
  }
};
export const formatSearchResults = (
  repos: Repos[],
  searchterm: string,
  filter: any,
  sort: string
) => {
  if (searchterm && filter)
    return `${repos.length} ${
      repos.length > 1 ? "results" : "result"
    } for repositories matching ${searchterm} written in ${filter.value.toLowerCase()} sorted by ${getLabels(
      sort
    )}`;
  else if (searchterm && !filter) {
    return `${repos.length} ${
      repos.length > 1 ? "results" : "result"
    } for repositories matching ${searchterm} sorted by ${getLabels(sort)}`;
  } else if (!searchterm && filter) {
    return `${repos.length} ${
      repos.length > 1 ? "results" : "result"
    } for repositories  written in ${filter.value.toLowerCase()} sorted by ${getLabels(
      sort
    )}`;
  }
};
