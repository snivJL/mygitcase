import { useEffect } from "react";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import Repos from "../types/repos";

interface IObjectKeys {
  [key: string]: string | number;
}

interface IFilter extends IObjectKeys {
  field: string;
  value: string | number;
}
export interface Context {
  repos: Repos[];
  filteredRepos: Repos[];
  setRepos: Dispatch<SetStateAction<Repos[]>>;
  searchterm: string;
  setSearchterm: Dispatch<SetStateAction<string>>;
  sort: string;
  setSort: Dispatch<SetStateAction<string>>;
  filter: IFilter;
  setFilter: Dispatch<SetStateAction<IFilter>>;
  clearFilter: () => void;
}
const ReposContext = createContext<Context | undefined>(undefined);

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const ReposProvider = (props: Props) => {
  const [repos, setRepos] = useState<Repos[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<Repos[]>([]);
  const [searchterm, setSearchterm] = useState<string>("");
  const [filter, setFilter] = useState<IFilter | undefined>(undefined);
  const [sort, setSort] = useState<string>("last updated");
  useEffect(() => {
    const filtered = filter
      ? repos.filter(
          (r) =>
            r.name.includes(searchterm) && r[filter.field] === filter?.value
        )
      : repos.filter((r) => r.name.includes(searchterm));
    sort !== "name"
      ? setFilteredRepos(() => [
          ...filtered.sort((a, b) =>
            a[sort] === b[sort] ? 0 : a[sort] > b[sort] ? -1 : 1
          ),
        ])
      : setFilteredRepos(() => [
          ...filtered.sort((a, b) =>
            a[sort] === b[sort] ? 0 : a[sort] < b[sort] ? -1 : 1
          ),
        ]);
    console.log(filtered);
  }, [searchterm, filter?.value, sort]);
  // useEffect(() => {
  //   filter?.field &&
  //     setFilteredRepos(repos.filter((r) => r[filter.field] === filter?.value));
  // }, [filter?.value]);

  // useEffect(() => {
  //   sort !== "name"
  //     ? setFilteredRepos(() => [
  //         ...repos.sort((a, b) =>
  //           a[sort] === b[sort] ? 0 : a[sort] > b[sort] ? -1 : 1
  //         ),
  //       ])
  //     : setFilteredRepos(() => [
  //         ...repos.sort((a, b) =>
  //           a[sort] === b[sort] ? 0 : a[sort] < b[sort] ? -1 : 1
  //         ),
  //       ]);
  // }, [sort]);
  const clearFilter = () => {
    setSearchterm("");
    setFilter(undefined);
  };
  return (
    <ReposContext.Provider
      value={
        {
          repos,
          setRepos,
          searchterm,
          setSearchterm,
          filteredRepos,
          setFilteredRepos,
          clearFilter,
          setFilter,
          filter,
          setSort,
          sort,
        } as Context
      }
    >
      {props.children}
    </ReposContext.Provider>
  );
};

export { ReposContext, ReposProvider };
