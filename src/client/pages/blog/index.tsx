import BlogComponent from "./blog-component";
import { projectApi } from "../../api";
import { IApiNews, IApiReports } from "../../../shared/types";

export default function Component() {
  const projects = projectApi.getProjects();
  const news: IApiNews = { data: [], isLoading: false, isError: false };
  const reports: IApiReports = { data: [], isLoading: false, isError: false };

  return <BlogComponent {...{ projects, news, reports }}></BlogComponent>;
}
