// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { IReport } from "../shared/types";
import { reportRepository } from "./repositories";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IReport[]>
) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json(reportRepository.get());
      break;
    case "POST":
      res.status(200).json(reportRepository.get());
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
