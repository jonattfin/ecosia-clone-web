// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import repos from "./repositories";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any[]>
) {
  const { method } = req;

  switch (method) {
    case "GET":
      var reports = await repos.reportRepository.get();
      res.status(200).json(reports);
      break;
    case "POST":
      // TODO
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
