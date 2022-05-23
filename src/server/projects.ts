// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import repos from "./repositories";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any[] | {}>
) {
  const { method } = req;

  switch (method) {
    case "GET":
      return await getProjects();
    case "POST":
      return await createProject();
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }

  async function getProjects() {
    var projects = await repos.projectRepository.get();
    return res.status(200).json(projects);
  }

  async function createProject() {
    await repos.projectRepository.create(req.body);
    return res.status(200).json({});
  }
}
