import React from "react";
import FilterRepos from "./repos/FilterRepos";
import FilterResults from "./repos/FilterResults";
import ReposList from "./repos/ReposList";

interface Props {
  active: string;
}
const TabContent = (props: Props) => {
  const { active } = props;
  return (
    <div className="w-full bg-bg500 text-primary">
      <div className="py-4 px-4">
        <div
          tabIndex={0}
          role="tabpanel"
          id="overview-tab"
          aria-labelledby="overview"
          hidden={active !== "overview"}
        >
          <p>
            Nils Frahm is a German musician, composer and record producer based
            in Berlin. He is known for combining classical and electronic music
            and for an unconventional approach to the piano in which he mixes a
            grand piano, upright piano, Roland Juno-60, Rhodes piano, drum
            machine, and Moog Taurus.
          </p>
        </div>
        <div
          tabIndex={0}
          role="tabpanel"
          id="projects-tab"
          aria-labelledby="projects"
          hidden={active !== "projects"}
        >
          <div className="text-center my-14 text-lg font-bold">
            snivJL doesn’t have any projects yet.
          </div>
        </div>
        <div
          tabIndex={0}
          role="tabpanel"
          id="repos-tab"
          aria-labelledby="repos"
          hidden={active !== "repos"}
        >
          <FilterRepos />
          <FilterResults />
          <ReposList />
        </div>
        <div
          tabIndex={0}
          role="tabpanel"
          id="contact-tab"
          aria-labelledby="contact"
          hidden={active !== "contact"}
        >
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default TabContent;
