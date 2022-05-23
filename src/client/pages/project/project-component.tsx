import React from "react";
import Image from "next/image";

import { Grid } from "@mui/material";

import { IProjectDetails } from "../../../shared/types";

import * as Images from "./images";
import styles from "./project.module.scss";

interface ProjectComponentProps {
  project: IProjectDetails;
}

export default ({ project }: ProjectComponentProps) => {
  return (
    <div className={styles.project}>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={4}>
          &nbsp;
        </Grid>
        <Grid item xs={12} xl={4}>
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
                <Image src={Images.CountryMapImage}></Image>
              </Grid>
              {showExtraInfo(project.tags)}
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} xl={4}>
          &nbsp;
        </Grid>
      </Grid>
    </div>
  );
};

function showExtraInfo(extraItems: any[]) {
  return (
    <React.Fragment>
      {extraItems.map((item, index) => (
        <Grid item xs={12} xl={4} key={`extra-item-${index}`}>
          <Image src={item.image}></Image>
          <p>{item.title}</p>
          <p>{item.subtitle}</p>
        </Grid>
      ))}
    </React.Fragment>
  );
}
