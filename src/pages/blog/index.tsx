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

  return <BlogComponent {...{ projects, language }}></BlogComponent>;
}
