import { useEffect, useState } from "react";
import _ from "lodash";

import ProjectsComponent from "./projects-component";
import { IProject, INews, IReport } from "../../../shared/types";

export default function Component() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [news, setNews] = useState<INews[]>([]);
  const [reports, setReports] = useState<IReport[]>([]);

  useEffect(() => {
    setTimeout(async () => {
      var projectsResponse = await fetch("/api/projects");
      var projectsData = await projectsResponse.json();
      setProjects(projectsData);

      var newsResponse = await fetch("/api/news");
      var newsData = await newsResponse.json();
      setNews(newsData);

      var reportsResponse = await fetch("/api/reports");
      var reportsData = await reportsResponse.json();
      setReports(reportsData);
    }, 1000);
  }, []);

  return (
    <ProjectsComponent {...{ projects, news, reports }}></ProjectsComponent>
  );
}
