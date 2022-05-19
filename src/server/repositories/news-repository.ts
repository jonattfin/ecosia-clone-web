import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

import { News } from "./schema";
import { INews } from "../../shared/types";

export default class NewsRepository {
  async seed() {
    var news = [
      {
        id: uuidv4(),
        name: "Your news in Thailand",
        image:
          "https://blog.ecosia.org/content/images/size/w1200/2021/08/Thailand_header.png",
        desc: "In Thailand, we are supporting rubber farmers to transform their monocultures into sustainable agroforestry rubber farms.",
      },
      {
        id: uuidv4(),
        name: "Your trees in the Philippines",
        image:
          "https://blog.ecosia.org/content/images/size/w1200/2021/04/Philipinen-header_En.png",
        desc: "In the Philippines, we are planting native seedlings to restore the land, and creating agroforestry systems with smallholder farmers.",
      },
      {
        id: uuidv4(),
        name: "Your trees in Cameroon",
        image:
          "https://blog.ecosia.org/content/images/size/w1200/2021/02/Cameroon.jpg",
        desc: "Your trees restore biodiversity all the while promoting better livelihoods for local communities.",
      },
      {
        id: uuidv4(),
        name: "Your trees in Nigeria",
        image:
          "https://blog.ecosia.org/content/images/size/w1200/2021/04/Nigeria-header_En.png",
        desc: "Your trees in Nigeria are providing opportunities for inclusive rural development.",
      },
    ];

    await News.bulkCreate(news);
  }

  async get(): Promise<INews[]> {
    const news = (await News.findAll()).map((o) => o.toJSON<INews>());
    return news;
  }
}
