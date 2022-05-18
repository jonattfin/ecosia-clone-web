import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import { Model } from "sequelize";

import { Reports } from "./schema";

export default class ReportRepository {
  async seed() {
    const reports = _.range(0, 5).map((i) => {
      var report = {
        id: uuidv4(),
        name: "Your reports in Thailand",
        country: "Thailand",
        image:
          "https://blog.ecosia.org/content/images/size/w1200/2021/08/Thailand_header.png",
        desc: "In Thailand, we are supporting rubber farmers to transform their monocultures into sustainable agroforestry rubber farms.",
      };

      return report;
    });

    await Reports.bulkCreate(reports);
  }

  async get(): Promise<Model<any, any>[]> {
    return await Reports.findAll();
  }
}
