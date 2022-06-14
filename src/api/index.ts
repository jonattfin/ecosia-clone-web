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
