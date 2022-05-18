import { IApiProjects, IApiNews, IApiReports } from "../../../shared/types";

export interface IProjectsProps {
  projects: IApiProjects;
  news: IApiNews;
  reports: IApiReports;
}
