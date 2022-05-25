import { useState } from "react";
import { PrismaClient, Project } from "@prisma/client";

import BlogComponent from "./blog-component";

export async function getServerSideProps() {
  const prismaClient = new PrismaClient();
  const projects = await prismaClient.project.findMany();

  return {
    props: {
      initialProjects: projects,
    },
  };
}

export default function Component(props: any) {
  const [projects, setProjects] = useState<Project[]>(props.initialProjects);

  return <BlogComponent {...{ projects }}></BlogComponent>;
}
