const baseUrl = "https://ecosia-clone-nestjs.herokuapp.com";

export const fetchProjects = async () => {
  const res = await fetch(`${baseUrl}/projects`);
  return res.json();
};

export const fetchProjectById = async (
  projectId: string | string[] | undefined
) => {
  const res = await fetch(`${baseUrl}/projects/${projectId}`);
  return res.json();
};

export const fetchTags = async () => {
  const res = await fetch(`${baseUrl}/tags`);
  return res.json();
};

export const fetchReports = async () => {
  const res = await fetch(`${baseUrl}/reports`);
  return res.json();
};

export const searchByQueryAsync = async (
  query: string | undefined
): Promise<ResultQuery[]> => {
  const res = await fetch(`${baseUrl}/search/${query}`);
  return res.json();
};

export interface ResultQuery {
  url: string;
  snippet: string;
  name: string;
}
