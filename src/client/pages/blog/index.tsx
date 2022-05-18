import BlogComponent from "./blog-component";
import api from "../../api";

export default function Component() {
  const projects = api.getProjects();
  const news = api.getNews();
  const reports = api.getReports();

  return <BlogComponent {...{ projects, news, reports }}></BlogComponent>;
}
