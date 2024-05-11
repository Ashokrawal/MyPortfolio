import { useState } from "react";
import { Layout } from "../components/Layout";
import { Card } from "../components/Card";
import { BreadCrumb } from "../components/BreadCrumb";
import { projects as data } from "../utils/data/projects";

export const Project = () => {
  const [list, setList] = useState(data.frontend);
  return (
    <Layout>
      <div>
        <div className="mb-2 title">Projects</div>
        <p className="text-sm text-neutral-500">
          These are some of my most notable projects,
          <span className="font-bold text-blue-500">
            {" "}
            Click to see the repository!
          </span>
        </p>
        <BreadCrumb callback={setList} data={data} />
        <div className="flex flex-col gap-2">
          {list.map((item, i) => (
            <Card {...item} key={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
