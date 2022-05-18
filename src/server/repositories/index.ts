import NewsRepository from "./news-repository";
import ProjectRepository from "./project-repository";
import ReportRepository from "./report-repository";

const newsRepository = new NewsRepository();
const projectRepository = new ProjectRepository();
const reportRepository = new ReportRepository();

import { sequelize } from "./schema";

(async () => {
  await sequelize.sync();
  await newsRepository.seed();
  await projectRepository.seed();
  await reportRepository.seed();
})();

export default {
  newsRepository,
  projectRepository,
  reportRepository,
};
