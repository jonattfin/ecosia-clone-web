const environment = getEnvironment();

export const httpBaseUrl = environment.httpBaseUrl;
export const wssBaseUrl = environment.wssBaseUrl;

export const fetchProjects = async () => {
  const res = await fetch(`${httpBaseUrl}/projects`);
  return res.json();
};

export const fetchProjectById = async (
  projectId: string | string[] | undefined
) => {
  const res = await fetch(`${httpBaseUrl}/projects/${projectId}`);
  return res.json();
};

export const fetchTags = async () => {
  const res = await fetch(`${httpBaseUrl}/tags`);
  return res.json();
};

export const fetchReports = async () => {
  const res = await fetch(`${httpBaseUrl}/reports`);
  return res.json();
};

export const searchByQueryAsync = async (
  query: string | undefined
): Promise<ResultQuery[]> => {
  const res = await fetch(`${httpBaseUrl}/search/${query}`);
  return res.json();
};

export interface ResultQuery {
  url: string;
  snippet: string;
  name: string;
}

function getEnvironment(isDevelopment: boolean = false) {
  return isDevelopment ? getDevEnvironment() : getProdEnvironment();

  function getDevEnvironment() {
    const baseUrl = "localhost:8080";

    return {
      baseUrl,
      httpBaseUrl: `http://${baseUrl}`,
      wssBaseUrl: `ws://${baseUrl}`,
    };
  }

  function getProdEnvironment() {
    const baseUrl = "ecosia-clone-nestjs.herokuapp.com";

    return {
      baseUrl,
      httpBaseUrl: `https://${baseUrl}`,
      wssBaseUrl: `wss://${baseUrl}`,
    };
  }
}
