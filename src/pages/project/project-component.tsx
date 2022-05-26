import React from "react";
import { Grid } from "@mui/material";
import { Project, Tag } from "@prisma/client";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import { Image } from "../../shared-components";
import * as Images from "./images";
import styles from "./project.module.scss";
import Link from "next/link";
import _ from "lodash";

interface ProjectProps {
  project: Project;
  tags: Tag[];
}

export default function Index({ project, tags }: ProjectProps) {
  const imageProps = {
    width: 374 / 2,
    height: 684 / 2,
    alt: "something special",
  };

  const logoimageProps = { width: 150, height: 0, alt: "something special" };
  logoimageProps.height = imageProps.width * 0.5;

  return (
    <div className={styles.project}>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={3}>
          &nbsp;
        </Grid>
        <Grid item xs={12} xl={6}>
          <div className={styles["logo-header"]}>
            <div className={styles["logo-image"]}>
              <Image src={Images.LogoImage} {...logoimageProps} />
            </div>
            <h1 className={styles["blog-title"]}>Blog</h1>
          </div>

          <div className={styles["projects-header"]}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link href="/">Home</Link>
              <Link href="/blog">Projects</Link>
              <Typography color="textPrimary">{project.name}</Typography>
            </Breadcrumbs>
          </div>

          <div className={styles.container}>
            <img src={project.image}></img>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={12} xl={4}>
                <p>trees planted</p>
                <p className={styles.teal}>9000</p>
              </Grid>
              <Grid item xs={12} xl={4}>
                <p>hectares restored</p>
                <p className={styles.orange}>updating</p>
              </Grid>
              <Grid item xs={12} xl={4}>
                <p>since</p>
                <p className={styles.green}>2001</p>
              </Grid>
              <Grid item xs={12} xl={12}>
                <h1>From monoculture to sustainable rubber farming</h1>
              </Grid>
              <Grid item xs={12} xl={6}>
                <p>{project.desc}</p>
              </Grid>
              <Grid item xs={12} xl={6}>
                <Image src={Images.CountryMapImage} {...imageProps}></Image>
              </Grid>
              {showTags(tags)}
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} xl={3}>
          &nbsp;
        </Grid>
      </Grid>
    </div>
  );
}

function showTags(tags: any[]) {
  return (
    <React.Fragment>
      {tags.map((tag, index) => (
        <Grid item xs={12} xl={4} key={`tag-${index}`}>
          {renderImage(tag.title)}
          <p>{tag.title}</p>
          <p>{tag.subtitle}</p>
        </Grid>
      ))}
    </React.Fragment>
  );

  function renderImage(title: string) {
    const images = [
      { slug: "Partners", src: Images.PartnersImage },
      { slug: "Planting method", src: Images.PlantingMethodImage },
      { slug: "Planting season", src: Images.PlantingSeasonImage },
      { slug: "Main threats", src: Images.MainThreatsImage },
      { slug: "Wildlife protected", src: Images.WildlifeProtectedImage },
      { slug: "Challenges", src: Images.ChallengesImage },
    ];

    const foundImage = _.find(images, (x) =>
      x.slug.toLowerCase().includes(title.toLowerCase())
    );

    if (foundImage) {
      const imageProps = { width: 172, height: 161, alt: "something special" };

      return <Image src={foundImage.src} {...imageProps}></Image>;
    }
  }
}
