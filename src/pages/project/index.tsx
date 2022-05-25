import { PrismaClient } from "@prisma/client";

import ProjectComponent from "./project-component";

export async function getServerSideProps(context: any) {
  const { params } = context;
  const { id } = params;

  const prismaClient = new PrismaClient();
  const project = await prismaClient.project.findUnique({ where: { id } });

  return {
    props: {
      project,
    },
  };
}

export default function Index({ project }: any) {
  return <ProjectComponent project={project} />;
}
