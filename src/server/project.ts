// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import repos from "./repositories";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any[] | any>
) {
  const { method } = req;

  switch (method) {
    case "GET":
      return await getById();
    case "PUT":
      return await update();
    case "DELETE":
      return await deleteById();
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }

  async function getById() {
    var project = await repos.projectRepository.getById(req.query.id);
    return res.status(200).json(project);
  }

  async function update() {
    await repos.projectRepository.update(req.query.id, req.body);
    return res.status(200).json({});
  }

  async function deleteById() {
    await repos.projectRepository.delete(req.query.id);
    return res.status(200).json({});
  }
}
