import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

import { Projects } from "./schema";
import { IProject, IProjectDetails } from "../../shared/types";

const projects = [
  {
    id: uuidv4(),
    name: "Your news in Thailand",
    scope: "Thailand",
    image:
      "https://blog.ecosia.org/content/images/size/w1200/2021/08/Thailand_header.png",
    desc: "In Thailand, we are supporting rubber farmers to transform their monocultures into sustainable agroforestry rubber farms.",
  },
  {
    id: uuidv4(),
    name: "Your trees in the Philippines",
    scope: "Tree planting",
    image:
      "https://blog.ecosia.org/content/images/size/w1200/2021/04/Philipinen-header_En.png",
    desc: "In the Philippines, we are planting native seedlings to restore the land, and creating agroforestry systems with smallholder farmers.",
  },
  {
    id: uuidv4(),
    name: "Your trees in Cameroon",
    scope: "Tree planting",
    image:
      "https://blog.ecosia.org/content/images/size/w1200/2021/02/Cameroon.jpg",
    desc: "Your trees restore biodiversity all the while promoting better livelihoods for local communities.",
  },
  {
    id: uuidv4(),
    name: "Your trees in Nigeria",
    scope: "Tree planting",
    image:
      "https://blog.ecosia.org/content/images/size/w1200/2021/04/Nigeria-header_En.png",
    desc: "Your trees in Nigeria are providing opportunities for inclusive rural development.",
  },
];

export default class ProjectRepository {
  async seed() {
    await Projects.bulkCreate(projects);
  }

  async get(): Promise<IProject[]> {
    return (await Projects.findAll()).map((p) => p.toJSON<IProject>());
  }

  async getById(projectId: string | string[]): Promise<any> {
    // return (
    //   await Projects.findOne({ where: { id: projectId } })
    // )?.toJSON<IProjectDetails>();

    const firstProject = projects[0];

    const project: IProjectDetails = { ...firstProject, tags: [] };
    return project;
  }

  async create(project: IProject) {
    return await Projects.create({ ...project });
  }

  async update(projectId: string | string[], project: IProject) {
    return await Projects.update(
      { ...project },
      {
        where: { id: projectId },
      }
    );
  }

  async delete(projectId: string | string[]) {
    return await Projects.destroy({ where: { id: projectId } });
  }
}
