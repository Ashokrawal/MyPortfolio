import { useState } from "react";
import { Layout } from "../components/Layout";
import { Card } from "../components/Card";
import { BreadCrumb } from "../components/BreadCrumb";
import { projects as data } from "../utils/data/projects";
import { Link } from "react-router-dom";

export const Project = () => {
  const [list, setList] = useState(data.frontend);
  return (
    <Layout>
      <div className="flex flex-col flex-1">
        <div className="mb-2 title pt-8"> Projects</div>
        <p className="text-sm text-neutral-500">
          These are some of my projects,
          <a className="text-blue-500" href="https://github.com/Ashokrawal">
            <span className="font-bold text-blue-500">
              Click to see the Github repository!
            </span>
          </a>
        </p>
        <BreadCrumb callback={setList} data={data} />
        <div className="grid grid-cols-1 gap-4">
          {list.map((item, i) => (
            <Card {...item} key={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
