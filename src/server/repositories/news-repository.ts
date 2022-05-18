import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

import { INews } from "../../shared/types";

export default class NewsRepository {
  get(): INews[] {
    var news = _.range(0, 5).map((i) => {
      var newsItem: INews = {
        id: uuidv4(),
        name: "Your news in Thailand",
        image:
          "https://blog.ecosia.org/content/images/size/w1200/2021/08/Thailand_header.png",
        desc: "In Thailand, we are supporting rubber farmers to transform their monocultures into sustainable agroforestry rubber farms.",
      };

      return newsItem;
    });
    return news;
  }
}
