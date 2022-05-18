// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { IProject } from "../shared/types";
import { projectRepository } from "./repositories";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProject[]>
) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json(projectRepository.get());
      break;
    case "POST":
      res.status(200).json(projectRepository.get());
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
