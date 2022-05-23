import useSWR from "swr";

import { fetcher } from "./helper";
import { IApiProjects, IApiProject, IProject } from "../../shared/types";

const baseUrl = "/api/projects";

export default class Api {
  getProjects(): IApiProjects {
    const { data, error } = useSWR(baseUrl, fetcher);

    return {
      data: data || [],
      isLoading: !error && !data,
      isError: error,
    };
  }

  getProjectById(projectId: string | string[] | undefined): IApiProject {
    const { data, error } = useSWR(`${baseUrl}/${projectId}`, fetcher);

    return {
      data: data || {},
      isLoading: !error && !data,
      isError: error,
    };
  }

  updateProjectWithId(projectId: string, project: IProject): IApiProject {
    const { data, error } = useSWR(`${baseUrl}/${projectId}`, fetcher);

    return {
      data: data || {},
      isLoading: !error && !data,
      isError: error,
    };
  }

  deleteProjectWithId(projectId: string): IApiProject {
    const { data, error } = useSWR(`${baseUrl}/${projectId}`, fetcher);

    return {
      data: data || {},
      isLoading: !error && !data,
      isError: error,
    };
  }
}
