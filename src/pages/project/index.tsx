import { useRouter } from "next/router";
import { useQuery } from "react-query";
import ProjectComponent, { ProjectProps } from "./project-component";

const fetchProject = async (projectId: string | string[] | undefined) => {
  const res = await fetch(
    `https://ecosia-clone-nestjs.herokuapp.com/projects/${projectId}`
  );
  return res.json();
};

export default function Index() {
  const { query } = useRouter();
  const { id } = query;
  const { isLoading, error, data } = useQuery(["project", id], () =>
    fetchProject(id)
  );

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: ";

  const props: ProjectProps = {
    project: data,
    tags: [],
  };

  return <ProjectComponent {...props} />;
}
