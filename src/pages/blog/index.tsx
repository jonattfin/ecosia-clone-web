import { useContext } from "react";
import { useQuery } from "react-query";

import { fetchProjects, fetchReports } from "../../api";
import { LanguageContext } from "../../providers/context";

import BlogComponent, { BlogProps } from "./blog-component";

export default function Component() {
  const {
    isLoading: projectsAreLoading,
    error: projectsError,
    data: projects,
  } = useQuery("projects", fetchProjects);

  const {
    isLoading: reportsAreLoading,
    error: reportsError,
    data: reports,
  } = useQuery("projects", fetchReports);

  if (projectsAreLoading || reportsAreLoading) return "Loading...";
  if (projectsError || reportsError || !projects || !reports)
    return "An error has occurred...";

  const props: BlogProps = {
    projects,
    reports,
    language: useContext(LanguageContext),
  };

  return <BlogComponent {...props}></BlogComponent>;
}
