import { useRouter } from "next/router";
import { useQuery } from "react-query";

import { fetchProjectById, fetchTags } from "../../api";
import { Tag } from "../../shared-components";
import ProjectComponent, { ProjectProps } from "./project-component";

export default function Index() {
  const { query } = useRouter();
  const { id } = query;

  const {
    data: project,
    isLoading: projectIsLoading,
    error: projectError,
  } = useQuery(["project", id], () => fetchProjectById(id));

  // Then get the project tags
  const {
    data: tags,
    isLoading: tagsAreLoading,
    error: tagsError,
  } = useQuery(["tags"], fetchTags, {
    // The query will not execute until the project exists
    enabled: !!project,
  });

  if (projectIsLoading || tagsAreLoading) return "Loading...";
  if (projectError || tagsError) return "An error has occurred: ";

  const props: ProjectProps = {
    project,
    tags //tags.filter((t: Tag) => project.tags.includes(t.id)),
  };

  return <ProjectComponent {...props} />;
}
