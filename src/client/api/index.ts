import useSWR from "swr";

import { IApiProjects, IApiReports, IApiNews } from "../../shared/types";

const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init);
  return res.json();
};

class Api {
  getProjects(): IApiProjects {
    const { data, error } = useSWR(`/api/projects`, fetcher);

    return {
      data: data || [],
      isLoading: !error && !data,
      isError: error,
    };
  }

  getReports(): IApiReports {
    const { data, error } = useSWR(`/api/reports`, fetcher);

    return {
      data: data || [],
      isLoading: !error && !data,
      isError: error,
    };
  }

  getNews(): IApiNews {
    const { data, error } = useSWR(`/api/news`, fetcher);

    return {
      data: data || [],
      isLoading: !error && !data,
      isError: error,
    };
  }
}

export default new Api();
