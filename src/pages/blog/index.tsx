import { useQuery } from "react-query";

import BlogComponent from "./blog-component";

const fetchProjects = async () => {
  const res = await fetch("https://ecosia-clone-nestjs.herokuapp.com/projects");
  return res.json();
};

export default function Component() {
  const { isLoading, error, data } = useQuery("projects", fetchProjects);

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: ";

  return <BlogComponent {...{ projects: data }}></BlogComponent>;
}
