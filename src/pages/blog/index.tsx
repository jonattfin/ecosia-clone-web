import { useContext } from "react";
import { useQuery } from "react-query";

import { fetchProjects } from "../../api";
import { LanguageContext } from "../../providers/context";

import BlogComponent, { BlogProps } from "./blog-component";

export default function Component() {
  const {
    isLoading,
    error,
    data: projects,
  } = useQuery("projects", fetchProjects);

  if (isLoading) return "Loading...";
  if (error || !projects) return "An error has occurred: ";

  const language = useContext(LanguageContext);

  const props: BlogProps = {
    projects,
    language,
    ...getDataAndMonths(),
  };

  return <BlogComponent {...props}></BlogComponent>;
}

const getDataAndMonths = () => {
  const data = {
    totalIncome: 2000 * 1000,
    financedTrees: 1000 * 1000,
    items: [
      { key: "trees", value: 1000 },
      { key: "green-investments", value: 250 },
      { key: "taxes-and-social-security", value: 200 },
      { key: "spreading the word", value: 100 },
      { key: "operational-costs", value: 500 },
    ],
    countries: [
      { key: "brazil", value: 10 },
      { key: "kenya", value: 11 },
      { key: "tanzania", value: 12 },
      { key: "rwanda", value: 13 },
      { key: "mexico", value: 14 },
      { key: "thailand", value: 15 },
    ],
  };

  const months = ["April 2022", "March 2022", "February 2022"];

  return { data, months };
};
