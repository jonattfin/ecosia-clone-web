import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { fetchProjectById } from "../../api";
import ProjectComponent, { ProjectProps } from "./project-component";

export default function Index() {
  const { query } = useRouter();
  const { id } = query;
  const { isLoading, error, data } = useQuery(["project", id], () =>
    fetchProjectById(id)
  );

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: ";

  const props: ProjectProps = {
    project: data,
    tags: [],
  };

  return <ProjectComponent {...props} />;
}
