import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Tabs from "../components/Tabs";
import React, { useContext, useEffect } from "react";
import { GetStaticProps } from "next";
import Repos from "../types/repos";
import { Context, ReposContext } from "../contexts/ReposContext";
import Footer from "../components/Footer";

export interface Props {
  repos: Array<Repos>;
}
export default function Home(props: Props) {
  const { setRepos }: Context = useContext(ReposContext)!;
  useEffect(() => {
    setRepos(props.repos);
  });
  return (
    <div className="grid grid-cols-12 bg-bg500 ">
      <div className="row-start-1 col-span-full">
        <Header />
      </div>
      <div className="row-start-2 col-start-1 col-span-3 min-h-screen">
        <Sidebar />
      </div>
      <div className="row-start-2 col-start-4 col-span-9">
        <Tabs repos={props.repos} />
      </div>
      <div className="row-start-3  col-span-full">
        <Footer />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const resRepos = await fetch(
    "https://api.github.com/users/snivjl/repos?sort=updated_at&order=asc"
  );
  const repos = await resRepos.json();
  if (!repos) {
    return {
      notFound: true,
    };
  }

  return {
    props: { repos },
  };
};
