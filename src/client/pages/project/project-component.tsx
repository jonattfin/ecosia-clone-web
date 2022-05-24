import React from "react";
import { Grid } from "@mui/material";

import { IProjectDetails } from "../../../shared/types";

import { Image } from "../../shared-components";
import * as Images from "./images";
import styles from "./project.module.scss";

interface ProjectComponentProps {
  project: IProjectDetails;
}

export default ({ project }: ProjectComponentProps) => {
  const imageProps = { width: 374 / 2, height: 684 / 2 };

  return (
    <div className={styles.project}>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={3}>
          &nbsp;
        </Grid>
        <Grid item xs={12} xl={6}>
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
                <p>
                  In Thailand, we are partnering with the Prince of Songkhla
                  University and Einhorn to support rubber farmers who are
                  interested in transforming their monocultures into sustainable
                  agroforestry systems.{" "}
                </p>
              </Grid>
              <Grid item xs={12} xl={6}>
                <Image src={Images.CountryMapImage} {...imageProps}></Image>
              </Grid>
              {showTags(project.tags)}
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} xl={3}>
          &nbsp;
        </Grid>
      </Grid>
    </div>
  );
};

function showTags(tags: any[]) {
  const imageProps = { width: 100, height: 0 };
  imageProps.height = imageProps.width * 0.5;

  return (
    <React.Fragment>
      {tags.map((tag, index) => (
        <Grid item xs={12} xl={4} key={`tag-${index}`}>
          <Image src={tag.image} {...imageProps}></Image>
          <p>{tag.title}</p>
          <p>{tag.subtitle}</p>
        </Grid>
      ))}
    </React.Fragment>
  );
}
