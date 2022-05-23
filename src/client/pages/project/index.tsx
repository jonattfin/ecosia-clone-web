import { useRouter } from "next/router";

import ProjectComponent from "./project-component";
import { ContentLoader } from "../../shared-components";

import { projectApi } from "../../api";

export default () => {
  const router = useRouter();
  const { pid } = router.query;

  const { data, isLoading, isError } = projectApi.getProjectById(pid);

  return (
    <ContentLoader isLoading={isLoading} isError={isError}>
      <ProjectComponent project={data} />
    </ContentLoader>
  );
};
