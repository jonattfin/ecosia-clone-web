import { useQuery } from "react-query";

import { fetchProjects } from "../../api";

import BlogComponent from "./blog-component";

export default function Component() {
  const { isLoading, error, data } = useQuery("projects", fetchProjects);

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: ";

  return <BlogComponent {...{ projects: data }}></BlogComponent>;
}
