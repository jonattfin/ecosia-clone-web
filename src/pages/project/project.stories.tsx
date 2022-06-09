import { ComponentStory } from "@storybook/react";
import { Project } from "../../shared-components";

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
    id: 1,
    name: "name",
    desc: "desc",
    imageUrl:
      "https://blog.ecosia.org/content/images/size/w1200/2021/08/Thailand_header.png",
    scope: "scope",
    tags: [],
  };
  return { project, tags: [] };
}
