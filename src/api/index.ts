
const baseUrl = "ecosia-clone-nestjs.herokuapp.com"

export const httpBaseUrl = `https://${baseUrl}`;
export const wsBaseUrl = `ws://${baseUrl}`;

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
