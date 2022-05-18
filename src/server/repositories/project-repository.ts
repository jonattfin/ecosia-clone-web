import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import { Model } from "sequelize";

import { Projects } from "./schema";

export default class ProjectRepository {
  async seed() {
    const projects = _.range(0, 5).map((i) => {
      var project = {
        id: uuidv4(),
        name: "Your projects in Thailand",
        country: "Thailand",
        image:
          "https://blog.ecosia.org/content/images/size/w1200/2021/08/Thailand_header.png",
        desc: "In Thailand, we are supporting rubber farmers to transform their monocultures into sustainable agroforestry rubber farms.",
      };

      return project;
    });

    await Projects.bulkCreate(projects);
  }

  async get(): Promise<Model<any, any>[]> {
    return await Projects.findAll();
  }
}
