import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

import { Projects } from "./schema";
import { IProject } from "../../shared/types";

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

  async get(): Promise<IProject[]> {
    return (await Projects.findAll()).map((p) => p.toJSON<IProject>());
  }
}
