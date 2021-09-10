import React, { useState } from "react";
import Repos from "../types/repos";
import TabContent from "./tabs/TabContent";
import TabHeaders from "./tabs/TabHeaders";
import { useRouter } from "next/router";
import { useEffect } from "react";

export interface Props {
  repos: Array<Repos>;
}
const Tabs = (props: Props) => {
  const router = useRouter();
  const [active, setActive] = useState("");
  console.log(active, router.query.tab);
  useEffect(() => setActive((router.query.tab as string) || ""), [router]);
  const handleChange = (e: any) => {
    setActive(e.currentTarget.id);
  };
  return (
    <>
      <TabHeaders handleChange={handleChange} active={active} />
      <TabContent active={active} />
    </>
  );
};

export default Tabs;
