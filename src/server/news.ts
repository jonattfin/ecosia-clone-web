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
      var news = await repos.newsRepository.get();
      res.status(200).json(news);
      break;
    case "POST":
      // TODO
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
