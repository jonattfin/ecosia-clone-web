import { IProjectDetails } from "../../../shared/types";
import * as Images from "./images";
import ProjectComponent from "./project-component";

export default () => <div></div>;

export const ProjectPage = () => {
  return <ProjectComponent project={getProject()} />;
};
ProjectPage.parameters = {
  storyshots: { disable: true },
};

function getProject() {
  const project: IProjectDetails = {
    id: "id",
    name: "name",
    desc: "desc",
    image: "image",
    scope: "scope",
    tags: getTags(),
  };
  return project;

  function getTags() {
    return [
      {
        image: Images.PartnersImage,
        title: "Partners",
        subtitle: "Prince of Songkhla University/Einhorn",
      },
      {
        image: Images.PlantingMethodImage,
        title: "Planting method",
        subtitle: "Nursery, intercropping",
      },
      {
        image: Images.PlantingSeasonImage,
        title: "Planting season",
        subtitle: "August to January",
      },
      {
        image: Images.MainThreatsImage,
        title: "Main threats",
        subtitle: "Monoculture rubber plantations",
      },
      {
        image: Images.WildlifeProtectedImage,
        title: "Wildlife protected",
        subtitle: "updating...",
      },
      {
        image: Images.ChallengesImage,
        title: "Challenges",
        subtitle: "global demand for rubber at competetitive prices",
      },
    ];
  }
}
