import { Project } from "@prisma/client";
import { ComponentStory } from "@storybook/react";

import ProjectComponent from "./project-component";

export default function Index() {
  return <div></div>;
}

const ProjectPageTemplate: ComponentStory<typeof ProjectComponent> = (args) => (
  <ProjectComponent {...args} />
);

export const SearchComponent = ProjectPageTemplate.bind({});
SearchComponent.args = {
  ...getProjectAndTags(),
};

function getProjectAndTags() {
  const project: Project = {
    id: "id",
    name: "name",
    desc: "desc",
    image:
      "https://blog.ecosia.org/content/images/size/w1200/2021/08/Thailand_header.png",
    scope: "scope",
  };
  return { project, tags: [] };
}
