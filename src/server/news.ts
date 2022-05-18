// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { INews } from "../shared/types";
import { newsRepository } from "./repositories";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<INews[]>
) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json(newsRepository.get());
      break;
    case "POST":
      res.status(200).json(newsRepository.get());
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
