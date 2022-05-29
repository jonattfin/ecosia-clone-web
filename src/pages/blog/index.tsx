import { PrismaClient } from "@prisma/client";

import BlogComponent, { BlogProps } from "./blog-component";

export async function getServerSideProps() {
  const prismaClient = new PrismaClient();
  const projects = await prismaClient.project.findMany();

  return {
    props: {
      projects,
    },
  };
}

export default function Component({ projects }: BlogProps) {
  return <BlogComponent {...{ projects }}></BlogComponent>;
}
