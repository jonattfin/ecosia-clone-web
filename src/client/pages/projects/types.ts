import { IProject, INews, IReport } from "../../../shared/types";

export interface IProjectsProps {
  projects: IProject[];
  news: INews[];
  reports: IReport[];
}
