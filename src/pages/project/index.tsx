import { PrismaClient } from "@prisma/client";

import ProjectComponent from "./project-component";

export async function getServerSideProps(context: any) {
  const { params } = context;
  const { id } = params;

  const prismaClient = new PrismaClient();

  const project = await prismaClient.project.findUnique({ where: { id } });
  const tags = await prismaClient.tag.findMany({ where: { projectId: id } });

  return {
    props: {
      project,
      tags,
    },
  };
}

export default function Index({ project, tags }: any) {
  return <ProjectComponent project={project} tags={tags} />;
}
