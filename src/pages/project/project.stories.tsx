import ProjectComponent from "./project-component";

export default function Index() {
  return <div></div>;
}

export const ProjectPage = () => {
  return <ProjectComponent project={getProject()} />;
};
ProjectPage.parameters = {
  storyshots: { disable: true },
};

function getProject() {
  const project: any = {
    id: "id",
    name: "name",
    desc: "desc",
    image:
      "https://blog.ecosia.org/content/images/size/w1200/2021/08/Thailand_header.png",
    scope: "scope",
    tags: [],
  };
  return project;
}
